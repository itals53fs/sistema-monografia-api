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
    async cadastrarMonografia({dispatch}, payload) {
      axios.post('http://127.0.0.1:8000/monografia/',
      {
        author: payload.author,
        title: payload.title,
        image: payload.image,
        link: payload.link,
        des: payload.desc,
        evaluation: payload.evaluation,
      },
        {auth:{
        username: 'tales',
        password: '123'
      }}
      ).then(()=>{
        dispatch('getMonografia')
      })


    },
    deleteMonografia({ dispatch}, payload) {
       axios.delete(payload,
        {auth:{
        username: 'tales',
        password: '123'
      }}).then(()=>{
        dispatch('getMonografia')
      })
      //const index = state.monografias.findIndex(e => e.id == payload)
    },
    updateMonografia({dispatch}, payload) {
      axios.put(payload.url,
        {
          author: payload.author,
          title: payload.title,
          image: payload.image,
          link: payload.link,
          desc: payload.desc,
          evaluation: payload.evaluation,

        },
        {auth:{
          username: 'tales',
          password: '123'
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
        res.data.map(element=>{
         data.push({
          title: element.title,
          author: element.author,
          link: element.link,
          image: element.image,
          evaluation: parseInt(element.evaluation),
          url: element.url,
          desc: element.desc
         })
        })
        commit('setMonografias', data)
      })

    }
  },
}