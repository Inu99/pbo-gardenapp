<!-- 
      example usage: <CardContainer title="meine Planzen" plantIds="[1,2,5,64]" isHorizontal cardSize="small"/>
      porps:
        - title       : String  -> displayed above container
        - isHorizontal: boolean -> indicates horizontal orientation
        - plantIds    : Array   -> list of displayed plants
        - cardSize    : String  -> can be large or small
        - userId      : Number  -> to load specific plants for user

      TODO:
        - load specific plants if user id is provided
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
import { reactive, ref } from "vue";
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
    isHorizontal: Boolean,
    cardSize: {
      type: String,
      default: "small",
    },
    userId: String,
  },
  setup(props) {
    const small = ref(props.cardSize == "large" ? false : true);
    if (props.userId) {
      // load plants for user
    }
    return { small };
  },
  methods: {},
  data() {
    return {
      plants: [],
      plantsRef: firebase.firestore().collection("plants"),
      userRef: firebase.firestore().collection("users"),
      loading: true,
    };
  },
  async created() {
    // loads all plants
    this.plantsRef.onSnapshot((querySnapshot) => {
      this.plants = [];
      querySnapshot.forEach((doc) => {
        this.plants.push({
          id: doc.id,
          name: doc.data().name,
          imageUrl: doc.data().image_url,
        });
      });
    });

    if (this.$props.userId) {
      // load plants for user
      let userPlantIds = [];

      this.userRef.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((user) => {
          if (user.id == this.$props.userId) userPlantIds = user.data().plants;
        });
        console.log(userPlantIds);
        let userPlants = [];
        userPlantIds.forEach((id) => {
          let buff = this.plants.filter((plant) => plant.id == id);
          userPlants.push(buff[0]);
        });
        this.plants = userPlants;
      });
    }
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