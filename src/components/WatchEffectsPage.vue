<template>
  <h2>This is Watch Effects Page</h2>
  <input type="text" placeholder="message" v-model="message">
</template>
<script>
import {ref,watchEffect} from "vue";
export default {
  setup(){
    let message=ref('This is title message')
    watchEffect(()=>{
      //Must Use Data in the body
      console.log(message.value)
    })
    return{message}
  }
}
</script>
<style>

</style>