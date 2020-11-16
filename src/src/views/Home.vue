<template>
  <div class="home">
    <Header pageName="Willkommen" userId="7357" />
    <PlantCard v-bind:useSmall="true" v-bind:plantId="1337" />
    <TagContainer :clickable="true" v-model="tagNames" />
    <br />
    checkedNames: {{ tagNames }}
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TagContainer from "@/components/TagContainer.vue";
import PlantCard from "@/components/PlantCard.vue";

export default {
  name: "Home",
  components: {
    Header,
    TagContainer,
    PlantCard,
  },
  data() {
    return {
      tagNames: [
        { name: "a", isChecked: false },
        { name: "aa", isChecked: false },
      ],
      checkedNames: [],
    };
  },
  methods: {
    showTags(choosenTags) {
      console.log(choosenTags);
      this.checkedNames = choosenTags;
    },
  },
};
</script>
