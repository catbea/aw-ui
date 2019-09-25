<template>
  <div id="app">
    <awTagDemo></awTagDemo>
  </div>
</template>

<script>
// 标签 
import awTagDemo from './packages/tag/demo/index.vue';
export default {
  name: 'app',
  components: {
    awTagDemo
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='less'>
@import url(./packages/style/resets.less);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
section {
  padding: 30px;
  text-align: left;
  // background: #fff;
  line-height: 1.5;
  white-space: nowrap;
  overflow-x: scroll;
}
.card {
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 8px 12px #ebedf0;
    overflow-x: scroll;
}
table {
  font-size: 15px;
  border-collapse: separate;
}
table td {
  padding: 8px;
  border-top: 1px solid #f1f4f8;
  border-right: 1px solid #f1f4f8;
}
table th {
  padding: 8px;
  font-weight: 500;
  text-align: left;
  border-right: 1px solid #f1f4f8;
}
table th:first-child,
table td:first-child,
table td:last-child {
  padding-left: 0;
}
h1{
  font-size: 30px;
  font-weight: normal;
  margin: 45px 0 20px;
}
h2{
  margin-bottom: 20px;
  font-size: 17px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
