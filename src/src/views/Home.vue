<template>
  <div class="home">
    <Header pageName="Welcome" userId="7357" />
    <TagContainer v-bind:tagNames="tagNames" />
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
      tagNames: ["abc", "abd"],
    };
  },
};
</script>
