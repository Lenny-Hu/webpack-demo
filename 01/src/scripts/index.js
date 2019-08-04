import Vue from 'vue';
import {
  mixinPlugin,
  httpPlugin,
  busPlugin,
  CONST
} from './common';
import _ from 'lodash';

Vue.use(busPlugin);
Vue.use(httpPlugin);
Vue.use(mixinPlugin);

console.log(Vue, CONST);

new Vue({
  el: '#app',
  data () {
    return {
      text: 'hello',
      CONST
    }
  },
  computed: {
    h1 () {
      return this.$mixin.user.title;
    }
  },
  methods: {
    test () {
      console.log(this.text);
    }
  }
});
