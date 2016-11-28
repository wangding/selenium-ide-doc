在脚本的开头，可以使用 Selenium 变量来存储常数。另外，在数据驱动测试中（将在后面一节中讨论），Selenium 变量可用于存储从命令行，从另一个程序，或从一个文件中传递的数据。

store 命令是所有存储命令中最基础的命令，它仅仅能把一个常量存储在一个 Selenium 变量中。它包括两个参数，存储的文本值和 Selenium 变量。使用标准的变量命名约定来为变量起名，即变量名中只能包含字母和数字。

|  命令  |     目标      |   值      |    
| ------- | --------- | ------------ |
|   store | paul@mysite.org | userName |     

在后面的脚本中，你可以使用变量中的数据。要访问变量的值，用花括号({ })括住变量名，并前置一个美元符号。

|  命令  |     目标      |   值      |    
| ---------- | ------- | ------------ |
| verifyText | //div/p | ${userName}  |     

变量的常见用法是存储 input 字段中的输入数据。

|  命令  |     目标      |   值      |    
| ----- | ---------- | ------------ |
|  type | id = login | ${userName}  |


Selenium 变量可以用在第一或第二个参数，并且相比较其他操作符会被命令优先解释执行。Selenium 变量也可以用在一个定位器表达式中。 

每个验证和断言命令都有等价的 store 命令。下面是一些常用的 store 命令。

**storeElementPresent**

---
对应于 verifyElementPresent 命令。它存储一个布尔值 true 或 false ，取决于 UI 元素是否出现。

**storeText**

---
StoreText 对应于 verifyText 命令。它使用一个定位器来识别页面文本。如果找到文本，则存储在变量中。StoreText 可以用来提取被测页面中的文本信息。

**storeEval**

---
该命令需要一个脚本作为第一个参数。在 Selenese 中使用 JavaScript 参数，将在下一节中介绍。StoreEval 允许将 JavaScript 脚本运行的结果存储在一个变量中。


---
[顺序执行和流程控制](Flow.md) | [目录](README.md) | [JavaScript 和 Selenese 变量参数](JavaScript.md)
