import Card from './src/Card.vue'

// 为组件提供 install 安装方法，供按需引入
Card.install=function(Vue){
    Vue.component(Card.name,Card);
}

export default Card