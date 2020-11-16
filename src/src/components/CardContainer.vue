<!-- 
      example usage: <CardContainer title="meine Planzen" plantIds="[1,2,5,64]" isVertical />

      TODO:   - check if user is logged in
              - log user in/out
-->

<template>
  <div>
    <p class="text-left mb-0">
      {{ title }}
    </p>
    <div class="card p-1">
      <div class="scrollmenu">
        <a v-for="plantId in plantIds" v-bind:key="plantId">
          <PlantCard v-bind:useSmall="true" v-bind:plantId="plantId" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
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
  },
  setup(props) {},

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}

/* div.scrollmenu a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div.scrollmenu a:hover {
  background-color: black;
} */

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
</style>