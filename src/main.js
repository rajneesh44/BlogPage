import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'
import 'firebase/firestore'
import router from './router'

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyCNtxJOhIsmOci036PWZctzWZujefk27TI",
    authDomain: "vue-blog-8b199.firebaseapp.com",
    databaseURL: "https://vue-blog-8b199.firebaseio.com",
    projectId: "vue-blog-8b199",
    storageBucket: "vue-blog-8b199.appspot.com",
    messagingSenderId: "686659512888",
    appId: "1:686659512888:web:da1bd16bf815238b67d4cd"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
