<template>
  <div>
    <h3>This is parent Inject Page</h3>
    <InjectChildPage />
  </div>
</template>
<script>
import InjectChildPage from '../components/InjectChildPage'
import {provide} from "vue";
export default {
  components:{InjectChildPage},
  setup(){
    provide('userName','Akash')
  }
}


</script>

<style>

</style>