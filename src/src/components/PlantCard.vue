<template>
  <div>
    <div class="card plantCard" style="width: 18rem">
      <img
        src="https://www.baumpflegeportal.de/wp-content/uploads/2016/05/160509_Starke-Baumtypen_Eiche-im-Seidengewand_02.jpg"
      />
      <div class="overlay">
        <p>BAUM</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlantCard",
  props: {
    useSmall: Boolean,
    plantId: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.plantCard {
  position: relative;
  text-align: center;
  color: white;
  border-radius: calc(1rem - 1px);
  overflow: hidden;
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.plantCard img {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}

.plantCard p {
  position: absolute;
  bottom: 0px;
  left: 16px;
  font-size: 16px;
}

.overlay {
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
