<template>
  <div>
    <search></search>
    <div class="container">
      <card-monografia class="card-monografia" v-for="item in getMonografias" :key="item.id" :dadoMonografia="item" />
    </div>
    </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
import CardMonografia from '../components/cardMonografia.vue'
import Search from '../components/search.vue'

export default {
  name: 'Home',
  components: {
    CardMonografia,
    Search
  },
  data(){
    return{
      teste: ''
    }
  },
    computed:{
      ...mapGetters('cadastro', ['getMonografias'])
    },
     methods:{
      ...mapActions('cadastro', ['getMonografia'])
    
    },
    beforeMount(){
      this.getMonografia()
    }
}
</script>

<style scopes>

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.card-monografia {
  margin: 8px;
  
}
</style>
