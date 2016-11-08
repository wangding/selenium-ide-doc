测试套件是测试用例的集合，测试用例在 Selenium IDE 的左侧窗格中进行管理。通过点击一排带小点的分隔条，可以手动的打开和关闭左侧面板。

当用户通过文件菜单打开一个现有的测试套件或新建一个测试用例时，测试套件面板会自动打开。在后一种情况下，新建的测试用例将立即出现在以前的测试用例下面。

通过“文件”->“添加测试用例”菜单项，Selenium IDE 也支持加载已有的测试用例。可以将现有测试用例添加到一个新的测试套件中。

一个测试套件文件是一个 HTML 文件，其中包含一个单列的表格。<tbody> 中每行中的单元格中包含了一个测试用例文件的链接。下面是一个包含了四个测试用例的测试套件的例子：

  
```html
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Sample Selenium Test Suite</title>
</head>
<body>
    <table cellpadding="1" cellspacing="1" border="1">
        <thead>
            <tr><td>Test Cases for De Anza A-Z Directory Links</td></tr>
        </thead>
    <tbody>
        <tr><td><a href="./a.html">A Links</a></td></tr>
        <tr><td><a href="./b.html">B Links</a></td></tr>
        <tr><td><a href="./c.html">C Links</a></td></tr>
        <tr><td><a href="./d.html">D Links</a></td></tr>
    </tbody>
    </table>
</body>
</html>
```

**注意**

测试套件与测试案例文件之间的路径关系，不要随便改变。如果路径关系改变了，一定要记着更新文件中的链接地址。

---
[调试脚本](Debugging.md) | [目录](README.md) | [用户自定义扩展](Extensions.md)
