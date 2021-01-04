<!-- 
      example usage: <Header pageName="Willkommen" userId="1337" />
      props:
        - pageName: String  -> displayed title, possible values: Willkommen, Nutzer, Planze, Suche, Anlegen
        - userId  : Number  -> indicates which user is logged in

      TODO:   
        - display error on wrong username/password
-->

<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <!-- Login modal -->
    <vue-final-modal v-model="showModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="showModal = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="username"
            />
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              v-model="password"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="doLogin">
              Login
            </button>
          </div>
        </div>
      </div>
    </vue-final-modal>
    <!-- navigate back btn -->
    <div class="btn-back">
      <i
        class="material-icons icons"
        v-if="bools.hasReturnBtn"
        @click="this.$router.go(-1)"
      >
        arrow_back</i
      >
    </div>
    <!-- title -->
    <div id="header_title" class="navbar-brand title">{{ pageName }}</div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto"></ul>
      <form class="form-inline my-2 my-lg-0">
        <!-- home btn -->
        <router-link v-if="bools.hasHomeBtn" to="/">
          <i class="material-icons icons">home</i>
        </router-link>
        <!-- search btn -->
        <router-link v-if="bools.hasSearchBtn" to="/">
          <i class="material-icons icons">search</i>
        </router-link>
        <div class="dropdown">
          <!-- user icon -->
          <button class="dropbtn bg-light">
            <i class="material-icons icons">account_circle</i>
          </button>
          <!-- dropdown for user icon -->
          <div class="dropdown-content">
            <router-link :to="`/user/${userId}`" v-if="isLoggedIn">
              Mein Profil
            </router-link>
            <a href="#" v-if="isLoggedIn" @click="doLogout">Logout</a>
            <a href="#" v-if="!isLoggedIn" @click="showModal = true">Login</a>
          </div>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
import { reactive, ref } from "vue";
import firebase from "../Firebase";

export default {
  name: "Header",
  props: {
    pageName: String,
    userId: String,
  },
  setup(props) {
    const bools = reactive({
      hasReturnBtn: true,
      hasSearchBtn: true,
      hasHomeBtn: true,
    });
    const isLoggedIn = ref(props.userId == 0 ? false : true);
    const showModal = ref(false);
    const username = ref("");
    const password = ref("");
    // check if user is Logged in

    // check which page is shown
    switch (props.pageName) {
      case "Willkommen":
        // HomeScreen
        bools.hasReturnBtn = false;
        bools.hasHomeBtn = false;
        break;
      case "Suche":
        bools.hasSearchBtn = false;
        break;
      case "Anlegen":
        bools.hasSearchBtn = false;
        break;
      default:
        break;
    }

    return { bools, isLoggedIn, showModal, username, password };
  },

  methods: {
    doLogout() {
      // logout the User
      this.$store.commit("setLoggedInUser", "0");
      this.isLoggedIn = false;
    },
    doLogin() {
      // login the User
      const userRef = firebase.firestore().collection("users");

      userRef.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((user) => {
          if (
            user.data().name == this.username &&
            user.data().password == this.password
          ) {
            this.$store.commit("setLoggedInUser", user.id);
            this.showModal = false;
            this.isLoggedIn = true;
          }
        });
      });

      this.$store.dispatch("fetchUserPlants");
    },
    setHeaderText(string) {
      console.log("SET HEADER TEXT CALLED: " + string);
      document.getElementById("header_title").textContent = string;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icons {
  font-size: 2.5rem;
  margin: 0rem 0.5rem;
  color: black;
}
.title {
  font-size: 2.5rem;
  font-weight: bold;
}

.btn-back {
  margin-bottom: -0.5rem;
}

.btn-back:hover {
  cursor: pointer;
}

.dropbtn {
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  left: -4.5rem;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>