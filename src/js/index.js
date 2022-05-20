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

import {createApp} from 'vue';

import test from './components/carousel.vue';

const app = createApp(test);
app.mount('#app');


const app2 = createApp(test);
app2.mount('#app-second');


const app3 = createApp(test);
app3.mount('#app-third');


const burger = document.querySelector(`.burger`);
const background = document.querySelector('.focusbackground');
const menu = document.querySelector('.lg-menu');
const loginForm = document.querySelector('.login-block');
const loginButton = document.querySelector('.js-login');



function disableBodyScroll() {
    const element = document.querySelector("body");
    element.classList.add("stop-scroll");
}

function enableBodyScroll() {
    const element = document.querySelector("body");
    element.classList.remove("stop-scroll");
}

function toggleMenu() {
    background.classList.add("active");
    menu.classList.add('active');
    disableBodyScroll();

}

function closeAll() {
    background.classList.remove(`active`);
    menu.classList.remove('active');
    loginForm.classList.remove(`active`);
    enableBodyScroll();
}
function openLoginForm(){
    background.classList.add("active");
    loginForm.classList.add(`active`);
    disableBodyScroll();
}



window.addEventListener('load', function () {

    burger.addEventListener("click", toggleMenu);
    background.addEventListener("click", closeAll);
    loginButton.addEventListener(`click`, openLoginForm);


});
