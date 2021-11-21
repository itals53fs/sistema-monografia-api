<template>
  <v-card elevation="1" class="card">
    <v-container class="card">
      <v-card-title class="title">
        <span class="text-h5">Cadastro Monografia</span>
      </v-card-title>
      <v-form>
        <v-text-field
          type="text"
          label="Título da Obra"
          v-model="monography.title"
        ></v-text-field>
        <v-text-field
          type="text"
          label="Autor"
          v-model="monography.author"
        ></v-text-field>
        <v-text-field
          type="text"
          label="Link imagem"
          v-model="monography.image"
        ></v-text-field>
        <v-text-field
          type="text"
          label="link monografia"
          v-model="monography.link"
        ></v-text-field>
        <v-rating
          v-model="monography.evaluation"
          icon-label="custom icon label text {0} of {1}"
        ></v-rating>
      </v-form>
      <v-btn class="button" @click="register">Cadastrar</v-btn>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      monography: {
       title: '',
        author: '',
        link: '',
        image: '',
        evaluation: 0,
      },
    };
  
  },
  methods: {
    ...mapActions("cadastro", ["cadastrarMonografia"]),

    register() {
      const data = {
        author: this.monography.author,
        title: this.monography.title,
        evaluation: parseInt(this.monography.evaluation),
        image: this.monography.image,
        link: this.monography.link,
        id: new Date().getTime()
      };
      this.cadastrarMonografia(data);

      this.monography = {
        author: "",
        title: "",
        evaluation: 0,
        image: '',
        link: '',
      };
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 700px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
}

.title {
  padding: 16px 0px !important;
}

.button {
  background-color: #1976d2 !important;
  color: white !important;
  font-weight: bold !important;
}
</style>