作为对 Selenium 的总结性介绍，我们将向您介绍几个常用的 Selenium 命令。这些是构建测试中最常用的命令。

open  
使用 URL 打开一个页面.

click/clickAndWait  
执行点击操作或者等待新页面加载完成后执行点击操作。

verifyTitle/assertTitle  
检查页面的标题是否为预期的内容。

verifyTextPresent  
检查页面上某处的文字是否为预期的内容。

verifyElementPresent  
验证用 HTML 标签定义的，预期的 UI 元素，在页面上是否存在。

verifyText  
验证预期的文本和其相应的 HTML 标记是否出现在页面上。

verifyTable  
验证表格是否包含预期的内容。

waitForPageToLoad  
暂停执行，直到预期的新页面成功加载。当使用 clickAndWait 命令时，此命令自动被调用。

waitForElementPresent  
在一个 HTML 标签定义的 UI 元素，在页面上出现前，暂停执行脚本，直到该UI 元素出现为止。

---
[测试套件](Suites.md) | [目录](README.md) | [验证页面元素](Verify.md)
