<!-- 
      simple view to display information about an plant with data from the database

      TODO:  - embed calendar for viewing dates 
             - functionallity of adding plants to your garden 
-->

<template>
  <div>
    <div class="content">
      <div class="split_left left">
        <img :src="plant.imageUrl" />
        <div
          id="button_add_plant_to_own"
          style="cursor: pointer"
          @mouseover="btnSubscribeHover = true"
          @mouseleave="btnSubscribeHover = false"
          :class="{ btnSubscribeActive: btnSubscribeHover }"
          @click="onSubscribeClick"
        >
          <span id="button_add_plant_to_own_span">
            <p id="button_add_plant_to_own_text" v-if="btnSubscribeHover">
              Pflanze Hinzufügen
            </p>
            <i
              id="button_add_plant_to_own_icon"
              class="material-icons"
              v-else
              >{{ btnSubscribeIcon }}</i
            >
          </span>
        </div>
      </div>

      <div class="split_right right">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <p style="text-align: left">
              Pflanzenname:
              <span style="float: right" id="label_name"></span>
            </p>
          </li>
          <li class="list-group-item">
            <p style="text-align: left">
              Winterhart:
              <span style="float: right" id="label_winter_proof"></span>
            </p>
          </li>
          <li class="list-group-item">
            <p style="text-align: left">
              Erntezeitraum:
              <span style="float: right" id="label_harvest_time"></span>
            </p>
          </li>
          <li class="list-group-item">
            <p style="text-align: left">
              Bevorzugte Lichtverhältnisse:
              <span style="float: right" id="label_sun_sensitive"></span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import { ref } from "vue";

export default {
  name: "PlantView",
  components: {},

  data() {
    return {
      btnSubscribeHover: false,
      tagNames: [
        { name: "Tag 1", isChecked: false },
        { name: "Tag 2", isChecked: false },
      ],
      btnSubscribeIcon: "add",
      plant: [],
      //plantsRef: firebase.firestore().collection("plants"),
      loading: true,
    };
  },
  async created() {
    // loads the plant
    let allPlants = this.$store.getters.allPlants;

    allPlants.forEach((pl) => {
      if (pl.id == this.$route.params.id) {
        this.plant.id = pl.id;
        this.plant.name = pl.name;
        this.plant.imageUrl = pl.imageUrl;
        this.plant.winterProof = pl.winterProof;
        this.plant.harvestRelativeToSowing = pl.harvestRelativeToSowing;
        this.plant.harvestTimeBegin = pl.harvestTimeBegin;
        this.plant.harvestTimeEnd = pl.harvestTimeEnd;
        this.plant.sunSensitive = pl.sunSensitive;
      }
    });
    // check if plant with given id exists
    if (this.plant.name == undefined) {
      alert("Error: no plant found with id " + this.$route.params.id);
    } else {
      console.log(this.plant);
    }
  },
  mounted() {
    if (this.checkIfSubscribed() == true) {
      this.$data.btnSubscribeIcon = "done";
    }

    this.setLabels();
  },
  methods: {
    // funtion to set all the labels in the plant view with data frpm the database
    setLabels() {
      // plant name
      document.getElementById("label_name").textContent = this.plant.name;
      // winterproofness
      if (this.plant.winterproof) {
        document.getElementById("label_winter_proof").textContent = "Ja";
      } else {
        document.getElementById("label_winter_proof").textContent = "Nein";
      }
      // harvest time
      let harvesttime;
      if (this.plant.harvestRelativeToSowing) {
        harvesttime =
          this.plant.harvestTimeBegin +
          " - " +
          this.plant.harvestTimeEnd +
          " Wochen nach Aussaat";
      } else {
        harvesttime =
          this.plant.harvestTimeBegin +
          ". KW - " +
          this.plant.harvestTimeEnd +
          ". KW";
      }
      document.getElementById("label_harvest_time").textContent = harvesttime;

      let sunsensitive;
      switch (this.plant.sunSensitive) {
        case 0:
          sunsensitive = "Sonnig";
          break;
        case 1:
          sunsensitive = "Halbschatten";
          break;
        case 2:
          sunsensitive = "Schattig";
          break;
      }
      document.getElementById("label_sun_sensitive").textContent = sunsensitive;
    },
    checkIfSubscribed() {
      let isFound = false;
      let userPlants = this.$store.getters.userPlants;
      userPlants.forEach((pl) => {
        if (pl.id == this.plant.id) {
          isFound = true;
          return;
        }
      });
      return isFound;
    },
    onSubscribeClick() {
      if (this.checkIfSubscribed() == false) {
        console.log(this.plant.id);
        this.$store.dispatch("subscribePlant", this.plant);
        this.$data.btnSubscribeIcon = "done";
      }
    },
    onSubscribeHover() {},
  },
};
</script>

<style>
/* Split the screen in half */
.split_left {
  height: auto;
  width: 40%;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
}

.split_right {
  height: auto;
  width: 60%;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
}

/* Control the left side */
.left {
  left: 0;
  padding-left: 10px;
}

/* Control the right side */
.right {
  right: 0;
  padding-right: 10px;
  text-align: left;
  margin-right: -10px;
}

/* Style the image inside the centered container, if needed */
.split_left img {
  border-radius: 10px;
  width: 100%;
  height: auto;
}

.split_left div {
  background: grey;
  opacity: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 5%;
  right: 5%;
  margin-left: auto;
  margin-right: 0;
  border-radius: 10px;
  transition: width 1s ease;
  text-align: center;
  line-height: 50px;
  animation-fill-mode: both;
  overflow: hidden;
}

.btnSubscribeActive {
  opacity: 100% !important;
  width: 150px !important;
}

.split_left div span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  position: relative;
  color: white;
}

.split_left div span p {
  display: inline;
  vertical-align: middle;
  line-height: normal;
  position: relative;
  color: white;
  white-space: nowrap;
  overflow: hidden;
}

.split_left div i {
  display: inline-block;
  vertical-align: right;
  line-height: normal;
  position: relative;
  color: white;
  animation-fill-mode: both;
}

.content {
  padding-top: 10px;
}
</style>
