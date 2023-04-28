<template>
  <div>
    <h3>Js Promises to show Console</h3>
    <!--     async await promise and closuers-->
  </div>
</template>
<script setup>

// Imports--------------
//-----------------------

// Constants-------------

// proms(true)
//     .then((result)=>{
//       console.log(result)})
//     .catch((result)=>{
//       console.log(result)})

//-----------------------

// Variables-------------

//-----------------------

// Props ---------------
//----------------------

// Emits --

// Meta ----------------
//----------------------

// OnMounted -----------
//----------------------

// Functions -----------
const users =()=>{
  return new Promise(function (resolve,reject){
    console.log("Fetch Data pending")  //its a pending stage of promise
    setTimeout(()=>{
      let userList= [1,2,3,4,5]
      resolve(`User List is : ${userList}`)
      reject("Error ")
    },1000)
  })
}

const userData =() =>{
  return new Promise(function (resolve,reject){
    setTimeout(()=>{
      let users= {
        name:'Akash',
        designation:'software developer'
      }
      resolve(`My Name is ${users.name} and Designation is ${users.designation}`)
      reject("Error ")
    },1000,)
  })
}
async function getUserData(){
  const isUsersAvailable= await users()
  console.log(isUsersAvailable)
  const isUserDataAvailable =await userData(isUsersAvailable[1])
  // console.log(isUserDataAvailable)
  return isUserDataAvailable;
}
getUserData().then((name) =>{
  console.log(name)
})




//----------------------

//----------------------


// Computed ------------
//----------------------


// Watch ---------------
//----------------------


</script>


<style>

</style>