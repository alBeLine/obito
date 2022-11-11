## 从头系统学习CSS^2022.1.16^



### CSS的引入方式

#### 1. 内联样式

> 直接在标签内部添加style属性来修改样式

``` html
<p style="color: red; font-size: 16px;">文字</p>
```

#### 2. 内嵌样式

> 使用style标签, 在html文件内部写入css代码, 通常放在head里

``` html
<style>
    p {color: red; font-size: 16px;}
</style>
```

#### 3. 外部样式

> 使用link连接外部的css文件

``` html
<link rel="stylesheet" href="style.css">
```



---



### 工具介绍

#### Chrome调试工具

> 可以方便在页面进行代码的调试, 和改变样式效果, 这不比liveserver好?

**使用介绍**:

- 使用Ctrl + 滚轮可以放大缩小页面
- 开发者工具左边是HTML结构, 右边是CSS样式
- 右边的样式可以直接选中改动数值, 调试到适合的大小可以直接应用修改了
- Ctrl + 0 直接重置浏览器页面大小
- 如果使用选中工具(箭头)点击元素没有显示其样式, 可能就是你的代码写错了
- 如果有样式, 但是前面有黄色叹号, 然后又被删除了, 就是代码错了



#### VS快捷使用

##### 1. Emmet语法

**HTML结构生成介绍**:

1. 直接生成标签, 输入标签名按Tab键即可

2. 生成多级标签, 使用 > 号, 如ul>li, 符号左右不需要空格

3. 生成多个相同标签, 使用 * 号, 如div*3生成3个div

4. 生成同级标签, 使用 + 号, 如 div+p生成并列的标签div, p

5. 生成带有类名或id的, 使用.class_name, #id_value, 即可

   >  默认为div, 如果要其他的标签, 需 p.class_name...

6. 生成有顺序的内容, 加上 $ 自增符号, 效果如下

![image-20220117133523909](C:\Users\a\AppData\Roaming\Typora\typora-user-images\image-20220117133523909.png)

7. 生成有对应内容的标签, 使用{}符号, 如p{hello}  =>  \<p>hello\</p>

**CSS样式生成介绍**:

- 这更离谱啊, 直接使用首字母缩写即可...

![image-20220117134639992](C:\Users\a\AppData\Roaming\Typora\typora-user-images\image-20220117134639992.png)

##### 快速格式化文档

> 使用shift + Alt + F 直接将**杂乱**的代码格式化

<img src='C:\Users\a\AppData\Roaming\Typora\typora-user-images\image-20220117135252212.png' height=300 width=500></img>

#### snipaste的使用

> 是一个截图软件

1. F1截图, 可以同时测量大小, 书写等操作
2. F3可将截图在桌面置顶显示
3. 按住alt, 点击图片可以取色, shift切换色彩显示模式(十六进制, rgb)
4. 按esc取消图片显示, 截屏



#### PS的使用



##### 1. 常见图片格式

![image-20220128141736495](C:\Users\a\AppData\Roaming\Typora\typora-user-images\image-20220128141736495.png)

---



### 选择器

#### 基础选择器 :sweat_drops:

##### 1. ==标签选择器== :sailboat:

> ​	直接将某一类的标签名字作为选择器

**使用方法**: div {color: red;}	设置所有div的文字颜色为red

**优点**: 可以快速的设置全部为该标签的样式.

**缺点**: 无法单独设置某一个元素的样式



##### 2. ==类选择器==   :waning_crescent_moon:

>  通过给单个, 或**多个标签**设置class属性, 来使用.class_name进行样式的设置. 

 **类** 嘛!	当然一般用于你想要设置某一组类型的元素样式时使用的, 一般为多个元素设置class属性

**使用方法**: .red {color: red;}	设置class="red"的标签文字颜色为红色

**class命名要求**:

1. 要有意义, 不要使用中文, 纯数字
2. 长的名称可以使用中横线 - 来连接
3.  ==多类名==

> ​	当你使用了一个类名定义了一组元素的统一样式时, 你还可以给其中某个元素**额外**再添加一个类名,
>
> 达到为特定元素设置样式的目的

**定义格式**:	以空格隔开, 如 => class="class_name_1 class_name_2"

**优点**:

  		1. 节省了代码量
  		1. 有利于统一修改

**实例**:

``` css
<div class="box red">红色</div>
.box {	
    /* 统一设置宽高和字体大小 */
    width: 100px;
    height: 100px;
    font-size: 30px;
}
.red {
    /*特别样式*/
    background-color: red;
}
```



##### 3. ==id选择器== :sake:

> ​	通过给标签设置id属性, 就可以通过id选择器来设置其样式, 使用形式和类选择器差不多, 但id选择器只用单个特定的元素

**使用方法**: #red {color: red;}		设置id="red"元素的文字颜色为红色

**id选择器和class选择器的区别**:

1. 类选择器用于选择某一类的一组元素, 可以是单个或多个元素, 又或者是多个类
2. id选择器, 只能用于单独的特定的元素, 原则上不允许出现两个相同的id
3. 类选择器在修改样式中用的最多, id选择器一般用于页面上唯一性的元素, **经常和js搭配使用**



##### 4. ==通配符== :facepunch:

> 顾名思义, 用于选择**所有**的元素, 来设置对应样式

**使用形式**:

``` css
* {
    /* 开发中通常使用如下代码, 来为设计网页达到更好的效果 */
    padding: 0;
    margin: 0;
}
```



#### 复合选择器 :sweat_drops:

##### 1. ==后代选择器== :athletic_shoe:

> 通过一层层的选择来选择元素, 其中的每一层可以是任意基础选择器

