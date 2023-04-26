<template>
  <h3>This is Props Child Page</h3>
  <p>Full Name {{fullName}}</p>
</template>
<script>
import {computed} from "vue";

export  default {
  props:['firstName','lastName'],
  setup(props){
    let fullName=computed(()=>{
      return props.firstName + ' ' + props.lastName
    })
    return {fullName}
  }
}
</script>

<style>

</style>