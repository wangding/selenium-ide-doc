Selenium 命令通常被称为 selenese，是用来运行测试的一个命令的集合。这些命令的序列是一个测试脚本。这里将详细解释这些命令，展示使用 Selenium 测试 web 应用程序时的很多选择。
  
Selenium 提供了一组丰富的命令，以几乎任何你可以想象的方式，全方位测试你的 web 应用。这些命令通常被称为 selenese 命令集，这些命令基本上构造了一个测试语言。
  
例如，利用 selenese，你可以依据 UI 元素的 HTML 标记来测试该 UI 元素在页面上是否存在，测试页面上的具体内容，测试失效链接，输入字段，下拉列表选择，待提交的表单，表格数据，等等。此外，Selenium 命令还能测试窗口大小，鼠标位置、alerts 信息、Ajax 功能，弹出窗口，事件处理，以及许多其他 web 应用程序的特性。[命令参考](http://release.seleniumhq.org/selenium-core/1.0.1/reference.html)中列出了所有可用的命令。

命令会告诉 Selenium 做什么。Selenium 命令分三大类：Action 动作，Accessors 访问器和 Assertions 判断。

- Action 动作类命令，一般用来操作应用程序的状态。他们做的事情，类似：点击这个链接、选择那个选项。如果动作失败，或者有错误，当前测试会停止执行。

  许多动作会增加一个 AndWait 后缀，如：clickAndWait。这个后缀告诉 Selenium 动作将会导致浏览器发送请求到服务器，而 Selenium 应该等待一个新页面被完全加载。

- Accessors 访问器类命令，用来检查应用程序的状态，并将结果存储在变量中。如：storeTitle。他们也用于自动生成断言。

- Assertions 判断类命令，很像访问器类命令，但他们验证应用程序的状态是否符合预期。例如：包括 "make sure the page title is X" 和 "verify that this checkbox is checked"。

所有Selenium 判断类命令又分三种使用方式：assert 断言类，verify 验证类，和 waitFor 等待类。例如，你可以 assertText，verifyText 和 waitForText。当一个 assert 失败时，测试会中止。当一个 verify 失败时，测试将继续执行，记录下失败信息。可以用一个 assert 命令确保应用程序在正确的页面上，紧随其后的是一组 verify 判断来测试表单字段值，标签，等等。

waitFor 命令等待一些条件发生（在测试 Ajax 应用程序时，非常有用）。如果条件已经是正确的，他们马上会成功。如果条件在超时设置的范围内不成立，他们将失败并停止测试。

---
[使用基址运行测试案例](BaseURL.md) | [目录](README.md) | [脚本语法](Script.md)