**使用形式**:

1. ol li a {}
2. .nav li a{}
3. .nav #tar a{}

**注意**: 这里选择的a不仅仅包括第三层的a, 而是第三层后所有的a, **和子选择器 ==.nav > a==相区分**!

##### 2. ==子元素选择器== :money_mouth_face:

> 使用 > 号来选择直接的下一级子元素, 不包括子元素的子元素

**例如**: div > a 只会选择内容为"儿子"的标签a

``` html
<div>
        <a href="#">儿子</a>
        <p><a href="">孙子</a></p>
    </div>
```

##### 3. ==并集选择器== :school_satchel:

> 通过 , 号隔开, 用于同时选择多个标签, 并为它们定义相同的样式

**示例**:

p, div {}

**注意**: 个人认为, 给需要定义相同样式都加上同样的一个类名, 不就可以直接定义样式了吗!

##### 4. ==伪类选择器== :baby_chick:

- 链接伪类选择器

> 用于定义链接标签a的四种状态的样式, 如果都要写一定要按照**顺序**

		1. :link, 用于定义访问前的链接样式
		1. :visited 用于定义访问后的链接样式
		1. :hover 用于定义鼠标悬浮在链接上的样式
		1. :active 用于定义鼠标点击链接==时==的样式

**注意**: 通常只使用a, a:hover来设计样式

``` css
a {
    color: #333;	/*常用的黑色*/
    text-decoration: none;
}
a:hover {
    color: skyblue;
}
```

- :focus聚焦选择器

> 通常用于设计正在输入的输入框的样式

input:focus { border: 2px solid black; }



---



### 字体属性 :wolf:

#### 1. **font-family**: 

>  用于设置文本的字体系列

​	p {font-family: '微软雅黑'}

**注意**:

- 当浏览器不适用某个字体, 可以通过给该属性设置多个字体系列, 中间用半角逗号隔开
- 字体的设置尽量用英文名称
- 如果该字体由多个英文单词组成, 应用引号包裹起来
- 一般直接设置body的文字字体, 因为body包括了所有嘛

``` css
body {font-family: 'Microsoft YaHei', tahoma, arial, 'Hiragino Sans GB';}
```

#### 2. **font-size**: 

>  用于设置文本的文字大小

​	p {font-size: 16px;}

**注意**:

- 同样为保持整个页面的一致性, 我们可以直接设置body的font-size属性
- 因为每个浏览器的默认字体大小不同, 所以需明确指定一个, 不能默认
- 当设置了body的font-size后, **h标签**因为是标题类, 总是会比普通文本字体大小要大, 所以需要单独设置

#### 3. font-weight

> 用于设置文本的字体粗细

p {font-weight: 400;}

**注意**:

- 400表示正常, 700表示加粗, 数字后不需要加单位
- 在实际开发中更提倡使用**数字**来计量
- 如果是真的很重要, 应使用语义标签(h, strong)来包裹

#### 4. font-style

> 用于设置文本的字体形态, 有normal, italic

**注意**:

- 通常用来将em, i标签的倾斜字体变为正常

#### font 统一写法

``` css
body {
    font: font-style font-weight font-size/line-height font-family;
}
```

> 对于文字的多种属性, 可以按上述形式一行写完!

**注意**:

- 必须按照顺序, 不能更改
- 其中style, weight可省去, 但是font-size, family必须要写



---



### 文本属性

#### 1. color

> 用于设置文本的颜色, 只要被设置了color属性的标签包裹的文本都会生效

有三种表示:

- 直接写名称, green, blue...
- 十六进制, #f4f4f4
- rgb / rgba, 额外有个透明度

**注意**: 开发中常用十六进制, 可能是比较方便书写改动, 易控制.

#### 2. text-align

> 用于设置文本的**水平对齐**方式

​	所谓水平对齐, 就是相对于**元素内**文本<u>相对该元素(盒子)边界的边距</u>! 也可以理解为表格中的那种文字居中对齐.

**注意**: 

- ==如果你本来文本所在"表格"都是歪着放的, 相对表格对齐不还是歪的吗?==
- 要想设置文本的位置, 一定是设置包裹该文本的标签样式
  - p包括文本, 设置p的
  - p如果包括img, 设置img是不行的, 要设置p中text-align为center
  - ==一定要记住, text-align设置的是该元素(盒子)内的东西的左右边距, 而不是盒子本身!==

有三个属性值:

- left	right	center

####  3. text-decoration

> 用于文本的装饰**线**

有四个属性:

- none 一般文本的默认装饰, 即什么都不带
- underline 下划线, a 标签自带的装饰
- overline 上划线, 标记在文字顶部
- line-through 删除线, 标记在文字中部

**注意**: 通常使用该属性**消除** a 的下划线(设为none), 或设置文本的下划线

#### 4. text-indent

> 用于设置文本的首行的左边距, 记住只作用于首行啊!

p {text-indent: 2em;}

==em==: 是一个相对的大小, 相对于该元素的字体大小, 不单是1em=16px, 1em表示一个字体大小.

> 如果没有该元素没有设置大小, 则会继承父元素的文字大小

**有时候还用缩进使文字消失!!!**

#### 5. line-height

> 用于设置文本中**文字**的上下间距, 使文字看起来更清晰

![image-20220117120613842](C:\Users\a\AppData\Roaming\Typora\typora-user-images\image-20220117120613842.png)

p {line-height: 25px;}

**注意**:

