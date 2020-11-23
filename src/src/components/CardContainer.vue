<!-- 
      example usage: <CardContainer title="meine Planzen" plantIds="[1,2,5,64]" isVertical cardSize="small"/>

      TODO:   - switch between vertical and horizontal scroll depending on isVertical

-->

<template>
  <div class="mx-2 mt-4">
    <p class="text-left mb-0 ml-1 h4 font-weight-bold">
      {{ title }}
    </p>
    <div class="scrollShadowLeft">
      <div class="scrollShadowRight">
        <div class="scrollmenu p-1">
          <!-- show plant cards -->
          <a v-for="plantId in plantIds" v-bind:key="plantId" class="m-2">
            <PlantCard v-bind:useSmall="small" v-bind:plantId="plantId" />
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
    isVertical: Boolean,
    plantIds: Array,
    cardSize: {
      type: String,
      default: "small",
    },
  },
  setup(props) {
    const small = ref(props.cardSize == "large" ? false : true);
    return { small };
  },

  methods: {},
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