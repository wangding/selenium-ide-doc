# 测试套件

测试套件是测试的集合。通常会在一个测试套件将所有的测试作为一个连续的批处理作业运行。
  
Selenium IDE 可以用一个简单的 HTML 文件来定义测试套件。语法也很简单。一个 HTML 表格定义了一个测试列表，其中的每一行定义了每个测试文件的路径。举个例子：
  
```html
<html>
<head>
<title>Test Suite Function Tests - Priority 1</title>
</head>
<body>
<table>
  <tr><td><b>Suite Of Tests</b></td></tr>
  <tr><td><a href="./Login.html">Login</a></td></tr>
  <tr><td><a href="./SearchValues.html">Test Searching for Values</a></td></tr>
  <tr><td><a href="./SaveValues.html">Test Save</a></td></tr>
</table>
</body>
</html>
```

类似上面这个文件这将允许 Selenium IDE 逐一运行测试。 
  
测试套件还可以用 Selenium RC 来维护。通过编程，可以有多种实现方式。如果使用 Selenium RC 和 Java，通常使用 Junit 来维护一个测试套件。此外，如果使用 C# 语言，Nunit 可以用来维护测试套件。如果使用解释型语言像 Python，Selenium RC 需要添加一些简单的编程，来建立一个测试套件。因为 Selenium RC 可以使用程序代码的编程逻辑，所以实现测试套件并不困难。