- **测量**效果图的行高可以从上一行文字的最底端量到下一行文字的最底端, 因为上下边距放一起了, 浏览器则可以直接看属性
- 当文字标签放在了一个盒子里, <u>可以通过将line-height设置为盒子的高度</u>, 来使文字相对于盒子居中显示
  - line-height < 盒子高度, 偏上
  - line-height > 盒子高度, 偏下

- 行高也可以不带单位, 如1.5表示行高为**当前元素**字体大小的1.5倍



---



### 元素显示模式

#### 1. 块级元素

> 块级元素, 通俗来讲就是一个块, 会自己占一行 <= block

**常见块级元素**: h1-h6等标题, p, div, ul, ol, li等, 其中**div**是最典型的块级元素

**特点**:

- **霸道**, 不管什么情况都自己占一行, <u>即使width不够, 只有100px</u>.
- 可以自己控制高度, 宽度, 和内外边距
- 宽度默认为父元素的百分百, 即占满
- 是一个**容器**, 里面可以放行内或块级元素

**注意**:

- 文字类的块级元素内部不能放块级元素, 如p标签内不能放div
- 同理, h1-h6等也是

#### 2. 行内元素

> 行内元素, 一行就可以放好多个的元素 <= inline

**常见行内元素**: a, strong, b, i, u, span, 其中**span**是最典型的行内元素

**特点**:

- 相邻的行内元素在一行上, 一行可以显示多个元素
- 不能直接设置行内元素的宽和高, 是随其包含的内容而变得
- 行内元素默认的宽度为它本身内容的宽度
- 行内元素只能容纳**文本**或**其他行内元素**

**注意**:

- 链接里不能再放链接了
- 设置margin在水平方向有效，垂直方向无效。
- 设置padding在水平方向有效，垂直方向可以有视觉效果，但是不影响布局
- 特殊情况a里面可以放块级元素 <= **设置成block?**

#### 3. 行内块元素

> 行内块元素, 比较特殊, 分别具有行内元素和块级元素的特点 <= inline-block

**行内块标签**: img, input, td

**特点**:

- 和相邻的行内元素在一行, 但是元素之间存在缝隙
- 一行可以显示多个, 如img
- 默认宽度为它本身内容的宽度
- 可以直接设置宽高, 和内外边距
- **没有内容不会显示的嘞**

#### 4. 显示模式的转换

> 在css中, 只用display属性来达到块级, 行内元素显示模式的转换

**三种模式**:

- display: block;

- display: inline;

- display: inline-block;



---



### 背景属性

#### 1. background-color

> 用于设置元素的背景颜色, 默认为transparent透明的

 **使用形式**: p {background-color: red;}

==重点使用==:

​	背景色半透明效果: background-color: rgba(0,0,0,0.3); 指透明度为0.3的黑色

**注意**:

- 最后一个参数是透明度, 范围是0-1
- 习惯上把0.3的0省略, 写成  **.3**
- 透明度不会影响文字颜色

#### 2. background-image

> 这个可就厉害了, 可以为元素添加背景图片

**使用形式**: div {background-image: url( ' xx ' );}

**注意**:

- 不要漏掉 **url** 图 片链接地址
- background-image 会覆盖背景颜色
- 常见于**logo**的展示, 和一些装饰的小图片或超大的**背景图片**
- image 相较于 img 标签易于控制位置

#### 3. background-repeat

> 当图片本身尺寸小于所在元素尺寸时, 默认会水平并垂直的**平铺**图片

通常设置为: div {background-repeat: no-repeat}

**四个属性**: repeat(默认), no-repeat, repeat-x, repeat-y;

x:	**水平**方向平铺

y:	**垂直**方向平铺

#### 4. background-position

> 控制背景图片在元素中显示的位置

**形式**: background-position: x y;

x, y参数可以是具体的px, em等**数值**, 也可以是center, left, top, bottom等**方位名词**

**方位名词**:当指定了两个方位名词时, 前后顺序没有关系, 因为top left本就是表示上下的, 和左右的, **即, left center == center left**

- 如果只指定了一个方位名词, 另一个默认就是center, 如 top = top center

**具体数值**:

- 如果指定的两个都是具体的数值, 则必须按照x, y轴的顺序
- 如果只写了一个, 则默认为x轴坐标, 第二个为垂直居中
- x, y轴的都是分别根据距离左边, 上边来定的

**注意**: position是允许具体数值和方位名词**混用**的, 也是按照x, y轴方向安排.

#### 5. background-attachment

> 设置背景图像是否随着内容而滚动, 一般用来制作一些视差滚动效果

**两个属性**: 

- scroll: 默认属性, 背景图像会跟着内容来滚动
- fixed: 背景图像不会随着内容滚动, 是固定的

#### 6. 背景复合写法

**习惯上**: :hammer_and_wrench:

background: 背景颜色 图像 平铺 滚动 位置 / 百分比



---



### CSS的三大特性

#### 1. 层叠性

> 一层一层的覆盖, 下面的覆盖上面的

**注意**:	如果两个选择器一样, 但是样式不冲突, 就不会覆盖

#### 2. 继承性

> 子元素会默认的继承一些父元素的样式

**包括范围**:

- text- 开头的样式, **那为什么给a的父元素设置text-decoration没用?**

> 因为 a 标签默认有样式, 会覆盖继承的!

- font- 开头的样式
- line- 开头的样式
- color属性

**优点**: 既然继承了一些样式, 就可以省一点设置, 简洁了CSS代码

#### 3. 优先级

> 当存在继承, 或者内联, 内嵌等样式设置, 那个样式会生效就是优先级决定的

**优先级, 权重由高至低**:

