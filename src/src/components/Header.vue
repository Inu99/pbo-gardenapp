<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand title" href="#">{{ pageName }}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto"></ul>
      <form class="form-inline my-2 my-lg-0">
        <router-link to="/">
          <i class="material-icons icons">home</i></router-link
        >
        <router-link to="/search">
          <i class="material-icons icons">search</i></router-link
        >
        <router-link to="/profile">
          <i class="material-icons icons">account_circle</i></router-link
        >
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    pageName: String,
    userId: Number,
  },
  // methods:
};

// function getType() {
//   switch (this.pageName) {
//     case "Willkommen":
//       return 1;
//     case "Suche":
//       return 2;
//     case "Profil":
//       return 3;

//     default:
//       return "blah";
//   }
// }
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
</style>