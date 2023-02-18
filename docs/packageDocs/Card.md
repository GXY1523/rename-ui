# Card 
卡片组件

### 示例
<Card imgSrc="/rename-ui/photo.png" summary="概要"></Card>

### 代码
```html
<Card imgSrc="/photo.png" summary="概要"></Card>
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| - | - | - | - | - | 
| width | 卡片宽度 | Number | false | - | 
| imgSrc | 图片资源地址 | String | true | - | 
| imgHeight | 图片高度 | Number | false | - | 
| summary | 卡片概要 | String/Slot | false | - | 
| footer | 卡片底部 | Slot | false | - | 