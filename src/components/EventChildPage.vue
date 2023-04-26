<template>
<h2>This is Child Page</h2>
  <button @click="sendEvent">Close Menu</button>
</template>
<script>
export default {
  setup(props,context){
    function sendEvent(){
      context.emit('closeMenu')
    }
    return {sendEvent}
  }
}

</script>

<style>

</style>