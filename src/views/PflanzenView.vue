<!-- 
      simple view to display information about an plant with data from the database

      TODO:   - prevent images from looking like sh*t on wider screens :)
              - embed calendar for viewing dates 
-->

<template>
  <div>
    <Header
      id="label_header_name"
      ref="Header"
      :userId="parseInt($route.params.id)"
    />
    <div class="content">
      <div class="split_left left">
        <img :src="plant.imageUrl" />
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
import Header from "@/components/Header.vue";
import firebase from "../Firebase";

// import { ref } from "vue";

export default {
  name: "PflanzenView",
  components: {
    Header,
  },

  data() {
    return {
      plant: [],
      plantsRef: firebase.firestore().collection("plants"),
      loading: true,
    };
  },
  async created() {
    // loads the plant
    this.plantsRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id == this.$route.params.id) {
          this.plant.id = doc.id;
          this.plant.name = doc.data().name;
          this.plant.imageUrl = doc.data().image_url;
          this.plant.winterproof = doc.data().winter_proof;
          this.plant.harvest_relative_to_sowing = doc.data().harvest_relative_to_sowing;
          this.plant.harvest_time_begin = doc.data().harvest_time_begin;
          this.plant.harvest_time_end = doc.data().harvest_time_end;
          this.plant.sun_sensitive = doc.data().sun_sensitive;
        }
      });
      // check if plant with given id exists
      if (this.plant.name == undefined) {
        alert("Error: no plant found with id " + this.$route.params.id);
      } else {
        this.setLabels();
      }
    });
  },

  methods: {
    // funtion to set all the labels in the plant view with data frpm the database
    setLabels() {
      // header text
      this.$refs.Header.setHeaderText(this.plant.name);
      // plant name
      document.getElementById("label_name").textContent = this.plant.name;
      // winterproofness
      if (this.plant.winterproof) {
        document.getElementById("label_winter_proof").textContent = "Ja";
      } else {
        document.getElementById("label_winter_proof").textContent = "Nein";
      }
      // harvest time
      var harvesttime;
      if (this.plant.harvest_relative_to_sowing) {
        harvesttime =
          this.plant.harvest_time_begin +
          " - " +
          this.plant.harvest_time_end +
          " Wochen nach Aussaht";
      } else {
        harvesttime =
          this.plant.harvest_time_begin +
          ". KW - " +
          this.plant.harvest_time_end +
          ". KW";
      }
      document.getElementById("label_harvest_time").textContent = harvesttime;

      var sunsensitive;
      switch (this.plant.sun_sensitive) {
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
  },
};
</script>

<style>
/* Split the screen in half */
.split_left {
  height: 50%;
  width: 40%;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
}

.split_right {
  height: 50%;
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

.content {
  padding-top: 10px;
}
</style>
