<template>
  <div class="home">
    <CardContainer
      title="Mein Garten"
      isHorizontal
      showUserPlant
      cardSize="large"
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
  mounted() {
    this.$store.dispatch("fetchAllPlants");
  },
};
</script>