- !important 直接加在样式后面使用	**无穷**
- 行内样式, 内联样式    1 0 0 0
- ID选择器    0 1 0 0
- 类选择器, **伪类**选择器    0 0 1 0
- 元素选择器 0 0 0 1
- 继承 / * 0 0 0 0

**注意**:

1. 优先级判断, 是根据权重数字从左到右判断, 如果左边相同, 就看右边的
2. 元素**继承父元素的权重是0,** 如果元素本身设置了样式, 不管父元素的优先级是多高, 继承的样式不起作用.

#### 4. ==权重叠加==

> 当使用复合选择器时, 会出现权重叠加的问题

**例如**:

- 权重大小: ul li > li 因为前者权重-> 0 0 0 2, 后者-> 0 0 0 1
- 又如, .nav li > li 前者权重 0 0 1 1, a:hover 权重也是"a"+":hover" => 0 0 1 1

**注意**:

- 权重叠加不会出现进位, 即使十个 0 0 0 1 相加, 还是 0 0 0 **10**
- id, important 以此类推

**练习题**: 为什么设置了.pink 颜色被覆盖了

![image-20220120164431218](C:\Users\a\AppData\Roaming\Typora\typora-user-images\image-20220120164431218.png)

> 原因: .nav li 的权重比 .pink 高, 或许这就是为什么建议选择器一层一层指定下去了



---



### 盒子属性

#### 1. border

> 盒子的边框, 大概具有三类的属性, width, style, color

**常用的用法**:

- width: 一般使用px指定
- style: 有solid dashed dotted
- color: 即边框线的颜色

**注意**:

- 通常按照 width style color 的顺序将border简写为一行
- 可以分别按照 border-top, bottom, left, right 来设置边框的样式
- **边框的厚度会影响盒子的实际大小** <= ==解决办法==: 设置box-sizing: border-box

##### border的其他属性:

​	border-collapse

> 通常将样式设置为: collapse, 用于合并重叠的边框线

**Tip**: 对于==表格==的样式设置, 经常共同设置table, td, th的样式

#### 2. padding

> 盒子的内边距, 即边框和内容之间的距离

和border一样, 可以通过padding-left / -right / -top 来分别设置padding

**复合写法**:

- 一个值, padding: 5px; 表示上下左右边距全部设置为5px
- 两个值, padding: 5px 10px; 表示上下为5px, 左右为10px;
- 三个值, padding: 5px 10px 20px; 表示上为5px, 左右为10px, 下为20px
- 四个值, padding: 5px 10px 15px 20px; 表示按照 上 右 下 左 顺时针的方向来设置

**注意**:

- padding会影响盒子的实际大小
- 但是如果没有给盒子指定width / heigth的值, padding就不会影响盒子实际大小

> ​	我觉得是原因是, 浏览器默认指定盒子的宽和高是内容的, 然后加了padding, 为了保证内容的大小, 当然会撑开

#### 3. margin

> 盒子的外边距, 即盒子边框和外部元素的距离

**注意**: 

- 复合写法和padding一致
- 不会影响盒子的实际大小

**典型应用**:

- 设置盒子水平居中(只适用于**块级元素**)
  1. 指定盒子的宽度
  2. 将盒子的左右边距设置为auto, 通常写为margin: 0 auto;

> ​	对于行内元素和行内块元素应用margin: auto没有效果, 即使行内块元素可以设置外边距, 
>
> ​	实现水平居中的方法是, 将行内元素和行内块元素看做文本, 然后设置其父元素text-align: center;

- 外边距塌陷问题

> ​	对于两个嵌套关系(父子关系)的块级元素, 父元素有上边距的同时, 子元素也有上边距, 此时父元素会塌陷较大的外边距, 而子元素的外边距失效, **我认为是定位问题**

**示例及解决方法**:

![image-20220121131759214](C:\Users\a\AppData\Roaming\Typora\typora-user-images\image-20220121131759214.png)

1. 1px solid transparent 定义透明边框, 定位子元素
2. padding: 5px 定义内边距
3. overflow: hidden 都是定位吧...

#### 4. CSS3新增属性

1. **border-radius**

> 用于设置切割盒子边框的圆的半径， 以⚪来与各个边角相切

**使用方法**：

- 参数值可以是数值， 或百分比的形式 <= 是谁的百分比？
- 正方形可以通过将数值修改为宽/高的一半，或者为50%，将盒子设置为圆形
- 矩形可以通过将数值修改为高度的一半，将盒子设置为好看的弧度矩形
- 该属性是一个简写属性， 可以分开定义4个角的4个圆的半径, **可以直接按顺时针方向分别设置**

> 形式：border-上下-左右-radius
>
> border-top-left-radius, border-top-right-radius, border-bottom-left-radius...



2. **box-shadow**

> 用于设置盒子的阴影部分， 有5个值

1. h-shadow: 水平距离
2. v-shadow: 垂直距离
3. blur: 阴影的模糊长度， 如果为0， 则阴影没有模糊效果
4. spreach: 阴影的大小尺寸
5. color: 阴影的颜色
6. inset: 用于设置外部阴影设置为内部阴影

**注意**：

- 水平，垂直距离必写，其他可选，<u>是都要写，还是都不写 我也布吉岛</u>

- 默认为外部阴影，当在属性中加入inset声明即为内部阴影，不可以写outset
- 盒子阴影不占用空间

- 阴影颜色通常使用rgba(0, 0, 0, .3)透明度黑色来设置



3. **text-shadow**

> 用于设置文字的阴影， 只有4个值

1. h-shadow
2. v-shadow
3. blur
4. color

> 似乎是直接设置blur的长度来达到阴影的效果

---



### 传统网页布局三方式

#### 1. 标准流

