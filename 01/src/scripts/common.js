import Vue from 'vue';
import $ from 'jquery';

// 常量
export const CONST = {
  title: 'Webpack 单独打包多个页面'
};

// 消息插件
export const busPlugin = {
  install (Vue, options) {
    Vue.prototype.$bus = new Vue();
  }
};

// http插件
export const httpPlugin = {
  install (Vue, options) {
    Vue.prototype.$http = $;
  }
};

// mixin插件
export const mixinPlugin = {
  install (Vue, options) {
    Vue.prototype.$mixin = new Vue({
      data () {
        return {
          user: {
            title: 'mixin name'
          }
        }
      },
      methods: {
        mixinFn () {
          console.log('mixinFn');
          this.user.name = `我是mixin插件中的方法${Date.now()}-${this.user.title}`;
        }
      }
    });
  }
};
