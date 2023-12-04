<template>
  <div class="ag-grid-main-component">
    <!--    <h1 class="green">{{ msg }}</h1>-->
    <ag-grid-vue
      style="height: 500px"
      class="ag-theme-quartz"
      :rowData="rowData"
      :columnDefs="colDefs"
    >
    </ag-grid-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import { AgGridVue } from 'ag-grid-vue3'; // Vue Grid Logic
import { missionsData } from '@/mocks/mockDataMissionsLocal';

export default defineComponent({
  name: 'ag-grid-table',
  components: {
    AgGridVue,
  },
  props: {
    msg: {
      type: String,
      default: 'default value',
    },
  },
  setup() {
    // Column Definitions: Defines & controls grid columns.
    const colDefs = ref(missionsData.header);

    // Row Data: The data to be displayed.
    const rowData = ref(missionsData.row);

    return {
      rowData,
      colDefs,
    };
  },
});
</script>

<style scoped lang="scss">
.ag-grid-main-component {
  // border: 2px solid blue;
}
</style>
