<template>
  <div class="btn-group-toggle" data-toggle="buttons">
    <li v-for="tagName in tagNames" v-bind:key="tagName">
      <label class="btn btn-secondary active">
        <input type="checkbox" checked /> {{ tagName }}
      </label>
    </li>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    height: String,
    width: String,
    tagNames: Array,
    clickable: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
