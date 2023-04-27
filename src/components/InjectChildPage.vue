<template>
  <div>
    <P>This Name is Print Inject ChildPage {{userNames}}</P>
  </div>
</template>

<script>
import {inject} from "vue";
export default {
  setup(){
    let userNames=inject('userName')
    return{userNames}
  }
}

</script>

<style>

</style>