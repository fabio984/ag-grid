<template>
  <header>
    <div class="app-wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/first-table">Missions (local)</RouterLink>
        <RouterLink to="/second-table-fetch-data">Missions (server)</RouterLink>
        <RouterLink to="/second-table-fetch-data-filter-all"
          >Missions (server)+filter all</RouterLink
        >
        <RouterLink to="/fetch-and-pagination">Missions (server)+pagination</RouterLink>
      </nav>
      <!-- <AgGridTable :msg="msg" /> -->
    </div>
  </header>

  <RouterView />
</template>

<script lang="ts">
export default {
  name: 'app',
  components: {
    // AgGridTable,
  },
  setup() {
    const msg = 'Ag Grid Machine';
    return {
      msg,
    };
  },
};
</script>

<style scoped lang="scss">
.app-wrapper {
  // border: 1px solid red;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
