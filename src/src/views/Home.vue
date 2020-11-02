<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Header pageName="Welcome" userId="7357"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
