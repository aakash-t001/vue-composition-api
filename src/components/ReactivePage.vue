<template>
  <h3>This is Reactive Page</h3>
  <p>{{check.name}} {{check.age}}</p>
    <button @click="swapNames">Click To change Name</button>
</template>
<script>
import {reactive} from 'vue'
export default {
  setup(){
    let check =reactive({
      name:'Akash',
      age:25
    })
    let swapNames = () => {
      check.name = "Anuj"
      check.age = 30
    }
    return{check,swapNames}
  }

}
</script>
<style scoped>
p {
  color: blue;
}
</style>