<template>
  <div id="app">
    <section>
      <h1>代码演示</h1>
      <div class="card">
        <h2>基础用法</h2>
        <table>
          <thead>
            <th>type</th>
            <th>size</th>
            <th>color</th>
            <th>plain</th>
            <th>round</th>
            <th>mark</th>
            <th>text-color</th>
            <th>效果</th>
          </thead>
          <tbody>
            <tr>
              <td>default</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>
                <aw-tag>热卖中</aw-tag>
              </td>
            </tr>
            <tr>
              <td>primary</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>
                <aw-tag type="primary">热卖中</aw-tag>
              </td>
            </tr>
            <tr>
              <td>success</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>
                <aw-tag type="success">热卖中</aw-tag>
              </td>
            </tr>
            <tr>
              <td>danger</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>
                <aw-tag type="danger">热卖中</aw-tag>
              </td>
            </tr>
            <tr>
              <td>warning</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>
                <aw-tag type="warning">热卖中</aw-tag>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card">
        <h2>自定义颜色</h2>
        <table>
          <thead>
            <th>type</th>
            <th>size</th>
            <th>color</th>
            <th>plain</th>
            <th>round</th>
            <th>mark</th>
            <th>text-color</th>
            <th>效果</th>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>#7232dd</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>
                <aw-tag color="#7232dd">热卖中</aw-tag>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>#ffe1e1</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>#ad0000</td>
              <td>
                <aw-tag
                  color="#ffe1e1"
                  text-color="#ad0000"
                >热卖中</aw-tag>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>#ffe1e1</td>
              <td>plain</td>
              <td>-</td>
              <td>-</td>
              <td></td>
              <td>
                <aw-tag
                  text-color="#ad0000"
                  plain
                >热卖中</aw-tag>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>#ffe1e1</td>
              <td>-</td>
              <td>round</td>
              <td>plain</td>
              <td>-</td>
              <td>
                <aw-tag
                  text-color="#ad0000"
                  round
                  plain
                >热卖中</aw-tag>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>#ffe1e1</td>
              <td>-</td>
              <td>round</td>
              <td>-</td>
              <td>#ad0000</td>
              <td>
                <aw-tag
                  color="#ffe1e1"
                  text-color="#ad0000"
                  round
                >热卖中</aw-tag>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>#ffe1e1</td>
              <td>-</td>
              <td>-</td>
              <td>mark</td>
              <td>#ad0000</td>
              <td>
                <aw-tag
                  color="#ffe1e1"
                  text-color="#ad0000"
                  mark
                >热卖中</aw-tag>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card">
        <h3 id="props">Props</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>版本</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>类型，可选值为<code>primary</code> <code>success</code> <code>danger</code> <code>warning</code></td>
              <td><em>string</em></td>
              <td><code>default</code></td>
              <td>此版本不实现</td>
            </tr>
            <tr>
              <td>size</td>
              <td>大小, 可选值为<code>large</code> <code>medium</code></td>
              <td><em>string</em></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>color</td>
              <td>标签颜色</td>
              <td><em>string</em></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>plain</td>
              <td>是否为空心样式</td>
              <td><em>boolean</em></td>
              <td><code>false</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>round</td>
              <td>是否为圆角样式</td>
              <td><em>boolean</em></td>
              <td><code>false</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>mark</td>
              <td>是否为标记样式</td>
              <td><em>boolean</em></td>
              <td><code>false</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>text-color</td>
              <td>文本颜色，优先级高于<code>color</code>属性</td>
              <td><em>string</em></td>
              <td><code>white</code></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import awTag from './packages/tag/index.vue';
export default {
  name: 'app',
  components: {
    awTag
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
