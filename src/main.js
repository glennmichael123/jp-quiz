import Vue from 'vue'
// import firebase from 'firebase/app';
import './plugins/vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css' 
import '@fortawesome/fontawesome-free/css/all.min.css' 
import VueProgressBar from 'vue-progressbar'
import App from './App.vue'
import Home from './components/Home.vue'
import HiraganaRomajiQuiz from './components/quizcategories/HiraganaRomajiQuiz.vue'

const options = {
  color: '#26a69a',
  failedColor: '#e53935',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

// const configFirebase = {
//     apiKey: "AIzaSyB-OtYSyQgIcOtg9NiKZ_rDDEgiCVtPg48",
//     authDomain: "jp-quiz.firebaseapp.com",
//     databaseURL: "https://jp-quiz.firebaseio.com",
//     projectId: "jp-quiz",
//     storageBucket: "jp-quiz.appspot.com",
//     messagingSenderId: "909329774167"
// };

// firebase.initializeApp(configFirebase);

Vue.use(VueProgressBar, options)

const meta = {
  progress: {
    func: [
    { call: 'color', modifier: 'temp', argument: '#26a69a' },
    { call: 'fail', modifier: 'temp', argument: '#e53935' },
    { call: 'location', modifier: 'temp', argument: 'top' },
    { call: 'transition', modifier: 'temp', argument: { speed: '1.5s', opacity: '0.6s', termination: 400 }}
    ]
  }
}

Vue.use(VueRouter)

const routes = [ 
  { path: '/', component:  Home, name: '/', meta },
  { path: '/hiraganaromajiquiz', component: HiraganaRomajiQuiz, name: 'hiraganaromajiquiz', meta }
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
  render: h => h(App),
  router
}).$mount('#app')
