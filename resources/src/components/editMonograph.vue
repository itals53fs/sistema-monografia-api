<template>
  <v-container class="card">
    <v-card-title class="title">
      <span class="text-h5">Editar Monografia</span>
    </v-card-title>
    <v-form v-model="valid">
      <v-text-field
      required
      :rules="rules"
        type="text"
        label="Título da Obra"
       v-model="monography.title"
      ></v-text-field>
      <v-text-field
      required
      :rules="rules"
        type="text"
        label="Autor"
        v-model="monography.author"
      ></v-text-field>
      <v-text-field
      :rules="rules"
        type="text"
        label="Link imagem"
        v-model="monography.image"
      ></v-text-field>
      <v-text-field
      required
      :rules="rules"
        type="text"
        label="link monografia"
        v-model="monography.link"
      ></v-text-field>
      <v-textarea
      required
      :rules="rules"
          outlined
          auto-grow
          label="Descrição"
          row-height="20"
          v-model="monography.desc"
        ></v-textarea>
      <v-rating
        v-model="monography.evaluation"
        icon-label="custom icon label text {0} of {1}"
      ></v-rating>
    </v-form>
    <v-spacer></v-spacer>
    <v-btn class="button" @click="alterar" :disabled="!valid"> EDITAR </v-btn>
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
      valid: false,
      monography:{
        title: '',
        author: '',
        link: '',
        image: '',
        evaluation: 0,
        desc: ''
      },
       rules:[
        v=> !!v || 'Campo obrigatório'
      ]
    }
  },
  created(){
    this.monography = this.data
  },
  methods: {
    ...mapActions("cadastro", ["updateMonografia"]),
    alterar() {
        this.dialogEdite = false
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
  width: 96%;
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