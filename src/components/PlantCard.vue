<!-- 
      example usage: <PlantCard v-bind:useSmall="true" v-bind:plantId="1337" />

      TODO: - implement ripeness indicator

-->

<template>
  <div class="plantCard">
    <!--    <router-link :to="{ name: 'PflanzenView', params: { plant: plant } }"> -->
    <router-link :to="'/pflanzenview/' + plant.id">
      <div :style="plantCard">
        <img :src="plant.imageUrl" class="plantCardImg" />
        <div class="plantCardImgOverlay">
          <p>{{ plant.name }}</p>
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
    plant: Object,
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
.plantCard {
  width: 300px;
}

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
  height: 80px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.55) 50%,
    rgba(0, 0, 0, 0) 80%
  );
  bottom: 0px;
}
</style>
