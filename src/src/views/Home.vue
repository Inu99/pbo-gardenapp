<template>
  <div class="home">
    <Header pageName="Willkommen" :userId="7357" />
    <CardContainer title="Mein Garten" :plantIds="plantIds" isVertical />
    <TagContainer :clickable="true" v-model="tagNames" />
    <br />
    checkedNames: {{ tagNames }}
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
    PlantCard,
  },
  data() {
    return {
      tagNames: [
        { name: "a", isChecked: false },
        { name: "aa", isChecked: false },
      ],
      plantIds: [7357, 545, 46, 5, 7357, 545, 46, 5, 7357, 545, 46],
      checkedNames: [],
    CardContainer,
  },
  methods: {
    showTags(choosenTags) {
      console.log(choosenTags);
      this.checkedNames = choosenTags;
    },
  },
};
</script>
