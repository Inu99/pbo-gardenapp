<!-- 
      example usage: <PlantCard v-bind:useSmall="true" v-bind:plantId="1337" />

      TODO: - get parameters (picture, name,... ) from json backend
            - implement ripeness indicator

-->

<template>
  <div>
    <router-link :to="{ name: 'PflanzenView', params: { plantId: plantId } }">
      <div :style="plantCard" style="width: 18rem">
        <img
          class="plantCardImg"
          src="https://www.baumpflegeportal.de/wp-content/uploads/2016/05/160509_Starke-Baumtypen_Eiche-im-Seidengewand_02.jpg"
        />
        <div class="plantCardImgOverlay">
          <p>BAUM</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PlantCard",
  props: {
    useSmall: Boolean,
    plantId: Number,
  },
  data() {
    var height;
    if (this.useSmall == true) {
      height = "150px";
    } else {
      height = "300px";
    }
    return {
      plantCard: {
        position: "relative",
        "text-align": "center",
        color: "white",
        "border-radius": "calc(1rem - 1px)",
        overflow: "hidden",
        height: height,
        width: "300px",
        "object-fit": "cover",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.plantCardImg {
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  margin: auto;
}

.plantCardImgOverlay p {
  position: absolute;
  bottom: 0px;
  left: 16px;
  font-size: 16px;
}

.plantCardImgOverlay {
  position: absolute;
  width: 100%;
  height: 45%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.55) 50%,
    rgba(0, 0, 0, 0) 80%
  );
  bottom: 0px;
}
</style>
