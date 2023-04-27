<template>
  <div>
<!--        <button @click="isLecture46Visible = true">#46 - Composition API Basics</button> |-->
    <button @click="isLecture47Visible = true">#47 - Async</button>
<!--    <button @click="()=>{isLecture48Visible = !isLecture48Visible, isLecture46Visible=false,isLecture47Visible=false,isLecture50Visible=false}">#48 - Routing (Composition API)</button> |-->
<!--    <button @click="()=>{isLecture50Visible = !isLecture50Visible, isLecture46Visible=false,isLecture47Visible=false,isLecture48Visible=false}">Composables - Mixins (Composition API)  </button> |-->
<!--    <button @click="clearAll">Clear All</button>-->
  </div>
<!--  <div v-show="isLecture46Visible">-->
<!--    <h2>#46 This is Composition Api Click TO Link to See Particular Page</h2>-->
<!--    <router-link :to="{ name: 'RefPage' }">RefPage</router-link> |-->
<!--    <router-link :to="{ name: 'ReactivePage' }">Reactive Page</router-link> |-->
<!--    <router-link :to="{ name: 'ComputedPage' }">Computed Page</router-link> |-->
<!--    <router-link :to="{ name: 'ModelBindingPage' }">Model Binding Page</router-link> |-->
<!--    <router-link :to="{ name: 'WatchersPage' }">Watchers Page</router-link> |-->
<!--    <router-link :to="{ name: 'WatchEffectsPage' }">Watch Effects Page</router-link> |-->
<!--    <router-link :to="{ name: 'PropParentPage' }">Props Parent Page</router-link> |-->
<!--    <router-link :to="{ name: 'EventParentPage' }">Event Parent Page</router-link> |-->
<!--    <router-link :to="{ name: 'InjectParentPage' }">Inject Parent Page</router-link> |-->
<!--    <router-link :to="{ name: 'FinalPage' }">Final Page</router-link> |-->
<!--  </div>-->
  <div v-show="isLecture47Visible">
    <h2>#47 - Async, Lazy Loading & Suspense (Composition API) </h2>
    <router-link :to="{ name: 'AsyncComp' }">Async Page</router-link> |
  </div>

<!--  <div v-if="isLecture48Visible">-->
<!--    <h2>#48 - Routing (Composition API)  </h2>-->
<!--  </div>-->

<!--  <div v-if="isLecture50Visible">-->
<!--    <h2>#50 - Composables - Mixins (Composition API) </h2>-->
<!--  </div>-->
  <router-view />
</template>

<script setup>
// ref and reactive diffrent is when the object change you can use ref if u cannnot change the object only value can change then you can reactive using reactive you can not change the object but you can change the object(value). and reactive does not support to the any string aur int aur float etc reactive support only array and objects. ref use everything
import {ref} from 'vue'
// let isLecture46Visible = ref(false)
let isLecture47Visible = ref(false)
// let isLecture48Visible = ref(false)
// let isLecture50Visible = ref(false)
// function clearAll() {
//   // isLecture46Visible.value = false
//   isLecture47Visible.value=false
//   // isLecture48Visible.value=false
//   // isLecture50Visible.value=false
// }




</script>

<style>

</style>
