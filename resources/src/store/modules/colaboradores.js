import axios from 'axios'
export default {
    namespaced: true,
    state: {
        Colaboradores: [],
    },
    getters: {
        getColaboradores: state => state.Colaboradores,
    },
    mutations: {
        setColaboradores(state, val) {
            state.Colaboradores = val
        },
        addColaboradores(state, val) {
            state.Colaboradores.push(val)
        },
        updateColaboradores(state, val) {
            Object.assign(state.Colaboradores[val.index], val.data)
        },
        deletColaboradores(state, val) {
            state.Colaboradores.splice(val, 1)
        },
    },
    actions: {
        async cadastrarColaborador({ dispatch }, payload) {
            console.log(payload)
            axios.post('http://127.0.0.1:8000/users/',
                {
                    username: payload.username,
                    email: payload.email,
                    password: payload.password,
                },
                {
                    auth: {
                        username: 'tales',
                        password: '123'
                    }
                }
            ).then(() => {
                dispatch('getUsers')
            })
        },
        deleteColaborador({ dispatch }, payload) {
            axios.delete(payload,
                {
                    auth: {
                        username: 'tales',
                        password: '123'
                    }
                }).then(() => {
                    dispatch('getUsers')
                })
            //const index = state.Colaboradores.findIndex(e => e.id == payload)
        },
        async updateColaborador({ dispatch }, payload) {
            axios.put(payload.url,
                {
                    username: payload.username,
                    email: payload.email,
                    password: payload.password,

                },
                {
                    auth: {
                        username: 'tales',
                        password: '123'
                    }
                }
            ).then((e) => {
                console.log(e)
                dispatch('getUsers')
            })

            /*  const index = state.Colaboradores.findIndex(e => e.id == payload.id)
          const data = {
            data: payload,
            index,
          } */
        },
        getUsers({ commit }) {
            const data = []
            axios.get('http://localhost:8000/users/')
                .then((res) => {
                    res.data.map(element => {
                        data.push({
                            username: element.username,
                            email: element.email,
                            password: element.password,
                            url: element.url
                        })
                    })
                    commit('setColaboradores', data)
                })

        }
    },
}