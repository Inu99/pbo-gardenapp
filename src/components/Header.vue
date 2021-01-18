<!-- 
      example usage: <Header pageName="Willkommen" />
      props:
        - pageName: String  -> displayed title, possible values: Willkommen, Nutzer, Planze, Suche, Anlegen

      TODO:   
        - display error on wrong username/password
-->

<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <!-- Login modal -->
    <vue-final-modal v-model="showLoginModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="showLoginModal = false"
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
    <!-- Create new User modal -->
    <vue-final-modal v-model="showCreateNewModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">neuen Nutzer erstellen</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="showCreateNewModal = false"
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
              type="number"
              class="form-control mb-3"
              placeholder="Alter"
              aria-label="Age"
              aria-describedby="basic-addon1"
              v-model="userAge"
            />
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Ort"
              aria-label="Location"
              aria-describedby="basic-addon1"
              v-model="userLocation"
            />
            <input
              type="password"
              class="form-control mb-3"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              v-model="password"
            />
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              v-model="passwordAgain"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="createNewUser"
            >
              erstellen
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
    <div id="header_title" class="navbar-brand title">
      {{ pageName }}
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto"></ul>
      <form class="form-inline my-2 my-lg-0">
        <!-- home btn -->
        <router-link v-if="bools.hasHomeBtn" to="/">
          <i class="material-icons icons">home</i>
        </router-link>
        <!-- search btn -->
        <router-link v-if="bools.hasSearchBtn" to="/search">
          <i class="material-icons icons">search</i>
        </router-link>
        <div class="dropdown">
          <!-- user icon -->
          <button class="dropbtn bg-light">
            <i class="material-icons icons">account_circle</i>
          </button>
          <!-- dropdown for user icon -->
          <div class="dropdown-content">
            <router-link
              :to="`/user/${LoggedInUserID}`"
              v-if="LoggedInUserID != 0"
            >
              Mein Profil
            </router-link>
            <a href="#" v-if="LoggedInUserID != 0" @click="doLogout">Logout</a>
            <a
              href="#"
              v-if="LoggedInUserID == 0"
              @click="showLoginModal = true"
              >Login</a
            >
            <a
              href="#"
              v-if="LoggedInUserID == 0"
              @click="showCreateNewModal = true"
              >neues Profil erstellen</a
            >
          </div>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
import { reactive, ref } from "vue";
// import firebase from "../Firebase";

export default {
  name: "Header",
  props: {
    pageName: String,
  },
  setup(props) {
    const bools = reactive({
      hasReturnBtn: true,
      hasSearchBtn: true,
      hasHomeBtn: true,
    });
    const showLoginModal = ref(false);
    const showCreateNewModal = ref(false);
    const username = ref("");
    const password = ref("");
    const passwordAgain = ref("");
    const userLocation = ref("");
    const userAge = ref(0);
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

    return {
      bools,
      showLoginModal,
      showCreateNewModal,
      username,
      userAge,
      userLocation,
      password,
      passwordAgain,
    };
  },
  computed: {
    LoggedInUserID() {
      return this.$store.getters.getLoggedInUserID;
    },
  },

  methods: {
    doLogout() {
      // logout the User
      this.$store.commit("logOutUser");
      this.isLoggedIn = false;
    },
    doLogin() {
      // login the User
      this.$store
        .dispatch("loginUser", {
          password: this.password,
          username: this.username,
        })
        .then(() => {
          this.showLoginModal = false;
        })
        .catch((e) => console.log("Login failed", e));
      this.password = "";
      this.username = "";
    },
    async createNewUser() {
      this.$store
        .dispatch("createNewUser", {
          username: this.username,
          password: this.password,
          passwordAgain: this.passwordAgain,
          location: this.userLocation,
          age: this.userAge,
        })
        .catch((e) => console.log(e));
      this.showCreateNewModal = false;
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