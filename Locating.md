对于许多 Selenium 命令，目标是必需的。这个目标用来标示 web 应用程序内容中的指定元素，他是用 locatorType = location 格式所描述。在许多情况下定位器类型可以省略。下面逐一解释各种定位器类型的例子。

## 标示符定位

---
这是最常用的定位元素的方法，当没有指定定位器类型时，默认使用这种定位器。这个策略会检索 id 属性值与 location 匹配的第一个元素。如果没有元素的 id 属性与之匹配，那么会检索 name 属性与 location 匹配的第一个元素。

例如，你的页面源代码可能有id和name属性如下:

```html
<html>
 <body>
  <form id="loginForm">
   <input name="username" type="text" />
   <input name="password" type="password" />
   <input name="continue" type="submit" value="Login" />
  </form>
 </body>
<html>
```
下面的定位策略将返回上面 HTML片段 中相匹配元素的行号:

- identifier=loginForm (3)
- identifier=password (5)
- identifier=continue (6)
- continue (6)

因为 identifier 类型的定位是默认的，前三个例子的 identifier = 不是必需的。

## ID 定位

---
这种类型的定位器比 identifier 定位器类型限制更多，但也更加明确。当你知道一个元素的 id 属性时使用这个定位器。

```html
 <html>
  <body>
   <form id="loginForm">
    <input name="username" type="text" />
    <input name="password" type="password" />
    <input name="continue" type="submit" value="Login" />
    <input name="continue" type="button" value="Clear" />
   </form>
  </body>
 <html>
```
 
- id=loginForm (3)

## Name 定位

---
Name 定位器类型将定位与 Name 属性相匹配的第一个元素。如果有多个名称属性相同的元素，那么您可以使用过滤器来进一步完善你的位置策略。默认的过滤器类型是值（匹配 value 属性）。

```html
 <html>
  <body>
   <form id="loginForm">
    <input name="username" type="text" />
    <input name="password" type="password" />
    <input name="continue" type="submit" value="Login" />
    <input name="continue" type="button" value="Clear" />
   </form>
 </body>
 <html>
```
 
- name=username (4)
- name=continue value=Clear (7)
- name=continue Clear (7)
- name=continue type=button (7)

**注意**

不像某些类型的定位器，如：XPath 和 DOM。上面三种类型的定位器允许 Selenium 测试 UI 元素不依赖与在页面上的位置。如果页面结构或者组织改变了，测试仍将通过。你可能会或可能不会对页面结构发生变化的页面进行测试。如果网页设计师经常改变页面，但其功能必须回归测试，通过 id 和 name 属性，或通过任何 HTML 属性进行测试就变得非常重要了。 

## XPath 定位

---
XPath 是用于定位 XML 文档中节点的语言。由于 HTML 可以实现为 XML（XHTML），Selenium 的用户可以利用这个强大的语言来定位他们 web 应用程序中的元素。XPath 超出(以及支持)简单的 id 或 name 属性定位，并开辟了各种新的可能性，如定位页面上第三方的复选框。

使用 XPath 的主要原因之一是对于一个你希望找到的元素，你没有合适的 id 或 name 属性来定位。您可以用 XPath 绝对定位元素（不建议）,或相对于一个有 id 或 name 属性的元素来定位。XPath 定位器也可以通过使用 id 和 name 属性之外的其他属性来定位元素。

绝对的 XPath 包含从根(html)所有元素的位置，因此只要轻微的调整应用程序页面，XPath 就会失效。通过寻找附近的 id 或 name 属性的元素（理想情况下是一个父元素）可以基于这种位置关系来定位你的目标元素。这种位置关系通常不太可能改变，可以使你的测试更加健壮。

因为只有 XPath 定位器从 // 开始，所以在指定 XPath 定位器时没有必要包含 xpath = label。

```html
<html>
  <body>
   <form id="loginForm">
    <input name="username" type="text" />
    <input name="password" type="password" />
    <input name="continue" type="submit" value="Login" />
    <input name="continue" type="button" value="Clear" />
   </form>
 </body>
<html>
```

