<template>
  <div>
    <h3>This is AsyncComp Page</h3>
<!--    <h2>({{ post.id }}) {{ post.title }}</h2>-->
<!--    <p>{{ post.body }}</p>-->
<!--     async await promise and closuers-->
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
    async setup() {
    const post = ref({
      id: -1,
      title: '',
      body: ''
    })

    const fetchedPromise = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const response = await fetchedPromise.json();

    console.log('>>', response);

    // post.value.id = response.id;

    return { post }
  }

}
</script>


<style>

</style>