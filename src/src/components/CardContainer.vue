<!-- 
      example usage: <CardContainer title="meine Planzen" plantIds="[1,2,5,64]" isVertical cardSize="small"/>

      TODO:   - switch between vertical and horizontal scroll depending on isVertical

-->

<template>
  <div class="mx-2 mt-4">
    <p class="text-left mb-0 ml-1 h4 font-weight-bold">
      {{ title }}
    </p>
    <div class="card p-1">
      <div class="scrollmenu">
        <!-- show plant cards -->
        <a v-for="plantId in plantIds" v-bind:key="plantId" class="m-2">
          <PlantCard v-bind:useSmall="small" v-bind:plantId="plantId" />
        </a>
      </div>
      plants: {{ plants }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PlantCard from "./PlantCard";
import firebase from "../Firebase";
// import "firebase/firestore";

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
  data() {
    return {
      plants: [],
      ref: firebase.firestore().collection("plants"),
    };
  },
  created() {
    this.ref.onSnapshot((querySnapshot) => {
      this.plants = [];
      querySnapshot.forEach((doc) => {
        this.plants.push({
          key: doc.id,
          name: doc.data().name,
          image_url: doc.data().image_url,
        });
      });
    });
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
</style>