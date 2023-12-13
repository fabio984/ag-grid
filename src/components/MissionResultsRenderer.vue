<template>
  <span style="display: flex; justify-content: center; height: 100%; align-items: center">
    <img
      :alt="params.value"
      :src="'https://www.ag-grid.com/example-assets/icons/' + cellValue + '.png'"
      style="width: auto; height: auto"
    />
  </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'mission-results-renderer',
  setup(props) {
    const cellValue = props.params.value ? 'tick-in-circle' : 'cross-in-circle';

    return {
      cellValue,
    };
  },
});
</script>
