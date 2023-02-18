<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo></Demo>
    <Card></Card>
    <br>
    <Card
      imgSrc="./imgs/photo.png"
      summary="概要内容"
    ></Card>
<br>
    <Card
      imgSrc="./imgs/photo.png"
      summary="概要内容"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="footer1">
            footer1
          </div>
          <div class="footer2">
            footer2
          </div>
        </div>
      </template>
    </Card>
<br>
    <!-- 测试高度 -->
    <Card
      imgSrc="./imgs/photo.png"
      :width="370"
      :imgHeight="90"
    >
      <!-- 插槽类型 概要 -->
      概要内容：插槽类型 概要
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="footer1">
            footer1
          </div>
          <div class="footer1">
            footer1
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.footer1{
  color: #9199A1;
  margin-bottom: 8px;

}
.footer2{
  color: #8ae6f4;
}

.footer-spring{
  display: flex;
  justify-content: space-between;/*在弹性盒对象的 <div> 元素中的各项周围留有空白：均匀排列每个元素首个元素放置于起点，末尾元素放置于终点 */
  padding: 0 8px;
  font-size: 12px;
}
</style>
