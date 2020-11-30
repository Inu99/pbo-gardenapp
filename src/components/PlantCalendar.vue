<template>
  <Calendar v-model="value" />
</template>

<script>
import Calendar from "primevue/calendar";

export default {
  name: "Header",
  components: {
    Calendar,
  },
  props: {
    plants: Array,
  },
  methods: {},
  data() {
    return {
      value: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
