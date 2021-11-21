<template>
  <div class="mx-auto menu-con" width="256" tile>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item v-for="(item, i) in items" :key="i" class="menu">
          <router-link :to="item.to" class="route">

            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content >
              <v-list-item-title class="lista" v-text="item.text"></v-list-item-title>
            </v-list-item-content>

          </router-link>
        </v-list-item>
        <v-list-item-icon class="sair">
          <span>
            <v-list-item-title v-text="'Sair'"></v-list-item-title>
          </span>
          <span style="margin-left:40px;"></span>
          <span>
            <v-icon v-text="'mdi-exit-to-app'"></v-icon>
          </span>
        </v-list-item-icon>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
export default {
  data: () => ({
  
    items: [
      { text: "Principal", icon: "mdi-account", to: "/" },
      { text: "Cadastro", icon: "mdi-plus-thick", to: "cadastro" },
      ],
  }),
  methods: {
  },
};
</script>
<style scoped>
.menu .route {
  text-decoration: none;
  display: flex;
  width: 100%;
  padding: 15px;
}
.lista{
  font-size: 17px !important;
  font-weight: 600;
}
.sair{
  position:fixed;
  bottom:0;
  right: 0 !important;
  margin-right:30px;
  border-bottom: solid 1px cadetblue;
  padding: 10px;
}
.avatar{
  text-decoration: none !important;
}
</style>