import './index.scss';
import Vue from 'vue';
import Button from 'buefy/src/components/button';
import Toast from 'buefy/src/components/toast';
import ConfigProgrammatic from 'buefy/src/utils/ConfigComponent';
import App from './App.vue';

Vue.use(Button);
Vue.use(Toast);

ConfigProgrammatic.setOptions({
  defaultToastDuration: 4000,
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
