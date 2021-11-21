import axios from 'axios'
export default {
  namespaced: true,
  state: {
    monografias: [],
  },
  getters: {
    getMonografias: state => state.monografias,
  },
  mutations: {
    setMonografias(state, val) {
      state.monografias = val
    },
    addMonografia(state, val) {
      state.monografias.push(val)
    },
    updateMonografia(state, val) {
      Object.assign(state.monografias[val.index], val.data)
    },
    deletMonografias(state, val) {
      state.monografias.splice(val, 1)
    },
  },
  actions: {
    async cadastrarMonografia({ commit }, payload) {
      axios.post('http://127.0.0.1:8000/monografia/',
      {
        titulodaobra: payload.title,
        autor: payload.author,
        linkimagem: payload.image,
        linkdocumento: payload.link
      },
        {auth:{
        username: 'ulisses',
        password: '123123'
      }}
      ).then(()=>{
        commit('addMonografia', payload)
      })


    },
    deleteMonografia({ dispatch}, payload) {
      axios.delete(payload,{auth:{
        username: 'ulisses',
        password: '123123'
      }}).then(()=>{
        
        dispatch('getMonografia')
      })
      //const index = state.monografias.findIndex(e => e.id == payload)
    },
    updateMonografia({dispatch}, payload) {
      axios.put(payload.url,
        {
          titulodaobra: payload.title,
          autor: payload.author,
          linkimagem: payload.image,
          linkdocumento: payload.link
        },
              {auth:{
          username: 'ulisses',
          password: '123123'
        }}
        ).then(()=>{
          dispatch('getMonografia')
        })

     /*  const index = state.monografias.findIndex(e => e.id == payload.id)
      const data = {
        data: payload,
        index,
      } */
    },
    getMonografia({commit}){
      const data = []
      axios.get('http://localhost:8000/monografia/')
      .then((res)=>{
        console.log(res.data)
        res.data.map(element=>{
         data.push({
          title: element.titulodaobra,
          author: element.autor,
          link: element.linkimagem,
          image: element.linkdocumento,
          evaluation: 5,
          url: element.url,
         })
        })
        commit('setMonografias', data)
      })

    }
  },
}