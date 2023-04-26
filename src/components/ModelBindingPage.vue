<template>
  <h3>This is Model Binding Page</h3>
      <input type="text" placeholder="First Name" v-model="user.firstName">
      <input type="text" placeholder="Last Name" v-model="user.lastName">
      <p>{{user.firstName}} {{user.lastName}}</p>
</template>

<script>
import {ref} from 'vue'
export  default {
  setup(){
    let user=ref({
      firstName:'',
      lastName:''
    })
    return {user}
  }
}
</script>
<style scoped>
p{
  color: darkgreen;
}
</style>