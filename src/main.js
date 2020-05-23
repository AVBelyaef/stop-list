import Vue from 'vue';
import Paginate from 'vuejs-paginate'
import App from './App.vue';
import router from './router';
import store from './store';
import Loader from './components/Loader';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate)
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyACcZzxa_dz7SbNQsnSQz4ohiD3_HKI_CI",
  authDomain: "stop-list-854c4.firebaseapp.com",
  databaseURL: "https://stop-list-854c4.firebaseio.com",
  projectId: "stop-list-854c4",
  storageBucket: "stop-list-854c4.appspot.com",
  messagingSenderId: "284651268469",
  appId: "1:284651268469:web:ff9930155e1d37613f8b3c"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
