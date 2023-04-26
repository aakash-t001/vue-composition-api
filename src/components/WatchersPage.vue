<template>
<h3>This is Watchers Page</h3>
  <!--  Ref Objects-->
<!--    <input type="text" placeholder="firstName" v-model="user.firstName">-->
<!--    <input type="text" placeholder="lastName" v-model="user.lastName">-->
<!--      <p>{{user.firstName}} {{user.lastName}}</p>-->


  <!--  watch Multiple data-->
<!--  <input type="text" placeholder="firstName" v-model="firstName">-->
<!--  <input type="text" placeholder="lastName" v-model="lastName">-->
<!--    <p>{{firstName}} {{lastName}}</p>-->

<!--  watch Single data-->
  <input type="text" placeholder="message" v-model="message">
    <p>{{message}}</p>
</template>
<script>
import {ref,watch} from 'vue'
export default {
  setup(){
//     //watch Single data
let message=ref('hdd')
    watch(message,(newvalue,oldvalue)=>{
  console.log('New Value:',newvalue)
  console.log('Old Value', oldvalue)
},
        {
          immediate:true
        })
return {message}

        //watch Multiple data
//       let firstName=ref('')
//       let lastName=ref('')
//     watch([firstName,lastName],
//         (newvalue,oldvalue)=>{
//           console.log('New Value:',newvalue[0])
//           console.log('Old Value', oldvalue[0])
//           console.log('New Value:',newvalue[1])
//           console.log('Old Value', oldvalue[1])
// },
//         {
//           // immediate:true
//         })
// return {firstName,lastName}


    //Ref Objects
    // let user=ref({
    //   firstName:'',
    //   lastName:''
    // })
    // watch([
    //     //getter Calbacks
    //       ()=>user.value.firstName,
    //       ()=>user.value.lastName
    //     ],
    //     (newvalue,oldvalue)=>{
    //       console.log('New Value:',newvalue[0])
    //       console.log('Old Value', oldvalue[0])
    //       console.log('New Value:',newvalue[1])
    //       console.log('Old Value', oldvalue[1])
    //     },
    //     {
    //       // immediate:true
    //     })
    // return {user}
}
}
</script>
<style>

</style>