import './index.scss';
import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';

Vue.use(Buefy, {
  defaultToastDuration: 4000,
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
