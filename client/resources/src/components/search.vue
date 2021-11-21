<template>
  <div class="search-header">
    <div class="search-bar">
      <v-text-field
      label="Buscar no repositório"
      outlined
      dense
      ></v-text-field>
    </div>
    <button>
      <div><v-icon class="search-icon">mdi-magnify</v-icon></div>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.search-header {
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.search-bar {
  width: 60%;
}

.search-icon{
  font-size: 38px;
  color: #1976d2;
}
</style>