> 标准流也叫做普通流, 文档流, 即按照浏览器默认的排列方式进行排列

如: 行内元素, 块级元素, 行内块元素分别按照各自的规则进行排列, 就叫做标准流布局

#### 2. 浮动

> 通过浮动属性 **float** 来排列布局网页, 可以做到标准流无法做到效果

==准则==: <u>纵向排列普通流, 横向排列看浮动</u>

**专业解释**:

​	float属性用于创建浮动框, 将其移动到一边, 直到左边缘或右边缘, 碰到(**包含块**)或(**另一个浮动框**)的边缘

##### **浮动的特性**:

- 会脱离标准(文档)流, 直接浮动到指定的位置(left, right)
- 浮动的盒子不会保留其原来的位置, 后面的盒子会"补上"它的位置, 就像排队一样, 你走了位置就没了
- 不管什么元素, 只要设置了浮动属性, 将具有行内块元素特性
- 如果多个盒子设置了浮动, 就会按照标签的定义顺序来安排, 并且以顶端对齐排列

**注意**:

- 浮动的元素是紧贴在一起的, 而普通流的行内块元素会默认有一定缝隙
- 如果父级元素的宽度"装不下"浮动元素, 则会另起一行
- 浮动的元素是碰到**==直接的==上一个元素**边缘, 就停止移动, 无论是同级元素, 还是父元素, 
  - 如: 第二个元素浮动还是在第一个块级元素下面
  - 第三个浮动的元素会贴着第二个没有浮动元素的下边, 而不是第一个浮动元素的下边
- ==最好设置了浮动, 同父元素内部的所有元素都加上浮动==



##### 浮动的实际运用:

1. 浮动元素经常和标准流父级元素搭配使用

先用标准流的父元素排列上下位置, 然后内部元素采取浮动的方式排列左右位置

2. 可以方便的设置为盒子左右边距, 而设置为行内块元素会有默认的边距 



##### **清除浮动**:

> ​	有时候父元素里的内容不确定, 无法设置高度, 而子元素又设置了浮动属性, 不占有位置无法撑开父元素, 使得父元素高度为0, 会影响网页的标准流布局.

**本质**:

- 清除浮动的本质是清除浮动元素造成的影响
- 如果父元素本身有高度, 则不需要清除浮动
- 清除浮动之后, 父元素就会撑开为浮动盒子的高度

​	在css中采用clear属性来清除浮动, clear具有left, right, both属性值, 但几乎只用clear: both; 

---

**清除浮动的策略**: ==闭合浮动==, 只影响父元素内部, 不影响外部

**方法有四种**

1. **额外标签法**也称为隔墙法, 是W3C推荐的做法
2. 父级元素添加overflow属性
3. 父级元素添加after伪元素
4. 父级元素添加双伪元素



###### **额外标签法**

> 在浮动元素末尾添加一个空标签(块级元素), 将浮动元素和普通元素分隔开

如: \<div style="clear: both;"></div\>

该方法通俗易懂, 书写方便, 但是添加了无意义标签, 无语义



###### **overflow属性**

> 设置元素的溢出内容范围, 我认为目的是清楚元素之定位

清除浮动, 可以将父级元素的overflow属性可以设置为三个值 hidden, auto 或 scroll

该方法代码简洁, 但是无法显示溢出的部分内容



###### **伪元素法**

> 通过给父元素添加一个伪元素, 来"支撑"父元素的高度, 可以说是额外标签法的升级版

代码展示:

``` css
.clearfix:after {	/* 习惯命名, 给父元素添加一个属性即可 */
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {	/* 考虑低版本IE6, 7浏览器 */
    *zoom: 1;
}
```

该方法没有增加标签, 保持了结构的语义性, 但是需要考虑低版本的兼容性



###### **双伪元素**

> 为父元素设置前后伪元素, 将其display属性设置为table表格, 这样应该就会自动的扩展高度了

代码展示:

``` css
.clearfix:before,
.clearfix:after {
    content: "";
    display: table;
}
.clearfix:after {
    clear: both;
}
.clearfix {		/*照顾低版本浏览器*/
    *zoom: 1;
}
```

该方法和单伪元素相差无几



#### 3. 定位

##### **学习目标**:

- 能够说出为什么使用定位
- 定位的4中分类
- 4种定位各自的特点
- 子绝父相是干嘛的
- 淘宝轮播图
- 显示隐藏的2种方式及区别

> ​	当需要更加细致的直接决定元素的位置时, 我们需要采取定位的方法.相比于浮动有了更多的选择.
>
> ​	定位可以粗略的理解为, 定位 = 定位模式 + 位置偏移

**定位模式**: position 决定元素在文档中采取怎样的模式去定位

**位置偏移**: 通过 top, bottom, left, right 来决定具体的位置



##### - 静态定位

​	position: static;

​	将定位模式设置为static就是静态定位, 即按照默认的定位模式(标准流)来定位, 无法使用位置偏移来修改其位置



##### - 相对定位

​	position: relative;

​	relative意思 "相对的", 该定位模式表示该元素是根据自身原本位置(标准流的位置)来进行位置偏移的

**特点**: 

- 相对于自身原本应在的位置来移动
- 该元素在移动后, 它在标准流中的位置依然存在, 其他元素不会占用
- **经常用来限制子元素的绝对定位**



##### - ==绝对定位==

​	position: absolute;

​	绝对定位是在实际开发中最常用的定位模式, 经常和相对定位搭配布局

**特点**:

