<template>
  <div class="home">
    <Header pageName="Willkommen" :userId="7357" />
    <CardContainer
      title="Mein Garten"
      :plantIds="plantIds"
      isVertical
      cardSize="large"
    />
    <CardContainer
      title="Vorschläge"
      :plantIds="plantIds"
      isVertical
      cardSize="small"
    />
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
    CardContainer,
  },
  data() {
    return {
      tagNames: [
        { name: "a", isChecked: false },
        { name: "aa", isChecked: false },
      ],
      plantIds: [0, 1, 4, 3, 0, 2, 1, 0, 0, 0],
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
