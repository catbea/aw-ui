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