- **使用的绝对定位的元素会自动转化为行内块元素**
- **如果没有祖先(父)元素, 或者祖先(父)元素没有设置定位模式, 则以浏览器为准来定位**
- 如果有祖先元素, 就会以**最近一级**的设置了定位模式(相对, 绝对, 固定)的祖先元素为准来定位
- **绝对定位元素不再在标准流中占有位置了**
- 设置了绝对定位的元素, margin: auto, 不再会使元素自动居中

> ​	有必要解释一下 => 绝对定位元素总是相对于设置了定位模式的最近一级的祖先元素来定位
>
> ​	如果绝对定位元素的父元素没有设置定位模式, 爷爷元素设置了, 就会以爷爷为准. 
>
> ​	如果父亲, 爷爷都设置了, 则以父元素为准(最近一级!)



##### - 子绝父相

> ​	顾名思义: 子元素, 父元素定位模式分别设置为相对, 绝对定位, 是一种经常使用的布局页面的方法

**功能效果**:

- 子元素需要绝对定位来脱离标准流, 达到任意显示的目的
- 子元素在父元素内部任意显示, 因此父亲需要设置定位模式.
- 之所以不使用绝对, 固定, 而是相对, 是因为大部分情况下父元素不需要脱标, 需要占有位置



##### - 固定定位

> ​	固定定位模式用于将元素定位于浏览器的可视区域, 通俗来说就是不管浏览器窗口范围多大, 显示页面哪个区域, 元素总是相对浏览器窗口来定位

​	position: fixed;

**特点**:

- 以浏览器的可视窗口为基准来定位
- 跟父元素没有关系, 脱离标准流

固定定位可以理解为特殊的绝对定位, 只不过"更绝对一点".

**小技巧**:

- 如何使元素始终贴在版心的一侧
  1. 先偏移可视区域的50%, 就到版心中间了
  2. 再设置**负的外边距**为版心的一半, 就固定到版心的一侧了

- 如何使固定/绝对定位元素居中
  - 设置left: [父元素宽度(高度)-本身宽度(高度)] / 2 即可, 原理及其简单, 不解释了



##### 绝对, 固定定位的特性

符合这两种定位的元素和浮动元素具有相似的特性

- 当将元素的定位属性设置为 absolute / fixed, 其显示模式会转化为行内块元素
- 该类元素不会触发外边距塌陷问题
- <u>带有文字的</u>标准流盒子在补齐==浮动元素==的位置时, 其内的文字不会被浮动元素覆盖, 文字会自动在盒子内被挤开, 浮动元素产生的<u>最初目的是为了使文字围绕在浮动元素周围</u>.
- 而绝对(固定)定位会覆盖标准流盒子中的文字



##### - 粘性定位

>  被设置了粘性定位模式的元素, 同时具有相对定位和固定定位的特点

​	position: sticky;

**特点**:

1. 在标准流中占有位置 <= 相对定位

2. 在没有达到固定定位的限制时, 会随页面滚动

**举例**:

``` css
.stick {
            position: sticky;
            width: 800px;
            height: 50px;
            top: 20px;
            margin: 100px auto; 
            background-color: #fe9384;
        }
```

​	如代码显示, stick元素初始位置在距离上边缘100px, 被固定在距离上边缘的20px, 如果下拉滚动条, 会随着滚动向上边移动, **但最后会停在距离上边缘20px的位置**!

> 总体来说, 就是能随滚动条滚动, 但永远不会滚出固定定位限制的位置, 这就是粘性所在.



##### - 定位叠放次序

> ​	在使用定位布局时, 可能会出现盒子重叠的情况, 这时候我们就需要使用定位盒子的**z-index**属性设置盒子之间的显示次序

​	z-index: 1; 不用加单位

**特点**:

- 属性的数值可以是正数, 负数或0, 默认为auto, 数值越大, 盒子的显示级别越高
- 如果属性值是相同的, 则根据元素的书写顺序来决定, 后面的元素显示级别高
- **只有设置了定位属性的盒子才有z-index属性**



#### 4. 显示与隐藏

##### display

> 在被运用于标准流中转换的同时, 还经常用于控制显示与隐藏

- display: none 	用于隐藏元素
- display: block     在这里表示显示元素, 如果是其他模式的对应改吧?

在实际运用中, 常与js绑定实现下拉菜单等功能



##### visibility

该属性和display差不多的用法, 使用hidden和visible来分别实现隐藏和显示

**区别**: 使用该属性隐藏的元素还会占有原来的位置



##### overflow

> 用于隐藏元素中溢出的部分

常见四种属性值

- visible 显示溢出的部分, 为默认属性
- hidden 隐藏溢出的部分
- scroll 为元素添加滚动条
- auto 为body的默认属性, 在子元素超出父元素区域时才会添加滚动条

**注意**: 

1. 分清楚scroll和auto的区别
2. 对于有定位的盒子, 慎用overflow: hidden来隐藏元素, 因为有的元素可能需要显示在盒子外部



##### 土豆案例

> 为盒子设置遮罩

通过影响父元素来控制子元素的样式

``` css	
.content {
            width: 444px;
            height: 220px;
            background-color: aqua;
        }
        .mask {
            visibility: hidden;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .4);
        }
        /* 相当于设置了一种当鼠标悬浮在父元素上, 子元素对应的样式 */
        .content:hover .mask{
            visibility: visible;
        }
```

也可以使用display属性, 从本次案例中, 我认识到样式的设置不单单只是指定单个元素, 还可以指定一连串组合元素的样式!



### CSS高级技巧

#### 1. 精灵图

精灵图: 指一张包含网站中许多小图标的图片

