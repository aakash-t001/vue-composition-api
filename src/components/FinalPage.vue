<template>
  <div>
    <h3>This is Final Page</h3>
    <p>{{mssg}}</p>
    <button @click="mssg1">Click</button>
  </div>
</template>
<script>
import {ref} from 'vue'
export default {
  setup(){
    let mssg= ref('Video completed')
    let mssg1= ()=>{
      mssg.value="Next Video is Started"
    }
    return{mssg,mssg1}
  }
}
</script>

<style>

</style>