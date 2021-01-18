<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xl">
          <!-- plant overview -->
          <CardContainer
            title="Mein Garten"
            :plantIds="plantIds"
            cardSize="large"
            :userId="$route.params.id"
          />
        </div>
        <div class="col-xl-3">
          <!-- user info -->
          <UserInfo :userId="$route.params.id" />
          <PlantCalendar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardContainer from "@/components/CardContainer.vue";
import UserInfo from "@/components/UserInfo.vue";
import PlantCalendar from "@/components/PlantCalendar.vue";
// import { ref } from "vue";

export default {
  name: "User",
  components: {
    CardContainer,
    UserInfo,
    PlantCalendar,
  },
  data() {
    return {};
  },
  created() {
    // load User info
  },
};
</script>

<style scoped>
/* .container {
  max-width: 100%;
} */
</style>