> ​	由于网站页面精美性的提高, 开始出现了大量的图标; 网站虽然精美了, 但是对大量的图片的请求发送却造成了网站服务器的负荷过高, 因此就需要将用的图标合成在一张图里, 这样可以大大减少服务器的负荷.
>
> ​	总之: 为了有效地减少服务器接受和请求的次数, 提高页面的加载速度, 就出现了CSS精灵技术

**精灵图核心**:

- 主要针对于小的背景图片使用
- 主要借助于背景属性实现 -> background-position, 通过给该属性指定具体的数值
- 一般情况下指定数值都是负值(图片根据x轴向左为负, 根据y轴向上为负), 因为图片一般都比盒子大, 默认盒子与图片的左上角对齐.

**使用方式**:

1. 先测量出所需图标的大小, 及x, y轴位置
2. 为盒子的background属性添加url和position

background: url("") no-repeat -Xpx -Ypx;

**代码优化技巧**: 可以选择将所有的图标元素分为同一个类名, 然后统一设置背景图片, 最后分别为各个图标设置背景位置



#### 2. 三角形边框

> ​	有时候在网页样式设计中, 需要直接用CSS来制作类似三角的图形.
>
> 如: 对话框, 二维码展示等.
>
> ![CSS三角实例图](C:\Users\a\Desktop\大学笔记\css笔记图片\CSS三角实例图.png)

**原理**: 这种三角形其实是利用**border**边框样式所做, 当盒子宽高为0时边框就会体现为四个三角形拼凑的形状

**代码展示**:

![CSS三角(边框)](C:\Users\a\Desktop\大学笔记\css笔记图片\CSS三角(边框).png)

图中红框内为兼容性代码

**非等腰三角形制作**

原理: 当只保留两条边框时, 可以通过调整两条边框的width来绘制出特定的三角形

代码如下:

![CSS非等腰三角形绘制](C:\Users\a\Desktop\大学笔记\css笔记图片\CSS非等腰三角形绘制.png)

图中就以 上, 右 两条边框为例



#### 3. 鼠标样式更改

> 浏览器有些默认标签, 当鼠标悬浮在标签上时, 会更改鼠标的样式.
>
> 如: 触碰链接和按钮标签时, 会更改为"小手"的样式; 当为文本时, 就表现为箭头

但是很多时候, 我们是用其他标签比如div来代替p, a, button等标签

这时候我们就需要修改目标标签的cursor样式属性了

![鼠标样式](C:\Users\a\Desktop\大学笔记\css笔记图片\鼠标样式.png)



#### 4. vertical-align

> ​	有时候需要让文字和图片按照垂直方向中心对齐, 但是当图片和文字放在同一个盒子中, 图片默认是根据文字的基线对齐的, 并且line-height属性无法达到目的.

因为==行内块元素会默认和文字的基线对齐==

所以我们就需要将 **图片** 的vertical-align垂直对齐方式改为middle, 对准文字的中心线, 就可以实现图片和文字垂直中心对齐

![vertical基准线示例图](C:\Users\a\Desktop\大学笔记\css笔记图片\vertical基准线示例图.png)

**图片底侧留有空白缝隙**

该问题同样也是因为, 默认是对准文字基线的, 并不是对齐文字底部, 所以文字底部会挤出一段距离, 从而导致图片和边界存在缝隙

![图片底侧空白缝隙展示图](C:\Users\a\Desktop\大学笔记\css笔记图片\图片底侧空白缝隙展示图.png)

**解决办法**:

1. 将图片的vertical-align属性修改为除baseline以外的值
2. 将图片修改为块级元素, **因为块级元素独占一行, 没有vertical-align属性**



#### 5. 文字溢出省略

![文字溢出省略示例图](C:\Users\a\Desktop\大学笔记\css笔记图片\文字溢出省略示例图.png)

如图, 通过CSS多种属性的设定, 可以做到将溢出的文字自动转化为省略号

代码如下:

- 单行文本溢出省略设置

``` CSS
/* 因为文字默认会自动换行, 所以需要关闭 */
p, div {
    white-space: nowrap;	/* 关闭自动换行 */
    overflow: hidden;		/* 隐藏溢出部分 */
    text-overflow: ellipsis;	/* 指定溢出部分显示效果 */
}
```

- 多行文本溢出省略设置(仅支持-webkit-内核)

![多行文本溢出显示](C:\Users\a\Desktop\大学笔记\css笔记图片\多行文本溢出显示.png)



#### 6. margin负值的运用

![margin负值重叠边框示例图](C:\Users\a\Desktop\大学笔记\css笔记图片\margin负值重叠边框示例图.png)

如何设置这种两个图片之间共用一条边框?(其实每个图片盒子都有边框)

> 办法是: 

1. 让所有盒子都有边框然后贴在一起, 但这样它们之间的边框看起来会比原来的厚一倍, 因为两个的边框贴在了一起, 变成了一条边框, 所以会变厚.
2. 那么如何做到图中这种一条边框的厚度呢, 不能只显示盒子的右边框然后取消最后一个的右边框(太麻烦而且无法达到这种效果), 解决方法是: 让所有盒子向左移动1px(假设是1px的边框), 使得后一个盒子的边框与前一个盒子重叠, 就获得了只有一条边框的效果
3. ==疑问==: 所有盒子都向左移动了1px, 那么用于定位的父盒子是不是应该向右移动1px, 保证位置的准确性?

**鼠标悬浮显示对应盒子边框颜色的变化**

![重叠边框显示层级示例图](C:\Users\a\Desktop\大学笔记\css笔记图片\重叠边框显示层级示例图.png)

