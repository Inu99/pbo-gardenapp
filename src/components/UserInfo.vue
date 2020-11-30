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
      <h5 class="card-title">UserId: {{ userId }}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name:{{ name }}</li>
        <li class="list-group-item">Alter:{{ age }}</li>
        <li class="list-group-item">Ort:{{ location }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive } from "vue";

export default {
  name: "UserInfo",
  components: {},
  props: {
    userId: Number,
  },
  setup() {
    //   Load User infos
    return reactive({
      name: "Anna",
      age: 43,
      location: "Dresden",
    });
  },
};
</script>

<style scoped>
</style>