- xpath=/html/body/form[1] (3) - 绝对路径（对HTML轻微的修改会令此路径失效）
- //form[1] (3) - HTML中的第一个form 元素
- xpath = //form[@id = 'loginForm'] (3) - 拥有id属性值为loginForm的element元素
- xpath=//form[input/@name='username'] (3) - First form element with an input child element with attribute named ‘name’ and the value ‘username’
    //input[@name='username'] (4) - First input element with attribute named ‘name’ and the value ‘username’
    //form[@id='loginForm']/input[1] (4) - First input child element of the form element with attribute named ‘id’ and the value ‘loginForm’
    //input[@name='continue'][@type='button'] (7) - Input with attribute named ‘name’ and the value ‘continue’ and attribute named ‘type’ and the value ‘button’
    //form[@id='loginForm']/input[4] (7) - Fourth input child element of the form element with attribute named ‘id’ and value ‘loginForm’

These examples cover some basics, but in order to learn more, the following references are recommended:

    W3Schools XPath Tutorial
    W3C XPath Recommendation

There are also a couple of very useful Firefox Add-ons that can assist in discovering the XPath of an element:

    XPath Checker - suggests XPath and can be used to test XPath results.
    Firebug - XPath suggestions are just one of the many powerful features of this very useful add-on.


## Link Text 定位超链接

---
用链接文字来定位网页面上的超链接元素是一个很简单的方法。如果两个链接有相同的文本，那么第一个匹配的元素被定位。

```html
<html>
 <body>
  <p>Are you sure you want to do this?</p>
  <a href="continue.html">Continue</a>
  <a href="cancel.html">Cancel</a>
</body>
<html>
```

- link=Continue (4)
- link=Cancel (5)

## DOM 定位

---
文档对象模型用来表示一个 HTML 文档，可以使用 JavaScript 操作和访问。这个位置策略使用 JavaScript 来评估一个元素是否页面上，他通过使用分层的点号标记法，使得元素定位得到简化。

因为只有 dom 定位器由 document 开始，所以当指定一个 DOM 定位器时没有必要包括 dom = label 。

```html
 <html>
  <body>
   <form id="loginForm">
    <input name="username" type="text" />
    <input name="password" type="password" />
    <input name="continue" type="submit" value="Login" />
    <input name="continue" type="button" value="Clear" />
   </form>
 </body>
 <html>
```

- dom=document.getElementById('loginForm') (3)
- dom=document.forms['loginForm'] (3)
- dom=document.forms[0] (3)
- document.forms[0].username (4)
- document.forms[0].elements['username'] (4)
- document.forms[0].elements[0] (4)
- document.forms[0].elements[3] (7)

您可以使用 Selenium 以及其他网站或者浏览器扩展来探索你的 web 应用程序的 DOM。W3Schools 是一个好的参考。

## CSS 定位

---
CSS（Cascading Style Sheets，层叠样式表）是用于描述 HTML 和 XML 文档样式的语言。CSS 使用选择器来绑定文档中元素的样式属性。这些选择器可以使用 Selenium 作为另一个定位策略。

```html
 <html>
  <body>
   <form id="loginForm">
    <input class="required" name="username" type="text" />
    <input class="required passfield" name="password" type="password" />
    <input name="continue" type="submit" value="Login" />
    <input name="continue" type="button" value="Clear" />
   </form>
 </body>
 <html>
```

- css=form#loginForm (3)
- css=input[name="username"] (4)
- css=input.required[type="text"] (4)
- css=input.passfield (5)
- css=#loginForm input[type="button"] (7)
- css=#loginForm input:nth-child(2) (5)

关于 CSS 选择器的更多信息，请参考 W3C publication。你会在那里找到额外的资料。

**注意**

最有经验的 Selenium 用户推荐 CSS 作为他们的定位策略，因为 CSS 选择器速度大大快于 XPath 并且可以在一个 HTML 文档中找到最复杂的对象。

## 隐式定位器

---
以下三种情况你可以省略定位器类型：

- 定位器没有明确指定定位策略的默认使用identifier 定位策略。
- 定位器开始与 // 将使用XPath定位策略。
- 定位器开始于 document 将使用DOM定位策略。

---
[断言和验证](Assertion.md) | [目录](README.md) | [匹配文本模式](Pattern.md)
