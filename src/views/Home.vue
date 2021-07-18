<template>
  <Homepage />
  <Browsepage/>
</template>

<script>
// @ is an alias to /src
import Homepage from '../components/Homepage.vue'
import Browsepage from '../components/Browsepage.vue'

export default {
  name: 'Home',
  components:{
    Homepage,
    Browsepage
  }
}
</script>

<style scoped>

</style>
