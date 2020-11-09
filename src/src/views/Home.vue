<template>
  <div class="home">
    <Header pageName="Willkommen" userId="7357" />
    <TagContainer v-bind:tagNames="tagNames" :clickable="true" />
    checked:
    <p @get-choosen-tags="showTags"></p>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TagContainer from "@/components/TagContainer.vue";

export default {
  name: "Home",
  components: {
    Header,
    TagContainer,
  },
  data() {
    return {
      tagNames: ["a", "aa", "aab", "aabb", "aabbc", "aabbcc", "abbbaaac"],
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
