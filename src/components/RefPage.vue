<template>
  <h3>This is Ref</h3>
  <p >This is Using String pass in Ref :<span class="refs">{{ refString }}  </span></p>
  <p >This is Using Object in Ref :<span class="refo">{{ refObj.firstName }} {{ refObj.lastName }}  </span></p>
</template>
<script>
import {ref} from 'vue'
import {setTimeout} from 'timers-browserify'
export default {
  // define ref
  setup() {
    let refString = ref('Hello This is Akash')  //This is directly access the mssg

      let refObj =ref({   //This is Object pass in ref
        firstName:"Aakash",
        lastName:"Tomer"
      })
    setTimeout(() => {
      refString.value = "Hello This is Time change Value"  //This is directly access the mssg

      refObj.value.firstName="ChangedFirstName"        //This is define object ref
      refObj.value.lastName="ChangedLastName"
    }, 3000)
    return {refString,refObj}
  }
}
</script>
<style>
.refs{
  color: red;
}
.refo{
  color: green;
}
</style>