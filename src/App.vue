<template>
  <div class="wrapper">
    <HelloWorld :msg="msg" />
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/views/ag-grid-table.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'app',
  components: {
    HelloWorld
  },
  setup() {
    const msg = 'Ag Grid Machine'
    return {
      msg
    }
  }
})
</script>

<style scoped lang="scss"></style>
