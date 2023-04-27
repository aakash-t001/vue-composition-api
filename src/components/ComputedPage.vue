<template>
  <h3>This is computed Page</h3>
    <input type="text" placeholder="First Name" @input="setFirstName">
    <input type="text" placeholder="Last Name" @input="setLastName">
  <p>{{fullName}}</p>
</template>
<script>
import {ref,computed} from 'vue'
export default {
  setup(){
      let user=ref({
        firstName:'',
        lastName:''
      })
    //Set first Name and Last Name
    let setFirstName =($event)=>{
        user.value.firstName= $event.target.value
    }
    let setLastName =($event)=>{
        user.value.lastName=$event.target.value
    }

    //Combine both and computed
    let fullName=computed(()=>{
      return `Hi ${user.value.firstName} ${user.value.lastName}`
    })
    return {fullName,setFirstName,setLastName }
  }
}
</script>
<style>

</style>