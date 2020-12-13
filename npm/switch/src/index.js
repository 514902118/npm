import tonySwitch from './packages/switch/index';
// import UniSlider from './packages/slider/index';
// import UniNumberGrow from './packages/number-grow/index';
// import './common/scss/reset.css'
// ...如果还有的话继续添加

const components = [
  tonySwitch
  // ...如果还有的话继续添加
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  tonySwitch
  // ...如果还有的话继续添加
}