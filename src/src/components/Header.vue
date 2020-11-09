<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="btn-back">
      <i
        class="material-icons icons"
        v-if="bools.hasReturnBtn"
        @click="this.$router.go(-1)"
      >
        arrow_back</i
      >
    </div>
    <div class="navbar-brand title">{{ pageName }}</div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto"></ul>
      <form class="form-inline my-2 my-lg-0">
        <router-link v-if="bools.hasHomeBtn" to="/">
          <i class="material-icons icons">home</i>
        </router-link>
        <router-link v-if="bools.hasSearchBtn" to="/">
          <i class="material-icons icons">search</i>
        </router-link>
        <div class="dropdown">
          <button class="dropbtn bg-light">
            <i class="material-icons icons">account_circle</i>
          </button>
          <div class="dropdown-content">
            <router-link
              to="{name:'Profile', params: {userId:userId}}"
              v-if="isLoggedIn"
            >
              Mein Profil
            </router-link>
            <a href="#" v-if="isLoggedIn" @click="doLogout">Logout</a>
            <a href="#" v-if="!isLoggedIn" @click="doLogin">Login</a>
          </div>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  name: "Header",
  props: {
    pageName: String,
    userId: Number,
  },
  setup(props) {
    const bools = reactive({
      hasReturnBtn: true,
      hasSearchBtn: true,
      hasHomeBtn: true,
    });
    const isLoggedIn = ref(false);
    // check if user is Logged in

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

    return { bools, isLoggedIn };
  },

  methods: {
    doLogout() {
      // logout the User
      console.log("Logout not implemented.");
    },
    doLogin() {
      // login the User
      console.log("Login not implemented.");
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