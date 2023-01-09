## 1. Web API
Web Api是浏览器提供的一套操作**浏览器功能和页面元素**的API（DOM和BOM）

## 2. DOM简介
### 2.1 DOM树
文档： 一个页面就是一个文档，DOM中使用document表示

元素： 页面中的所有标签都是元素，DOM中使用element表示

节点： 网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用node表示

 ## 3. 获取元素
 ### 3.1 根据ID获取
```html
<body>
<div id="time">2023-1-1</div>
<script>
    var timer = document.getElementById('time');
    console.log(timer);
    console.log(typeof timer);
    // dir 打印我们返回的元素对象 更好的查看里面的属性和方法
    console.dir(timer);
</script>
</body>
```

 ### 3.2 根据标签名获取
 使用getElements***方法可以返回带有指定标签名的对象集合
 


 