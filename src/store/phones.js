import firebase from 'firebase/app';

export default {
  state: {
    phones: [],
    search: '',
  },
  mutations: {
    setPhones(state, phones) {
      state.phones = phones;
    },
    setSearch(state, value) {
      state.search = value;
    }
  },
  actions: {
    async getPhones({ commit }) {
      try {
        const result = (await firebase.database().ref('/phones').once('value')).val();
        const res = Object.keys(result).map(key => ({
          ...result[key], id: key
        }));
        commit('setPhones',res);
        return res;
      } catch (e) {
        console.log(e.message);
      }
    },

    async createPhone({ commit }, phone) {
      try {
        await firebase
          .database()
          .ref('/phones')
          .push(phone);
      } catch (error) {
        console.log('createPhone', error);
      }
    },

    async updatePhone({ commit }, { phone, id }) {
      try {
        await firebase
          .database()
          .ref('/phones')
          .child(id)
          .update({ phone });
      } catch (error) {
        console.log('updatePhone', error.message);
      }
    },

    async removePhone({ commit }, id) {
      try {
        await firebase.database().ref('/phones').child(id).remove();
      } catch (e) {
        console.log('removePhone', e.message);
      }
    },

    async getPhoneById({ commit }, id) {
      try {
        const result = (await firebase
          .database()
          .ref('/phones')
          .child(id)
          .once('value')).val();
        return result;
      } catch (e) {
        console.log('getPhoneByPhone', e.message);
      }
    },

    changeSearch({ commit }, value){
      commit('setSearch', value);
    }
  },
};
