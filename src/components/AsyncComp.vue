<template>
<div>
<h3>Async Page</h3>
<p>{{title}}</p>
  <p>{{msg}}</p>
  <p>{{getUserData}}</p>
  <input type="text" placeholder="name" v-model="userData.name"><br>
  <input type="text" placeholder="designation" v-model="userData.designation"><br>
  <input type="text" placeholder="city" v-model="userData.address.city"><br>

  <button @click="title='This is new Title'">Click here to change title</button><br>
  <button @click="msg='This is new message'">Click here to change message</button>
<!--     async await promise and closuers-->
<!-- <h4>{{post.id}}</h4>-->

</div>
</template>
<script setup>
import {ref, computed, watch, reactive} from "vue";
const title=ref('this is title')
const msg=ref('this is msg')
const userData=reactive({
  name: '',
  designation: '',
  address: {
    city: '',
  }
});

const post =reactive({
  id:'',
  title:'',
  body:''
})


//pending 
// await fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then (response =>response.json())
// .then(data=>{
//   post.id=data.id
//   post.title=data.title
//   post.body=data.body
// })

const getUserData=computed(()=>{
    return 'Name is:'+userData.name+' Designation is:'+ userData.designation + ' City:'+ userData.address.city
});

watch(title, (currentValue, oldValue) => {
  console.log('before >>', currentValue);
  console.log('after >>', oldValue);
}, {immediate: true});

watch([()=>userData.address.city], (currentValue, oldValue) => {
  console.log('before >>', currentValue);
  console.log('after >>', oldValue);
}, {deep: true});

</script>


<style>

</style>



<!--//Single watch-->
<!--// watch(title,(newValue,oldValue)=>{-->
<!--//   console.log('newValue=',newValue,'==','oldValue=',oldValue)-->
<!--// })-->

<!--//Muliple watch-->
<!--// watch([title,msg],(newValue,oldValue)=>{-->
<!--//   console.log('newValue=',newValue,'==','oldValue=',oldValue)-->
<!--// })-->

<!--//object watch-->
<!--// watch(()=>{-->
<!--//   // return{...userData}    // All forms-->
<!--//  // return  userData.name   //particular form objects-->
<!--//    return .cloneDeep(userData.address)  //innerobject also watch pacakge install loadash-->
<!--// },(newValue,oldValue)=>{-->
<!--//   console.log('newValue=',newValue,'==','oldValue=',oldValue)-->
<!--// },{-->
<!--//   // immediate:true-->
<!--//   deep:true-->
<!--//   //pacakge install loadash for deep effect change-->