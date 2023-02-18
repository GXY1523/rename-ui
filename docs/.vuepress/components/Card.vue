<template>
    <!-- :style=""  当用户传入有宽度时，使用用户提供的，反之使用之前编写好的 -->
  <div class="m-card" :style="width?{width:width+'px'}:{}">
    <div class="m-card-img" :style="imhHeight?{height:imhHeight+'px'}:{}">
        <img :src="imgSrc" alt="img">
    </div>

    <!-- 卡片概要有两种类型 -->
    <!-- 1.String 类型  则用已经写好的样式 配上 用户传进来的String -->
    <div v-if="summary" class="m-card-summary">
        {{summary}}
    </div>
    <!-- 2.非 String类型  需要用户自定义-->
    <div v-else class="m-card-summary">
        <slot></slot>
    </div>
    
    <!-- 图片的footer 这个不一定有 -->
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
    name:'Card',

    // 放入所需要的属性
    props:{
        //1. 卡片宽度
        width:{
            type:Number,
            default:0,
        },
        //2.卡片 图片资源地址
        imgSrc:{
            type:String,
            default:'',
        },
        // 3. 图片高度
        imhHeight:{
            type:Number,
            // 默认值
            default:0,
        },
        // 4. 卡片概要
        summary:{
            type:String,
            default:'',
        }
    }
}
</script>

<style lang="scss">
@import './Card.scss';
</style>