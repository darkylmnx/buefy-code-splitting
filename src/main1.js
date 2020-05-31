import './index.scss';
import Vue from 'vue';
import { Button, Toast, ConfigProgrammatic } from 'buefy';
import App from './App.vue';

Vue.use(Button);
Vue.use(Toast);

ConfigProgrammatic.setOptions({
  defaultToastDuration: 4000,
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
