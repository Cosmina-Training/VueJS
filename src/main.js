import Vue from 'vue'; 
import App from './app';



new Vue({
    // it is the same with $mount("#app")
    //el: '#app',
    render: h => h(App)
}).$mount("#app");