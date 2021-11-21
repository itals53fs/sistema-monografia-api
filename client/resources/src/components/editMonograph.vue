<template>
  <v-container class="card">
    {{monography}}
    <v-card-title class="title">
      <span class="text-h5">Editar Monografia</span>
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
    <v-spacer></v-spacer>
    <v-btn class="button" @click="alterar"> EDITAR </v-btn>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    data: Object,
  },
  data(){
    return{
      monography:{
        title: '',
        author: '',
        link: '',
        image: '',
        evaluation: 0,
      }
    }
  },
  created(){
    this.monography = this.data
  },
  methods: {
    ...mapActions("cadastro", ["updateMonografia"]),
    alterar() {
        
      this.updateMonografia(this.monography);
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 97%;
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