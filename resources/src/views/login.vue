<template>
  <div>
    <div class="content">
      <h1>Sistema Monografia</h1>
    <v-card class="card">
     <div>
        <v-text-field
         outlined
            dense
            chips
            small-chips
            label="Usuário"
    ></v-text-field>
    <v-text-field
         outlined
            dense
            chips
            small-chips
            label="Senha"
    ></v-text-field>
     </div>
    </v-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.card{
  max-width: 500px !important;
  margin-left:50px;
  padding: 50px;
}
.content{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>