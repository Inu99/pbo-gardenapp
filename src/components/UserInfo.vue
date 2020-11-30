<!-- 
      example usage: <UserInfo userId="1337" />
      props:
        - userId  : Number  -> to load specific data for user

      TODO:   - load data
-->

<template>
  <!-- user info -->
  <div class="card">
    <img
      src="https://banner2.cleanpng.com/20180703/ya/kisspng-computer-icons-user-avatar-user-5b3bafe2381423.1933594815306383062297.jpg"
      class="card-img-top"
      alt="User Icon"
    />
    <div class="card-body">
      <h5 class="card-title">Meine Daten</h5>
      <ul class="list-group list-group-flush container">
        <div class="row">
          <div class="col">Name</div>
          <div class="col">{{ user.name }}</div>
        </div>
        <div class="dropdown-divider" />
        <div class="row">
          <div class="col">Alter</div>
          <div class="col">{{ user.age }}</div>
        </div>
        <div class="dropdown-divider" />
        <div class="row">
          <div class="col">Ort</div>
          <div class="col">{{ user.location }}</div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "../Firebase";

export default {
  name: "UserInfo",
  components: {},
  props: {
    userId: String,
  },
  data() {
    return {
      user: [],
      userRef: firebase.firestore().collection("users"),
    };
  },
  created() {
    //   Load all User infos

    let users = [];
    this.userRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          name: doc.data().name,
          location: doc.data().location,
          age: doc.data().age,
        });
      });
      // filter for user id
      const filtered = users.filter((user) => user.id == this.$props.userId);
      this.user = filtered[0];
    });
  },
};
</script>

<style scoped>
</style>