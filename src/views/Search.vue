<template>
  <div class="home">
    <Header pageName="Suche" :userId="this.$store.getters.getLoggedInUser" />
    <!-- Search Area -->
    <div class="p-3">
      <input
        type="submit"
        class="form-control mb-3"
        placeholder="Search"
        aria-label="SearchField"
        aria-describedby="basic-addon1"
        v-model="searchQuery"
      />
      <TagContainer :clickable="true" v-model="tagNames" />
    </div>
    <CardContainer title="" cardSize="large" />
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TagContainer from "@/components/TagContainer.vue";
import CardContainer from "@/components/CardContainer.vue";

export default {
  name: "Search",
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
      searchQuery: "",
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
