<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/first-table">Missions (local)</RouterLink>
      <RouterLink to="/second-table-fetch-data">Missions (server)</RouterLink>
      <RouterLink to="/second-table-fetch-data-filter-all">Missions (server)+filter all</RouterLink>
      <RouterLink to="/fetch-and-pagination">Missions (server)+pagination</RouterLink>
      <RouterLink to="/fetch-and-format-cells">Missions (server)+format cells</RouterLink>
      <RouterLink to="/fetch-with-cellRenderer-company-logo"
        >Missions (server)+cell renderer</RouterLink
      >
      <RouterLink to="/fetch-and-handle-grid-events"
        >Missions (server)+handle grid events</RouterLink
      >
      <RouterLink to="/fetch-and-handle-checkbox">Missions (server)+handle checkbox</RouterLink>
      <RouterLink to="/fetch-and-format-date">Missions (server) format date</RouterLink>
      <RouterLink to="/fetch-and-ticks-and-crosses-successfull"
        >Missions (server) successfully ticks</RouterLink
      >
    </nav>
  </header>
  <RouterView />
</template>

<script lang="ts">
export default {
  name: 'app',

  setup() {},
};
</script>

<style scoped lang="scss">
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
