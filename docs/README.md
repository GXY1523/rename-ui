# 快速开始

#### 安装组件库
```bash
npm i rename-ui
```

#### 引入组件库
> 在 main.js 中引用组件库
```javascript
//全部引入
import 'rename-ui/dist/css/index.css'
import MUI from 'rename-ui';
Vue.use(MUI);

// 按需引入
import 'rename-ui/dist/css/Demo.css';
import {Demo} from 'rename-ui';
Vue.use(Demo);
```