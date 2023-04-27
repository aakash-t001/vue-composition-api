<template>
  <suspense>
    <AsyncComp />
  </suspense>
</template>

<script>
import AsyncComp from "@/components/AsyncComp";
export default{
  components:{AsyncComp}
}
</script>

<style>

</style>