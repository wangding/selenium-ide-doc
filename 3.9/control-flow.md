# 控制流

Selenium IDE 附带了一些命令，可以让您添加条件逻辑以及循环到测试中。

这使您只有在满足应用程序中的某些条件时才执行命令（或一组命令），或者根据预定义的条件重复执行命令。

## JavaScript 表达式

使用 JavaScript 表达式检查应用程序中的条件。

您可以在测试期间的任何时候使用 `execute script` 或 `execute async script` 命令运行 `JavaScript` 代码段，并将结果存储在变量中。这些变量可用于控制流命令。

您还可以直接在控制流命令中使用 JavaScript 表达式。

## 可用命令

控制流命令通过指定打开和关闭命令来表示命令的集合（或块）。

以下是每个可用的控制流命令以及它们的伴随和/或关闭命令。

- `if`，`else if`，`else`，`end`
- `times`，`end`
- `do`，`repeat if`
- `while`，`end`

让我们逐步介绍每个例子。

## 条件分支

条件分支使您可以更改测试中的行为。

![if 示例，王顶，408542507@qq.com](https://www.seleniumhq.org/selenium-ide/img/docs/control-flow/if.png)

### [if](commands.md#if)

这是条件块的打开命令。

与此同时，您提供一个您想要评估的 JavaScript 表达式。这可以包含从测试中的先前 JavaScript 表达式创建的变量。这些都放在 `if` 命令的 `target` 字段。

如果该表达式评估为 `true` 则测试将执行它后面，直到下一个条件控制流命令命令（例如，`else if`，`else`，或 `end`）。

如果该表达式评估为 `false` 将跳过随后的命令和跳转到下一个相关条件控制流命令（例如，`else if`，`else`，或 `end`）。

### [else if](commands.md#else-if)

此命令在 `if` 命令块中使用。

类似 `if` 它在 `target` 输入字段中使用 JavaScript 表达式来评估，执行其后面的命令分支，或者跳到下一个相关的控制流命令（例如，`else` 或 `end`）。

### [else](commands.md#else)

`else` 是你可以拥有的 `if` 块的最后一个条件。如果未满足任何先前条件，则将执行此命令分支。

完成后它将跳转到 `end` 命令。

### [end](commands.md#end)

该命令终止条件命令块。如果没有它，命令块将不完整，您将收到一条有用的错误消息，让您在尝试运行测试时知道。

## 循环

循环使您可以迭代给定的命令集。

### [times](commands.md#times)

有了 `times` 你可以指定一个迭代次数要执行的命令集。该数字进入命令的 `target` 输入字段 `times`。

要关闭 `times` 命令块，请务必使用 `end` 命令。

![times-example，王顶，408542507@qq.com](https://www.seleniumhq.org/selenium-ide/img/docs/control-flow/times.png)

### [do](commands.md#do)

使用 `do` 命令启动循环，然后是要执行的命令，并以 `repeat if` 命令结束。`repeat if` 获取您要在 `target` 字段中评估的 JavaScript 表达式。

`do` 将首先执行之后的命令，然后评估 `repeat if` 中的条件表达式。如果表达式返回，`true` 则测试将跳回 `do` 命令并重复该序列。

![do-example，王顶，408542507@qq.com](https://www.seleniumhq.org/selenium-ide/img/docs/control-flow/do.png)

这将继续，直到条件返回 `false` 或触发无限循环保护————默认为 `1000` 次尝试。您可以通过在 `repeat if` 命令的 `value` 字段中指定数字来覆盖此默认值。

### [while](commands.md#while)

随 `while` 您提供要在 `target` 输入字段中评估的 JavaScript 表达式。如果它评估为 `true` 命令块，则执行该命令块直到它到达 `end` 命令。

完成后，测试将跳回到 `while` 命令并重复相同的序列（首先检查条件是否为 `true` 或 `false`）。

要关闭 `while` 命令块，请使用 `end` 命令。

![while-example，王顶，408542607@qq.com](https://www.seleniumhq.org/selenium-ide/img/docs/control-flow/while.png)

循环将重试，直到条件返回 `false` 或触发无限循环保护————默认为 `1000` 尝试。您可以通过在 `while` 命令的 `value` 字段中指定数字来覆盖此默认值。

### [forEach](commands.md#for-each)

保存最后的最佳，我们有能力迭代一个集合（例如，JS 数组），并在我们这样做时引用该集合中的每个项目。

在 `target` 字段中，您可以指定包含要迭代的数组的变量的名称。在 `value` 字段中，您可以指定要使用的迭代器变量的名称。对于数组中的每个条目，将执行后面的命令。在每次迭代期间，可以通过迭代器变量访问当前条目的内容。

![for-each-example，王顶，408542507@qq.com](https://www.seleniumhq.org/selenium-ide/img/docs/control-flow/for-each.png)

## 嵌套命令

您可以根据需要嵌套控制流命令（例如，`if` 块可以放在 `while` 块内，反之亦然）。

![nested-example，王顶，408542507@qq.com](https://www.seleniumhq.org/selenium-ide/img/docs/control-flow/nested.png)

## 语法验证

如果您不确定控制流语法是否正确，请尝试运行测试以查看。IDE 将发现控制流语法中的错误，并调出不正确或缺失的特定命令。

![error-example，王顶，408542407@qq.com](https://www.seleniumhq.org/selenium-ide/img/docs/control-flow/error.png)
