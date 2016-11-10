类似定位器参数，文本模式是另一种常用的 Selenium 命令参数。需要使用文本模式的命令，例如：verifyTextPresent, verifyTitle, verifyAlert, assertConfirmation, verifyText, verifyPrompt。上面已经提到，LinkText 定位器可使用文本模式。文本模式使用特殊字符来模糊匹配预期的文本，而不必准确的描述该文本。

有三种类型的模式：Globbing 模式，正则表达式和 exact。

# Globbing 模式

---
很人都熟悉 globbing ，因为在 DOS 或 Unix / Linux 命令行下经常用 globbing 模式来匹配文件名，如： ls *.c。这个例子中，globbing 模式用于匹配当前目录下所有的 .c 扩展名的文件。Globbing 的功能很有限。Selenium 只支持和实现两个特殊字符：

- \* 匹配任何事情，例如：什么也没有，一个字符，或许多字符。 
- [ ]（字符类）匹配方括号中的任何单个字符。一个连字符指定一定范围的字符（通常是连续的 ASCII 字符集）。下面几个例子将演示字符类的用法：  

   - [aeiou] 匹配任何一个小写的元音字母   
   - [0 - 9]  匹配任何数字  
   - [a-zA-Z0-9]  匹配任何字母和数字符号  

在很多其他系统中，globbing 还包括第三个特殊字符 ? 。然而，Selenium globbing 模式只支持星号和字符类。

在一个 Selenese 命令中，你可以用 glob: 标记来声明，指定使用 globbing 文本模式参数。然而，由于 globbing 文本模式是默认的，所以你也可以省略 glob: 标签而只保留文本模式本身。

下面例子中，有两个命令使用 globbing 文本模式。在页面上实际的链接文本是 “Film/Television Department”，使用了文本模式而不是准确的文本，click 命令将继续工作，即使链接文本改为“Film & Television Department” 或 “Film and Television Department”。glob 文本模式的星号会匹配 “Film” 单词和 “Television”单词中间的任何符号或者没有符号。

|  **Command**  |  **Target**                                 |   **Value**  |    
| ------------- | ------------------------------------------- | ------------ |
|   click       |    link=glob:Film\*Television Department    |              |     
|  verifyTitle  |    glob:\*Film\*Television\*                |              |     

---
[启动 Selenium IDE](Open.md) | [目录](README.md) | [制作测试案例](Build.md)
