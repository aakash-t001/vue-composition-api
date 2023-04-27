<template>
<h3>This is Props Parent Page</h3>
  <input type="text" placeholder="firstName" v-model="user.firstName">
  <input type="text" placeholder="lastName" v-model="user.lastName">
  <PropChildPage :firstName="user.firstName" :lastName="user.lastName"/>
</template>
<script>
import {ref} from 'vue'
import PropChildPage from '../components/PropChildPage'
export  default {
  components:{PropChildPage},
  setup(){
    let user=ref({
      firstName:'',
      lastName:''
    })
    return{user}
  }
}
</script>

<style>

</style>