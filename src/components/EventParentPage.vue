<template>
  <h3>This is Event Parent Page  </h3>
  <button @click="isMenuOpen = true">Open Menu</button>
  <EventChildPage v-show="isMenuOpen" @closeMenu="isMenuOpen =false"/>
</template>
<script>
import {ref} from 'vue';
import EventChildPage from '../components/EventChildPage'
export default {
  components:{EventChildPage},
setup(){
  let isMenuOpen=ref(false)
  return {isMenuOpen}
}
}
</script>
<style>

</style>