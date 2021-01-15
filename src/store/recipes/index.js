import axios from '../../axios'
import Vue from 'vue';

const state = {};
const getters = {
    sortedByName: state => {
        return state.recipes.sort((a, b) => a.name < b.name);
    }
};

const mutations = {
    INIT(state, list) {
        state.recipes  = list
    },

    CREATE_ITEM(state, item) {
        state.recipes.push({
            id: item.id,
            name: item.name,
            description: item.description,
            parent_id: item.parent_id
        })
    },

    DELETE_ITEM(state, itemId) {
        const index = state.recipes.findIndex(reciep => reciep.id === itemId);

        if (index !== -1) {
            state.recipes.splice(index, 1);
        }
    },

    EDIT_ITEM(state, data) {
        const index = state.recipes.findIndex(reciep => reciep.id === data.id);
        if(index !== -1) {
            const updatedItem = {
                id: data.id,
                name: data.name,
                description: data.description
            };

            Vue.set(state.recipes, index, updatedItem);
        }
    }

};


//TODO Use default base Url in Axios
const actions = {
    getRecipes({commit}) {
       axios.get(process.env.VUE_APP_BACKEND + 'api/recipes').then(response => {
           commit('INIT', response.data.data);
       });
   },

    deleteItem({ commit }, itemId) {
        axios.delete(process.env.VUE_APP_BACKEND +'api/recipes/'+ itemId).then(() => {
            commit('DELETE_ITEM', itemId);
        });
    },

    editItem({ commit }, data) {
        axios.put(process.env.VUE_APP_BACKEND + 'api/recipes/'+ data.id, data).then(() => {
            console.log(data)
            commit('EDIT_ITEM', data);
        });
    },

    createItem({ commit }, data) {
        axios.post(process.env.VUE_APP_BACKEND + 'api/recipes', data).then(() => {
            commit('CREATE_ITEM', data);
        });
    }
}

export default {
    namespaced: true,
    mutations,
    state,
    getters,
    actions,
};