import firebase from "firebase";
export default {
  state: {
    user: {
      isAuthenticated: false,
      uid: null,
      name: null,
    },
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.isAuthenticated = true;
      state.user.uid = payload;
    },
    UNSET_USER(state) {
      state.user = {
        isAuthenticated: false,
        uid: null,
        name: null,
      };
    },
  },
  actions: {
    async SIGNUP({ commit, dispatch }, payload) {
      commit("CLEAR_ERROR");
      commit("SET_PROCESSING", true);
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(payload.email, payload.password);
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_PROCESSING", false);
      }

      const uid = await dispatch("GET_UID");

      try {
        await firebase.database().ref(`/users/${uid}/info`).set({
          name: "noname",
        });
      } catch (error) {
        console.log(error);
      }
      dispatch("GET_INFO");
      commit("SET_PROCESSING", false);
    },

    async SIGNIN({ commit, dispatch }, payload) {
      commit("SET_PROCESSING", true);
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password);
      } catch (error) {
        commit("SET_PROCESSING", false);
        commit("SET_ERROR", error.message);
      }
      dispatch("GET_INFO");
      commit("SET_PROCESSING", false);
    },
    async GET_UID() {
      const user = await firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async CHANGE_INFO({ dispatch }, payload) {
      const uid = await dispatch("GET_UID");
      await firebase.database().ref(`/users/${uid}/info/`).set({
        name: payload.nick,
      });
      if (payload.photo.length) {
        await firebase
          .storage()
          .ref("avatars/")
          .child(uid)
          .put(payload.photo[0]);
      }
      dispatch("GET_INFO");
    },
    async GET_INFO({ dispatch, state }) {
      const uid = await dispatch("GET_UID");
      await firebase
        .database()
        .ref(`/users/${uid}/info/`)
        .on("value", (snap) => (state.user.name = snap.val().name));

      try {
        await firebase
          .storage()
          .ref("avatars/")
          .child(uid)
          .getDownloadURL()
          .then((url) => {
            state.user.photo = url;
          });
      } catch (error) {
        state.user.photo = await firebase
          .storage()
          .ref("assets/")
          .child("nophoto.jpg")
          .getDownloadURL();
      }
    },
    STATE_CHANGED({ commit, dispatch }, payload) {
      if (payload) {
        commit("SET_USER", payload.uid);
        dispatch("GET_INFO");
      } else {
        commit("UNSET_USER");
      }
    },
    async SIGNOUT() {
      await firebase.auth().signOut();
    },
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated,
    uid: (state) => state.user.uid,
    name: (state) => state.user.name,
    photo: (state) => state.user.photo,
  },
};
