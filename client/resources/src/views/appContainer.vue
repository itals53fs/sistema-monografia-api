<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      
    >
     <Menu class="menu"/>
    </v-navigation-drawer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Menu from '../components/menu.vue'
  export default {
  components: { Menu},
   
data: () => ({ drawer: null }),
  }
</script>