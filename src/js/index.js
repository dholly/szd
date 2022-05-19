/*const asyncModule = import('./asyncModule');

console.log('ENV', process.env.NODE_ENV);

/asyncModule.then(({sum}) => {
    console.log('sum', sum);
});*/
/*import Vue from 'vue';
console.log('loaded');
//window.Vue = require('vue/dist/vue.cjs.js');
Vue.component('test',require('./components/carousel.vue').default);
const app = new Vue({
    el:'#app'
}); */

import { createApp } from 'vue';
import test from './components/carousel.vue';
const app = createApp(test);
console.log('1',app);

app.mount('#app');



const app2 = createApp(test);
app2.mount('#app-second');
console.log('test');


const app3 = createApp(test);
app3.mount('#app-third');
console.log('test');

