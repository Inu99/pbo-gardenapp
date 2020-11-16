<template>
  <div class="home">
    <Header pageName="Willkommen" :userId="7357" />
    <CardContainer title="Mein Garten" :plantIds="plantIds" isVertical />
    <TagContainer v-bind:tagNames="tagNames" :clickable="true" />
    checked:
    <p @get-choosen-tags="showTags"></p>
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
      tagNames: ["a", "aa", "aab", "aabb", "aabbc", "aabbcc", "abbbaaac"],
      plantIds: [7357, 545, 46, 5, 7357, 545, 46, 5, 7357, 545, 46],
    };
  },
  methods: {
    showTags(choosenTags) {
      console.log(choosenTags);
      this.text = choosenTags;
    },
  },
};
</script>
