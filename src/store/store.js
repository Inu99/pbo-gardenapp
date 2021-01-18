import { createStore } from 'vuex'
import firebase from "../Firebase";

export default createStore({
  state: {
    loggedInUserId: "0",
    userPlants: [],
    isFetching: false,
    allPlants: [],
    searchedPlants: []
  },
  getters: {
    getLoggedInUserID: state => state.loggedInUserId,
    userPlants: state => state.userPlants,
    allPlants: state => state.allPlants,
    isFetching: state => state.isFetching,
    searchedPlants: state => state.searchedPlants
  },
  mutations: {
    setLoggedInUser(state, id) {
      state.loggedInUserId = id
    },
    setUserPlants(state, plants) {
      state.userPlants = plants
    },
    setAllPlants(state, plants) {
      state.allPlants = plants
    },
    setFetching(state, value) {
      state.isFetching = value
    },
    logOutUser(state) {
      state.loggedInUserId = 0
      state.userPlants = []
    },
    setSearchedPlants(state, plants) {
      state.searchedPlants = plants
    }
  },
  actions: {
    async fetchUserPlants({ dispatch, commit, state }) {
      // load plants for user
      let userPlantIds = [];
      const userRef = firebase.firestore().collection("users")

      commit("setFetching", true)

      if (state.allPlants.length == 0) {
        dispatch("fetchAllPlants")
      }

      userRef.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((user) => {
          if (user.id == state.loggedInUserId)
            userPlantIds = user.data().plants;
        });
        let userPlants = [];
        userPlantIds.forEach((id) => {
          let buff = state.allPlants.filter((plant) => plant.id == id);
          userPlants.push(buff[0]);
        });
        commit("setUserPlants", userPlants);
        commit("setFetching", false)
      });
    },

    fetchAllPlants({ commit }) {
      const plantsRef = firebase.firestore().collection("plants")
      let plants = []

      commit("setFetching", true)
      plantsRef.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          plants.push({
            id: doc.id,
            name: doc.data().name,
            imageUrl: doc.data().image_url,
            harvestRelativeToSowing: doc.data().harvest_relative_to_sowing,
            harvestTimeBegin: doc.data().harvest_time_begin,
            harvestTimeEnd: doc.data().harvest_time_end,
            sunSensitive: doc.data().sun_sensitive,
            winterProof: doc.data().winter_proof,
          });
        });
        commit("setAllPlants", plants);
        commit("setFetching", false)
      });
    },

    loginUser({ dispatch, commit }, payload) {
      const userRef = firebase.firestore().collection("users");
      return new Promise((resolve, reject) => {
        userRef.onSnapshot((querySnapshot) => {
          querySnapshot.forEach((user) => {
            if (
              user.data().name == payload.username &&
              user.data().password == payload.password
            ) {
              commit("setLoggedInUser", user.id);
              dispatch("fetchUserPlants")
              return resolve(true)
            }
          });
          return reject(false)
        });
      })
    },
    async createNewUser({ dispatch, commit }, payload) {
      const allUsers = await dispatch("getAllUsers");
      const userRef = await firebase.firestore().collection("users").doc();
      return new Promise((resolve, reject) => {
        if (payload.password != payload.passwordAgain) {
          // console.log("falschen Passwort");
          return reject("wrong password")
        }

        let userExcists = false;
        allUsers.forEach((user) => {
          if (user.data.name == payload.username) {
            userExcists = true;
          }
        });
        if (userExcists) {
          // console.log("user <" + this.username + "> existiert schon");
          return reject("user <" + payload.username + "> allready exists")
        }

        const data = {
          name: payload.username,
          password: payload.password,
          location: payload.location,
          age: payload.age,
          plants: [],
        };

        userRef.set(data);
        commit("setLoggedInUser", userRef.id)
        commit("setUserPlants", [])
        return resolve()
      })
    },
    async getAllUsers() {
      const userRef = firebase.firestore().collection("users");
      let allUsers = [];
      return new Promise((resolve) => {
        userRef.onSnapshot((querySnapshot) => {
          querySnapshot.forEach((user) => {
            allUsers.push({
              id: user.id,
              data: user.data(),
            });
          });
          resolve(allUsers);
        });
      });
    },
    searchPlants({ commit, state }, payload) {
      let buff = []
      const searchTermLarge = payload.searchTerm.toUpperCase()
      state.allPlants.forEach(plant => {
        const large = plant.name.toUpperCase()
        if (large.includes(searchTermLarge)) {
          buff.push(plant)
        }
      })
      commit("setSearchedPlants", buff)
    }
  },
  modules: {
  }
})
