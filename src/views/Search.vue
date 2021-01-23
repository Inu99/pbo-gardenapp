<template>
  <div class="home">
    <!-- Search Area -->
    <div class="p-3">
      <input
        type="text"
        class="form-control mb-3"
        placeholder="Search"
        aria-label="SearchField"
        aria-describedby="basic-addon1"
        v-model="searchQuery"
        @change="triggerSearch"
      />
      <TagContainer :clickable="true" v-model="tagNames" />
    </div>
    <CardContainer title="" searchSite cardSize="large" />
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import TagContainer from "@/components/TagContainer.vue";
import CardContainer from "@/components/CardContainer.vue";

export default {
  name: "Search",
  components: {
    TagContainer,
    CardContainer,
  },
  data() {
    return {
      tagNames: [
        { name: "Tag 1", isChecked: false },
        { name: "Tag 2", isChecked: false },
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
    triggerSearch() {
      this.$store.dispatch("searchPlants", { searchTerm: this.searchQuery });
    },
  },

  mounted() {
    this.$store.dispatch("fetchAllPlants");
  },
};
</script>
