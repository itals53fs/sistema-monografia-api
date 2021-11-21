<template>
  <v-card :loading="loading" class="mx-auto my-12 card" min-width="320">
    <template slot="progress">
      <v-progress-linear color="deep-purple"></v-progress-linear>
    </template>
    <v-card-actions class="header-action"
      ><button @click="dialogEdite = true">
        <div><v-icon>mdi-pencil</v-icon></div>
      </button></v-card-actions
    >

    <v-img height="144" :src="dadoMonografia.image"></v-img>

    <v-card-title>{{ dadoMonografia.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="dadoMonografia.evaluation"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        {{ dadoMonografia.evaluation }}
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="title-author">{{ dadoMonografia.author }}</v-card-title>
    <v-card-actions class="footer-actions">
      <v-btn class="button-view" text @click="reserve"> Visualizar </v-btn>
      <button class="button-delete" @click.prevent="openDialog">
        <div><v-icon class="delete-icon">mdi-delete</v-icon></div>
      </button>
    </v-card-actions>
    <v-dialog v-model="dialogmsg" width="500">
      <v-card class="modal">
        <v-card-title class="title">
          <span class="text-h5">Apagar Monografia</span>
        </v-card-title>
        <p class="text">Tem certeza que quer apagar a monografia?</p>
        <div class="button-actions">
          <v-btn class="button-view" text @click="apagar">SIM</v-btn>
          <v-btn class="button-no" @click="dialogmsg = false">NÃO</v-btn>
        </div>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogEdite" width="800">
      <v-card>
        <edit-monograph :data="dadoMonografia" class="comp"></edit-monograph>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
import editMonograph from "./editMonograph.vue";
export default {
  components: { editMonograph },
  props: {
    dadoMonografia: Object,
  },
  data: () => ({
    loading: false,
    selection: 1,
    dialogmsg: false,
    dialogEdite: false,
  }),

  methods: {
    ...mapActions("cadastro", ["deleteMonografia"]),
    apagar() {
      this.dialogmsg = false;
      const url = this.dadoMonografia.url;
      this.deleteMonografia(url);
    },
    openDialog() {
      this.dialogmsg = true;
    },

    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
      window.location.href = this.dadoMonografia.link;
    },
  },
};
</script>
<style scoped>
.modal {
  padding: 16px ;
}
.v-dialog{
  box-shadow: none !important;
}

.card {
  margin: 16px !important;
}

.header-action {
  display: flex;
  justify-content: flex-end;
}

.title-author {
  font-size: 12px !important;
}

.footer-actions {
  display: flex;
  justify-content: space-between;
}

.button-view {
  color: #1976d2 !important;
}

.button-delete {
  padding: 0 8px;
}

.delete-icon {
  color: #1976d2 !important;
}

.text {
  margin: 22px;
}

.button-actions {
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: end;
}

.button-no {
  background-color: #1976d2 !important;
  color: white !important;
  font-weight: bold !important;
  margin-left: 8px;
}
</style>