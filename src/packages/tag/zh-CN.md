## Tag 标记

### 使用指南

``` javascript
import { aw-tag } from 'aw-ui';

Vue.use(aw-tag);
```
#### 基础用法
通过 type 属性控制 Tag 颜色

```html
<aw-tag>热卖中</aw-tag>
<aw-tag type="primary">热卖中</aw-tag>
<aw-tag type="success">热卖中</aw-tag>
<aw-tag type="danger">热卖中</aw-tag>
<aw-tag type="warning">热卖中</aw-tag>
```

#### 自定义颜色

```html
<aw-tag color="#7232dd">热卖中</aw-tag>
<aw-tag color="#ffe1e1" text-color="#ad0000">热卖中</aw-tag>
 <aw-tag text-color="#ad0000" plain>热卖中</aw-tag>
<aw-tag text-color="#ad0000" round plain>热卖中</aw-tag>
<aw-tag color="#ffe1e1" text-color="#ad0000" round>热卖中</aw-tag>
<aw-tag color="#ffe1e1" text-color="#ad0000" mark>热卖中</aw-tag>

```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为`primary` `success` `danger` | `String` | - | - |
| size | 大小, 可选值为`large` `medium` | `String` | - | 1.3.8 | 此版本不实现
| color | 标签颜色 | `String` | - | 1.3.8 |
| plain | 是否为空心样式 | `Boolean` | `false` | - |
| round | 是否为圆角样式 | `Boolean` | `false` | 1.3.8 |
| mark | 是否为标记样式 | `Boolean` | `false` | - |
| text-color | 文本颜色，优先级高于`color`属性 | `String` | `white` | 1.5.0 |

### Slot

| 名称 | 说明 |
|------|------|
| - | 自定义 Tag 显示内容 |