<template>
  <div class="app-wrapper">
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

<style scoped lang="scss">
.app-wrapper {
  border: 1px solid red;
}
</style>
