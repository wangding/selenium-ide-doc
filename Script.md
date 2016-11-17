Selenium 的命令很简单，他们包括命令和两个参数。例如：

```
verifyText 	//div//a[2] 	Login
```

参数并不总是必需的，这取决于命令。在某些情况下，两个参数都是必需的，有些情况只需要一个参数，还有些情况可能不需要任何参数。下面有几个例子：

```
goBackAndWait 	  	 
verifyTextPresent 	  	Welcome to My Home Page
type 	id=phone 	(555) 666-7066
type 	id=address1 	${myVariableAddress}
```

命令参考中描述每个命令的参数要求。

命令的参数虽各不相同，但是他们通常是:

* locatoer 定位器用来识别页面中的UI元素。
* text pattern 文本模式用来验证或断言页面内容。
* text pattern 文本模式或Selenium变量用来在文本输入域中输入文本或在选项列表中选择一个选项。

定位器、文本模式，Selenium变量和命令本身在selenium command中有非常详细地描述。 　　 　　

Selenium IDE中运行的脚本，会存储在一个HTML格式的文本文件中。他被包含在一个三列的HTML表格中。第一列是Selenium command（命令），第二个target（目标），最后一列是value（值）。第二列和第三列可能不需要取决于所选的Selenium命令，但他们应该存在。每个表格行代表一个新的Selenium命令。这是一个测试的例子，打开一个页面，断言页面标题，然后验证页面上的一些内容：

```
<table>
    <tr><td>open</td><td>/download/</td><td></td></tr>
    <tr><td>assertTitle</td><td></td><td>Downloads</td></tr>
    <tr><td>verifyText</td><td>//h2</td><td>Downloads</td></tr>
</table>
```
在浏览器中呈现为一个表这样子如下：

```
open 	/download/ 	 
assertTitle 	  	Downloads
verifyText 	//h2 	Downloads
```

Selenese HTML语法可以用来编写和运行测试，而无需编程语言的知识。有了selenese 的基本知识和selenium IDE你可以快速制作和运行测试案例。


---
[访问器命令和变量参数](Variables.md) | [目录](README.md) | [echo - Selenese 打印命令](echo.md)
