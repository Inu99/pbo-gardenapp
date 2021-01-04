import { createStore } from 'vuex'
import firebase from "../Firebase";

export default createStore({
  state: {
    loggedInUserId: "0",
    userPlants: [],
    isFetching: false,
    allPlants: []
  },
  getters: {
    getLoggedInUser: state => state.loggedInUserId,
    userPlants: state => state.userPlants,
    allPlants: state => state.allPlants,
    isFetching: state => state.isFetching
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
    }
  },
  actions: {
    fetchUserPlants({ commit, state }) {
      // load plants for user
      let userPlantIds = [];
      const userRef = firebase.firestore().collection("users")

      commit("setFetching", true)
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
        console.log(userPlants)
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
          });
        });
        commit("setAllPlants", plants);
        commit("setFetching", false)
      });
    },
  },
  modules: {
  }
})
