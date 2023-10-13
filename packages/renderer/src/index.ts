import {createApp} from 'vue';
import App from '/@/App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primeflex/primeflex.css';
import {firebaseApp} from './firebase';

import {router} from './router';
import {VueFire} from 'vuefire';

const app = createApp(App).use(PrimeVue);
app.use(router);
app.use(VueFire, {
  firebaseApp,
});
app.mount('#app');
