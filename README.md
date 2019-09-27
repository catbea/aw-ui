# aw-ui

> 基于vue的前端组件库

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 使用方法
```先导入该组件
  cnpm i aw-ui -S
  
  import {Tag} from 'aw-ui'
  注册组件 
  components:{
      awTag:Tag
  }
  然后在组件使用
   <aw-tag text-color="#ad0000" round plain>热卖中</aw-tag>
```

