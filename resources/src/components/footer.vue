
<template>
  <div class="overflow-hidden foot">
    <div class="text-center mb-8">
      <!-- <v-btn
        color="deep-purple"
        outlined
        @click="active = !active"
      >
        Toggle Navigation
      </v-btn> -->
    </div>

    <v-bottom-navigation
      v-model="value"
      :input-value="active"
      color="indigo"
    >
      <v-btn @click="redirect('Home')">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import router from '../router'
  export default {
    data () {
      return {
        value: 1,
        active: true,
      }
    },
    methods:{
      redirect(name){
        router.push({name:name})
      }
    }
  }
</script>

<style scoped>
.foot{
  position: relative!important;
  width: 100%;
  z-index: 1;
  bottom: 0;
}
</style>
