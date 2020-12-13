//  UniSwitch 是对应组件的名字，要记得在 uni-switch.vue 文件中还是 name 属性哦
import tonySwitch from './tony-switch.vue';
tonySwitch.install = Vue => Vue.component(tonySwitch.name, tonySwitch);
export default tonySwitch;