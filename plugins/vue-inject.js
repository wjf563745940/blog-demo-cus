import Vue from 'vue'


export default ({app},inject) => {
    Vue.prototype.$myInjectedFunction = (string) => console.log("This is an example", string);
    inject('myInjectedFunction2', (string) => console.log('That was easy!', string))
  }