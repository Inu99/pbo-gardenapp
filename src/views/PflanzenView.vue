<template>
  <div class="PflanzenView">
    <Header
      :pageName="this.data.plant[$route.params.plantId].name"
      :userId="7357"
    />
    Pflanze mit id: {{ $route.params.plantId }}
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "PflanzenView",
  components: {
    Header,
  },
  data() {
    this.data = require("../data/plants.json");
  },
};
</script>
