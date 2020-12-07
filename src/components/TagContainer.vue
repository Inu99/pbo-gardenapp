<!-- 
      example usage: <TagContainer :clickable="true" v-model="tagNames" />
      props:
        - clickable : Boolean -> if tags can be choosen
        - tagNames : Array -> names of tags that are going to be displayed
-->
<template>
  <div class="tagcloud01">
    <ul>
      <li v-for="(tagObject, index) in modelValue" v-bind:key="tagObject.name">
        <input type="checkbox" :id="tagObject.name" :value="tagObject.name"
        :checked="tagObject.isChecked" visibility: hidden
        @input="changeChecked(index)"/>
        <label :for="tagObject.name"> {{ tagObject.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    // tags array object
    // validation?
    modelValue: Array,
    clickable: Boolean,
  },
  methods: {
    changeChecked(index) {
      var tagsNew = this.modelValue;
      tagsNew[index].isChecked = !tagsNew[index].isChecked;
      this.$emit("update:tags", tagsNew);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
}
div {
  width: 100%;
  margin: 5em auto 2.5em;
}
div:first-child {
  margin-top: 3em;
}

.tagcloud01 ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.tagcloud01 ul li {
  display: inline-block;
  margin: 0 0.3em 0.3em 0;
  padding: 0;
}
.tagcloud01 ul li label {
  display: inline-block;
  max-width: 100px;
  height: 28px;
  line-height: 28px;
  padding: 0 1em;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #333;
  font-size: 13px;
  text-decoration: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
input[type="checkbox"]:checked + label {
  background-color: lightgreen;
}

input[type="checkbox"]:hover + label {
  cursor: pointer;
}
</style>
