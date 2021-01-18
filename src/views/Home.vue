<template>
  <div class="home">
    <CardContainer
      title="Mein Garten"
      isHorizontal
      cardSize="large"
      :userId="this.$store.getters.getLoggedInUser"
    />
    <CardContainer title="Vorschläge" isHorizontal cardSize="small" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardContainer from "@/components/CardContainer.vue";

export default {
  name: "Home",
  components: {
    CardContainer,
  },
  data() {
    return {
      loggedInUserId: "aUZv9PhWLXdFdoPpNHCc",
    };
  },
  mounted() {
    this.$store.dispatch("fetchAllPlants");
  },
};
</script>
