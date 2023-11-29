<template>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
</template>

<script lang="ts">
import HelloWorld from "@/views/ag-grid-table.vue";
import {defineComponent} from "vue";
export default defineComponent({
  name: "app",
  components: {
    HelloWorld
  }
})

</script>

<style scoped lang="scss">

</style>
