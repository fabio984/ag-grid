<template>
  <ag-grid-vue
    style="height: 500px"
    :class="themeClass"
    :columnDefs="colDefs"
    :rowData="rowData"
    :defaultColDef="defaultColDef"
  >
  </ag-grid-vue>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import { AgGridVue } from 'ag-grid-vue3'; // Vue Grid Logic

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
    const defaultColDef = ref({
      filter: true,
    });

    const rowData = ref([]);

    const colDefs = ref([
      { field: 'mission' },
      { field: 'company' },
      { field: 'location' },
      { field: 'date' },
      { field: 'price' },
      { field: 'successful' },
      { field: 'rocket' },
    ]);

    onMounted(async () => {
      rowData.value = await fetchData();
    });

    const fetchData = async () => {
      const response = await fetch(
        'https://www.ag-grid.com/example-assets/space-mission-data.json',
      );
      return response.json();
    };

    return {
      defaultColDef,
      rowData,
      colDefs,
      themeClass: 'ag-theme-quartz',
    };
  },
});
</script>
