<template>
  <div class="home">
    <Header
      pageName="Willkommen"
      :userId="this.$store.getters.getLoggedInUser"
    />
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
import Header from "@/components/Header.vue";
import CardContainer from "@/components/CardContainer.vue";

export default {
  name: "Home",
  components: {
    Header,
    CardContainer,
  },
  data() {
    return {
      loggedInUserId: "aUZv9PhWLXdFdoPpNHCc",
      checkedNames: [],
    };
  },
  methods: {
    showTags(choosenTags) {
      console.log(choosenTags);
      this.checkedNames = choosenTags;
    },
  },
  mounted() {
    this.$store.dispatch("fetchAllPlants");
  },
};
</script>
