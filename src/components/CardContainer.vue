<!-- 
      example usage: <CardContainer title="Mein Garten" isHorizontal cardSize="small"/>
      porps:
        - title        : String  -> displayed above container
        - isHorizontal : boolean -> indicates horizontal orientation
        - cardSize     : String  -> can be large or small
        - showUserPlant: boolean -> to load specific plants for user

-->

<template>
  <div class="mx-2 mt-4">
    <p class="text-left mb-0 ml-1 h4 font-weight-bold">
      {{ title }}
    </p>
    <div v-bind:class="isHorizontal ? 'scrollShadowLeft' : ''">
      <div v-bind:class="isHorizontal ? 'scrollShadowRight' : ''">
        <div v-bind:class="isHorizontal ? 'p-1 scrollmenu' : 'p-1'">
          <!-- show plant cards -->
          <a
            v-for="plant in plants"
            v-bind:key="plant.id"
            v-bind:class="isHorizontal ? 'm-2' : 'm-2 item'"
          >
            <PlantCard v-bind:useSmall="small" v-bind:plant="plant" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PlantCard from "./PlantCard";

export default {
  name: "CardContainer",
  components: {
    PlantCard,
  },
  props: {
    title: String,
    isHorizontal: Boolean,
    showUserPlant: Boolean,
    cardSize: {
      type: String,
      default: "small",
    },
    userId: String,
  },
  setup(props) {
    const small = ref(props.cardSize == "large" ? false : true);
    return { small };
  },
  computed: {
    plants() {
      if (
        this.$store.getters.getLoggedInUserID != 0 &&
        this.$props.showUserPlant
      ) {
        return this.$store.getters.userPlants;
      } else {
        return this.$store.getters.allPlants;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu a {
  display: inline-block;
  /* padding: 14px; */
  text-decoration: none;
}

div.scrollmenu::-webkit-scrollbar {
  width: 0.5em;
  height: 0.5em;
}

div.scrollmenu::-webkit-scrollbar-thumb {
  background-color: #e8e8e8;
  border-radius: 3px;
}

div.scrollmenu::-webkit-scrollbar-thumb:hover {
  background: #bababa;
}

.item {
  display: inline-block;
}

.scrollShadowLeft {
  position: relative;
}
.scrollShadowRight {
  position: relative;
}

.scrollShadowLeft:after {
  content: "";
  position: absolute;
  z-index: 1;
  right: 0;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  width: 2%;
  top: 0;
  bottom: 0;
}

.scrollShadowRight:after {
  content: "";
  position: absolute;
  z-index: 1;
  left: 0;
  background-image: linear-gradient(
    to left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  width: 2%;
  top: 0;
  bottom: 0;
}
</style>