<template>
  <div>
    <h2>This is Compostion Api Click TO Link to See Particular Page</h2>
    <router-link :to="{ name: 'RefPage' }">RefPage</router-link> |
    <router-link :to="{ name: 'ReactivePage' }">Reactive Page</router-link> |
    <router-link :to="{ name: 'ComputedPage' }">Computed Page</router-link> |
    <router-link :to="{ name: 'ModelBindingPage' }">Model Binding Page</router-link> |
    <router-link :to="{ name: 'WatchersPage' }">Watchers Page</router-link> |
    <router-link :to="{ name: 'WatchEffectsPage' }">Watch Effects Page</router-link> |
    <router-link :to="{ name: 'PropParentPage' }">Props Parent Page</router-link> |
    <router-link :to="{ name: 'EventParentPage' }">Event Parent Page</router-link> |
    <router-link :to="{ name: 'InjectParentPage' }">Inject Parent Page</router-link> |
    <router-link :to="{ name: 'FinalPage' }">Final Page</router-link> |
  </div>
  <router-view />
</template>

<script >
// ref and reactive diffrent is when the object change you can use ref if u cannnot change the object only value can change then you can reactive using reactive you can not change the object but you can change the object(value). and reactive does not support to the any string aur int aur float etc reactive support only array and objects. ref use everything

</script>

<style>

</style>