- 没有添加定位的盒子

  - 只需要给:hover加上 {position: relative;} 即可, 就会比普通static盒子的显示层级高, 边框覆盖其他的盒子

- 已经有定位属性的盒子

  - 就需要通过z-index直接提高显示层级, 因为同为有position属性, 原先的显示层级一致.

  ==没有添加定位属性的标签, 无法使用z-index属性==



#### 7. CSS初始化

> ​	由于浏览器对某些标签会有默认的样式, 如:a, h1-h3, em, li等, 不同浏览器又会有不同的默认值, 又或者自带的内外边距, 都会影响开发者的开发设计, 所以在开发之前, 需要"初始化"一些必要的代码.
>
> 比如:
>
> a {text-decoration: none;}, li {list-style: none}, *{margin: 0; padding: 0;}等等

**Unicode编码字体**:

把中文字体的名称用相应的Unicode编码代替, 可以有效地避免浏览器解释CSS代码出现乱码的问题.

- 黑体 \9ED1\4F53
- 宋体 \5B8B\4F53
- 微软雅黑 \5FAE\8F6F\96C5\9ED1

==疑问==: 微软雅黑有英文版的, 'Microsoft Yahei'

初始化代码示例:

![CSS初始化示例1](C:\Users\a\Desktop\大学笔记\css笔记图片\CSS初始化示例1.png)

![CSS初始化示例2](C:\Users\a\Desktop\大学笔记\css笔记图片\CSS初始化示例2.png)

![CSS初始化示例3](C:\Users\a\Desktop\大学笔记\css笔记图片\CSS初始化示例3.png)



### HTML5新增

#### 1. 语义性标签

> 以往的"大盒子"都统一用div来实现, 没有实际意义, 因此在H5中添加了header, footer等具有语义的盒子标签

- header: 头部标签
- nav: 导航标签
- article: 内容标签
- section: 定义文档某个区域
- aside: 侧边栏标签
- footer: 尾部标签

示意图:

![HTML5新增语义标签](C:\Users\a\Desktop\大学笔记\css笔记图片\HTML5新特性\HTML5新增语义标签.png)



#### 2. video标签

> 以前的视频是借助flash驱动实现的, 现在更新了video标签可以直接嵌入视频.
>
> 这是不是flash被舍弃的原因? :smirk:

**使用形式**

``` html
<video width="320" height="240" controls="true">
	<source src="./movie.mp4" type="video/mp4">
    <source src="./movie.ogg" type="video/mp4">
    您的浏览器不支持video标签
</video>
```

video标签通过source标签提供的src来展示视频, 如果上一个source用不了就会试下一个, 如果都不行则会显示最后的文字, **直接使用video的src引入视频资源也是可以的.**

**video常用属性**

![video标签属性大全](C:\Users\a\Desktop\大学笔记\css笔记图片\HTML5新特性\video标签属性大全.png)

**各浏览器支持格式**(MP4是都支持的)

![新增视频标签](C:\Users\a\Desktop\大学笔记\css笔记图片\HTML5新特性\新增视频标签.png)



#### 3. audio标签



### CSS特殊样式细节



### 实战开发和易错概念

#### :rabbit2:实战开发

##### 1. 因为有些标签的默认边距不同, 所以在网页布局前先将内外边距全部清零

``` css
* {
    padding: 0;
    margin: 0;
}
```

##### 2. 对盒子的布局最好要先设置好大小, 再布局, 但是当内容不确定时, 可以不设置父元素的大小

##### 3. css属性书写顺序

![image-20220128185744636](C:\Users\a\AppData\Roaming\Typora\typora-user-images\image-20220128185744636.png)

##### 4. 页面布局整体思路

为了提高网页制作的效率, 布局时通常有一下的整体思路:

1. 必须确定页面的版心(所有内容共同宽度), 可通过测量得知
2. 分析页面中的行模块, 优先实现标准流, 再分析行模块中列模块
3. 行内的列模块经常采用浮动式布局, 先确定大小, 再布局
4. 准确制作HTML结构, 遵循先有结构, 后样式的准则

>  只有理清楚整体的布局思路, 才能高效的制作网页, 需要多积累和总结

##### 5. 制作导航栏注意点

实际开发中, 不会直接用链接a元素作为结构, 而是用li包含a的做法

1. li + a 语义更清晰
2. 如果直接用, 搜索引擎会认为堆砌关键字从而降权, 影响网站排名
3. 让导航栏里的内容一行显示, 可以给li显示为行内块, 或加上浮动属性
4. 导航栏模块可以不给宽度, 将来可以继续添加文字

##### 6. button标签默认有一个边框, 而且显示为border-box属性, 即宽度, 高度就是实际高度, 边框不占空间

##### 7. 对于行内元素中的行内元素, 设置浮动, 是会相对于为block属性盒子来浮动吗??? 而不是只会相对于直接父元素

> \<div>\<a\><img\></img\>\</a></div\> 对Img设置浮动, 是相对于div来移动的

##### 8. 浮动元素不会出现和父元素外边距塌陷问题

##### 9. 通常使用div盒子套着img标签元素, 易于控制

#### :lantern:易错概念

1. 行内元素有内外边距, 但上下边距不起作用, 所以尽量设置左右边距
2. 在设置z-index属性时, 要想a图层完全覆盖b图层, 应该给a图层添加背景颜色, 否则就只有文字会覆盖b图层

如图:![image-20221105204427154](C:\Users\a\AppData\Roaming\Typora\typora-user-images\image-20221105204427154.png)

仅仅是<部分覆盖了"问题反馈"图层, 并没达到完全覆盖的效果

3. :question:z-index只能用来设置同级的定位元素层次显示吗





