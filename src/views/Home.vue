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
    <TagContainer :clickable="true" v-model="tagNames" />
    <br />
    checkedNames: {{ tagNames }} loggedInUser:
    {{ this.$store.getters.getLoggedInUser }}
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TagContainer from "@/components/TagContainer.vue";
import CardContainer from "@/components/CardContainer.vue";

export default {
  name: "Home",
  components: {
    Header,
    TagContainer,
    CardContainer,
  },
  data() {
    return {
      tagNames: [
        { name: "a", isChecked: false },
        { name: "aa", isChecked: false },
      ],
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
