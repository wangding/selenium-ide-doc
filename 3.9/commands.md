# 命令

## `add selection`

将选择添加到多选元素中的选项集。

**参数**

- locator：元素定位器。

---
## `answer on next prompt`

影响下一个警报提示。此命令将向其发送指定的答案字符串。如果警报已存在，则改为使用 “webdriver answer on visible prompt”。

**参数**

- answer：给出响应弹出提示的答案。

---
## `assert`

检查变量是否为预期值。变量的值将转换为字符串以进行比较。如果断言失败，测试将停止。

**参数**

- variable name：不带括号的变量名。
- expected value：您期望变量包含的结果（例如，`true`，`false` 或其他值）。

---
## `assert alert`

断定已弹出包含指定文本的警告弹框。如果断言失败，测试将停止。

**参数**

- alert text：要检查的文本

---
## `assert checked`

断定目标元素已经勾选。如果断言失败，测试将停止。

**参数**

- locator：元素定位器。

---
## `assert confirmation`

断定已弹出确认弹框。如果断言失败，测试将停止。

---
## `assert editable`

断定目标元素是可编辑的。如果断言失败，测试将停止。

**参数**

- locator：元素定位器。

---
## `assert element present`

确认目标元素存在于页面的某个位置。如果断言失败，测试将停止。

**参数**

- locator：元素定位器。

---
## `assert element not present`

断定目标元素不在页面的任何位置。如果断言失败，测试将停止。

**参数**

- locator：元素定位器。

---
## `assert not checked`

断定目标元素没有被勾选。如果断言失败，测试将停止。

**参数**

- locator：元素定位器。

---
## `assert not editable`

断定目标元素不可编辑。如果断言失败，测试将停止。

**参数**

- locator：元素定位器。

---
## `assert not selected value`

断定下拉框中不包含属性值为 value 的选项。如果断言失败，测试将停止。

**参数**

- select locator：标识下拉菜单的元素定位器。
- text：精确的字符串匹配。对模式匹配的支持正在进行中。有关详细信息，请参阅 https://github.com/SeleniumHQ/selenium-ide/issues/141

---
## `assert not text`

断定元素的文本不包含提供的值。如果断言失败，测试将停止。

**参数**

- locator：元素定位器。
- text：精确的字符串匹配。对模式匹配的支持正在进行中。有关详细信息，请参阅 https://github.com/SeleniumHQ/selenium-ide/issues/141

---
## `assert prompt`

断定已弹出 JavaScript 提示弹框。如果断言失败，测试将停止。

---
## `assert selected value`

断定下拉框中包含属性值为 value 的选项。如果断言失败，测试将停止。

**参数**

- select locator：标识下拉菜单的元素定位器。
- text：精确的字符串匹配。对模式匹配的支持正在进行中。有关详细信息，请参阅 https://github.com/SeleniumHQ/selenium-ide/issues/141

---
## `assert selected label`

断定下拉框中包含指定标签的选项。如果断言失败，测试将停止。

**参数**

- select locator：标识下拉菜单的元素定位器。
- text：精确的字符串匹配。对模式匹配的支持正在进行中。有关详细信息，请参阅 https://github.com/SeleniumHQ/selenium-ide/issues/141

---
## `assert text`

断定元素的文本中包含提供的值。如果断言失败，测试将停止。

**参数**

- locator：元素定位器。
- text：精确的字符串匹配。对模式匹配的支持正在进行中。有关详细信息，请参阅 https://github.com/SeleniumHQ/selenium-ide/issues/141

---
## `assert title`

断定当前页面的标题包含提供的文本。如果断言失败，测试将停止。

**参数**

- text：精确的字符串匹配。对模式匹配的支持正在进行中。有关详细信息，请参阅 https://github.com/SeleniumHQ/selenium-ide/issues/141

---
## `assert value`

断定输入字段（或带有值参数的任何其他内容）的（空白修剪）值。对于复选框/单选元素，该值将为 “on” 或 “off”，具体取决于是否选中了元素。如果断言失败，测试将停止。

**参数**

- locator：元素定位器。
- text：精确的字符串匹配。对模式匹配的支持正在进行中。有关详细信息，请参阅 https://github.com/SeleniumHQ/selenium-ide/issues/141

---
## `check`

检查切换按钮（复选框/单选框）。

**参数**

- locator：元素定位器。

---
## `choose cancel on next confirmation`

影响下一个确认提醒。此命令将取消它。如果警报已存在，则使用 “webdriver 选择取消可见确认”代替。

---
## `choose cancel on next prompt`

影响下一个警报提示。此命令将取消它。如果警报已存在，则使用 “webdriver 在可见提示上选择取消”。

---
## `choose ok on next confirmation`

影响下一个确认提醒。该命令将接受它。如果警报已存在，则使用 “webdriver 在可见确认时选择确定”。

---
## `click`

单击目标元素（例如，链接，按钮，复选框或单选按钮）。

**参数**

- locator：元素定位器。

---
## `click at`

单击目标元素（例如，链接，按钮，复选框或单选按钮）。坐标相对于目标元素（例如，0,0 是元素的左上角），并且主要用于检查在它们上传递的效果，例如材料波纹效应。

**参数**

- locator：元素定位器。
- coord string：指定鼠标事件相对于从定位器找到的元素的 `x`，`y` 位置（例如，10, 20）。

---
## `close`

关闭当前窗口。无需关闭初始窗口，IDE 将重新使用它; 关闭它可能会导致测试性能下降。

---
## `debugger`

中断执行并进入调试器

---
## `do`

创建一个至少执行一次前进命令的循环。使用 repeat if 命令终止分支。

---
## `double click`

双击元素（例如，链接，按钮，复选框或单选按钮）。

**参数**

- locator：元素定位器。

---
## `double click at`

双击目标元素（例如，链接，按钮，复选框或单选按钮）。坐标相对于目标元素（例如，0,0 是元素的左上角），并且主要用于检查在它们上传递的效果，例如材料波纹效应。

**参数**

- locator：元素定位器。
- coord string：指定鼠标事件相对于从定位器找到的元素的 `x`，`y` 位置（例如，10, 20）。

---
## `drag and drop to object`

拖动一个元素并将其放在另一个元素上。

**参数**

- locator of object to be dragged：要拖动的元素的定位器。
- locator of drag destination object：元素的定位符，其位置（例如，其中最中心的像素）将是要拖动的对象的定位符被丢弃的点。

---
## `echo`

将指定的消息打印到 Selenese 表中的第三个表格单元格中。对调试很有用。

**参数**

- message：要打印的消息。

---
## `edit content`

设置内容可编辑元素的值，就像您键入内容一样。

**参数**

- locator：元素定位器。
- value：要键入的值。

---
## `else`

if 块的一部分。当不满足 if 和/或 if 条件时，执行此分支中的命令。使用end 命令终止分支。

---
## `else if`

if 块的一部分。如果未满足 if 条件，则执行此分支中的命令。使用 end 命令终止分支。

**参数**

- conditional expression：返回布尔结果的 JavaScript 表达式，用于控制流命令。

---
## `end`

终止 if，while 和 times 的控制流程块。

---
## `execute script`

在当前选定的框架或窗口的上下文中执行JavaScript片段。脚本片段将作为匿名函数的主体执行。要存储返回值，请使用“return”关键字并在值输入字段中提供变量名称。

**参数**

- script：要运行的 JavaScript 代码段。
- variable name：不带括号的变量名。

---
## `execute async script`

在当前选定的框架或窗口的上下文中执行 JavaScript 的异步片段。脚本片段将作为匿名函数的主体执行，并且必须返回 Promise。如果您使用 'return' 关键字，则 Promise 结果将保存在变量中。

**参数**

- script：要运行的 JavaScript 代码段。
- variable name:：不带括号的变量名。

---
## `for each`

创建一个循环，为给定集合中的每个项执行前进命令。

**参数**

- array variable name：包含 JavaScript 数组的变量的名称。
- iterator variable name：在循环控制流命令中迭代集合时使用的变量的名称（例如，对于每个）。

---
## `if`

在测试中创建条件分支。使用 end 命令终止分支。

**参数**

- conditional expression：返回布尔结果的 JavaScript 表达式，用于控制流命令。

---
## `mouse down`

模拟用户按下鼠标左键（尚未释放）。

**参数**

- locator：元素定位器。

---
## `mouse down at`

模拟用户在指定位置按下鼠标左键（尚未释放）。

**参数**

- locator：元素定位器。
- coord string：指定鼠标事件相对于从定位器找到的元素的 `x`，`y` 位置（例如，10, 20）。

---
## `mouse move at`

模拟用户在指定元素上按下鼠标按钮（尚未释放它）。

**参数**

- locator：元素定位器。
- coord string：指定鼠标事件相对于从定位器找到的元素的 `x`，`y` 位置（例如，10, 20）。

---
## `mouse out`

模拟用户将鼠标指针移离指定元素。

**参数**

- locator：元素定位器。

---
## `mouse over`

模拟将鼠标悬停在指定元素上的用户。

**参数**

- locator：元素定位器。

---
## `mouse up`

模拟用户释放鼠标按钮时发生的事件（例如，停止按住按钮）。

**参数**

- locator：元素定位器。

---
## `mouse up at`

模拟用户在指定位置释放鼠标按钮（例如，停止按住按钮）时发生的事件。

**参数**

- locator：元素定位器。
- coord string：指定鼠标事件相对于从定位器找到的元素的 `x`，`y` 位置（例如，10, 20）。

---
## `open`

打开 URL 并等待页面加载后再继续。它接受相对和绝对 URL。

**参数**

- url：要打开的 URL（可以是相对的或绝对的）。

---
## `pause`

等待指定的时间。

**参数**

- wait time：等待的时间量（以毫秒为单位）。

---
## `remove selection`

使用选项定位器从多选元素中的选定选项集中删除选择。

**参数**

- locator：元素定位器。
- option：选项定位器，通常只是一个选项标签（例如 “John Smith”）。

---
## `repeat if`

有条件地终止 'do' 控制流分支。如果提供的条件表达式的结果为 `true`，则启动 `do` 循环。否则它结束循环。

**参数**

- conditional expression：返回布尔结果的 JavaScript 表达式，用于控制流命令。

---
## `run`

从当前项目运行测试用例。

**参数**

- test case：项目中的测试用例名称。

---
## `run script`

在当前测试窗口的主体中创建一个新的 “script” 标记，并将指定的文本添加到命令的主体中。请注意，这些脚本标记中抛出的 JS 异常不由 Selenium 管理，因此如果脚本有可能抛出异常，您应该将脚本包装在 try/catch 块中。

**参数**

- script：要运行的 JavaScript 代码段。

---
## `select`

使用选项定位器从下拉菜单中选择元素。选项定位器提供指定选择元素的不同方式（例如，label =，value =，id =，index =）。如果未提供选项定位器前缀，则将尝试匹配标签。

**参数**

- select locator：标识下拉菜单的元素定位器。
- option：选项定位器，通常只是一个选项标签（例如 “John Smith”）。

---
## `select frame`

选择当前窗口中的帧。您可以多次调用此命令以选择嵌套帧。注意：要选择父框架，请使用 “relative = parent” 作为定位器。要选择顶部框架，请使用 “relative = top”。您还可以通过其基于 0 的索引号选择帧（例如，选择带有 “index = 0” 的第一帧，或选择带有 “index = 2” 的第三帧）。

**参数**

- locator：元素定位器。

---
## `select window`

使用窗口定位器选择弹出窗口。一旦选择了弹出窗口，所有命令都将转到该窗口。窗口定位器使用句柄来选择窗口。

**参数**

- window handle：表示特定页面（选项卡或窗口）的句柄。

---
## `send keys`

模拟指定元素上的击键事件，就像您按键键入值一样。这模拟真实用户键入指定字符串中的每个字符; 它也受到真实用户的限制，例如无法输入不可见或只读元素。这对需要显式键事件的动态UI小部件（如自动完成组合框）很有用。与简单的“type”命令不同，该命令将指定的值直接强制进入页面，此命令不会替换现有内容。

**参数**

- locator：元素定位器。
- key sequence：键入的键序列，可用于发送键击（例如：${KEY_ENTER}）。

---
## `set speed`

设置执行速度（例如，设置每个 Selenium 操作之后的延迟的毫秒长度）。默认情况下，没有这样的延迟，例如，延迟是0毫秒。此设置是全局的，将影响所有测试运行，直到更改为止。

**参数**

- wait time：等待的时间量（以毫秒为单位）。

---
## `set window size`

设置浏览器的窗口大小，包括浏览器的界面。

**参数**

- resolution：使用 Width x Height 指定窗口分辨率。（例如，1280 x 800）。

---
## `store`

将目标字符串保存为变量以便于重复使用。

**参数**

- text：要验证的文本。
- variable name：不带括号的变量名。

---
## `store attribute`

获取元素属性的值。不同浏览器的属性值可能不同（例如，“style” 属性就是这种情况）。

**参数**

- attribute locator：一个元素定位符，后跟一个 @ 符号，然后是属性的名称，例如 “foo @ bar”。
- variable name：不带括号的变量名。

---
## `store json`

未定义

**参数**

- json：JavaScript 对象的字符串表示形式。
- variable name：不带括号的变量名。

---
## `store text`

获取元素的文本并将其存储以供以后使用。这适用于包含文本的任何元素。

**参数**

- locator：元素定位器。
- variable name：不带括号的变量名。

---
## `store title`

获取当前页面的标题。

**参数**

- variable name：不带括号的变量名。

---
## `store value`

获取元素的值并将其存储以供以后使用。这适用于任何输入类型元素。

**参数**

- locator：元素定位器。
- variable name：不带括号的变量名。

---
## `store window handle`

获取当前页面的句柄。

**参数**

- window handle：表示特定页面（选项卡或窗口）的句柄。

---
## `store xpath count`

获取与指定的 xpath 匹配的节点数（例如，“//table” 将给出表的数量）。

**参数**

- xpath：要评估的xpath表达式。
- variable name：不带括号的变量名。

---
## `submit`

提交指定的表格。这对于没有提交按钮的表单特别有用，例如单输入“搜索”表单。

**参数**

- form locator：您要提交的表单的元素定位器。

---
## `times`

创建一个循环，执行多次执行命令。

**参数**

- times：一次控制流循环的次数将执行其块内的命令。
- loop limit：一个可选参数，指定循环控制流命令可以执行的最大次数。这可以防止无限循环。默认值设置为 1000。

---
## `type`

设置输入字段的值，就像输入字段一样。也可以用来设置组合框的值，复选框等。在这些情况下，值应该是所选选项的值，而不是可见文本。仅限 Chrome：如果指定了文件路径，则会将其上传到输入（对于 type = file），注意：不支持XPath定位器。

**参数**

- locator：元素定位器。
- value：要键入的值。

---
## `uncheck`

取消选中切换按钮（复选框/单选框）。

**参数**

- locator：元素定位器。

---
## `verify`

Soft断言变量是期望值。变量的值将转换为字符串以进行比较。即使验证失败，测试仍将继续。

**参数**

- variable name：不带括号的变量名。
- expected value：您期望变量包含的结果（例如，true，false 或其他值）。

---
## `verify checked`

软断言已经检查了切换按钮（复选框/单选框）。即使验证失败，测试仍将继续。

**参数**

- locator：元素定位器。

---
## `verify editable`

Soft断言指定的输入元素是否可编辑（例如，尚未禁用）。即使验证失败，测试仍将继续。

**参数**

- locator：元素定位器。

---
## `verify element present`

声明指定的元素在页面上的某个位置。即使验证失败，测试仍将继续。

**参数**

- locator：元素定位器。

---
## `verify element not present`

软断言指定的元素不在页面的某个位置。即使验证失败，测试仍将继续。

**参数**

- locator：元素定位器。

---
## `verify not checked`

软断言尚未检查切换按钮（复选框/单选框）。即使验证失败，测试仍将继续。

**参数**

- locator：元素定位器。

---
## `verify not editable`

Soft断言指定的输入元素是否不可编辑（例如，尚未禁用）。即使验证失败，测试仍将继续。

**参数**

- locator：元素定位器。

---
## `verify not selected value`

声明未通过其 option 属性在选择菜单中选择了期望的元素。即使验证失败，测试仍将继续。

**参数**

- select locator：标识下拉菜单的元素定位器。

---
## `verify not text`

软断言元素的文本不存在。即使验证失败，测试仍将继续。

**参数**

- locator：元素定位器。
- text：要验证的文本。

---
## `verify selected label`

Soft声明指定 select 元素中所选选项的可见文本。即使验证失败，测试仍将继续。

**参数**

- select locator：标识下拉菜单的元素定位器。
- text：精确的字符串匹配。对模式匹配的支持正在进行中。有关详细信息，请参阅 https://github.com/SeleniumHQ/selenium-ide/issues/141

---
## `verify selected value`

Soft 声明已通过其 option 属性在选择菜单中选择了期望的元素。即使验证失败，测试仍将继续。

**参数**

- select locator：标识下拉菜单的元素定位器。

---
## `verify text`

软断言元素的文本存在。即使验证失败，测试仍将继续。

**参数**

- locator：元素定位器。
- text：要验证的文本。

---
## `verify title`

软断言当前页面的标题包含提供的文本。即使验证失败，测试仍将继续。

**参数**

- text：要验证的文本。

---
## `verify value`

断言输入字段（或带有值参数的任何其他内容）的（空白修剪）值。对于复选框/单选元素，该值将为 “on” 或 “off”，具体取决于是否选中了元素。即使验证失败，测试仍将继续。

**参数**

- locator：元素定位器。
- text：精确的字符串匹配。对模式匹配的支持正在进行中。有关详细信息，请参阅 https://github.com/SeleniumHQ/selenium-ide/issues/141

---
## `wait for element editable`

等待元素可编辑。

**参数**

- locator：元素定位器。
- wait time：等待的时间量（以毫秒为单位）。

---
## `wait for element not editable`

等待元素不可编辑。

**参数**

- locator：元素定位器。
- wait time：等待的时间量（以毫秒为单位）。

---
## `wait for element not present`

等待页面上不存在目标元素。

**参数**

- locator：元素定位器。
- wait time：等待的时间量（以毫秒为单位）。

---
## `wait for element not visible`

等待目标元素在页面上不可见。

**参数**

- locator：元素定位器。
- wait time：等待的时间量（以毫秒为单位）。

---
## `wait for element present`

等待页面上出现目标元素。

**参数**

- locator：元素定位器。
- wait time：等待的时间量（以毫秒为单位）。

---
## `wait for element visible`

等待目标元素在页面上可见。

**参数**

- locator：元素定位器。
- wait time：等待的时间量（以毫秒为单位）。

---
## `webdriver answer on visible prompt`

影响当前显示的警报提示。此命令指示 Selenium 为其提供指定的答案。如果警报尚未出现，则改为使用“在下一个提示时回答”。

**参数**

- answer：给出响应弹出提示的答案。

---
## `webdriver choose cancel on visible confirmation`

影响当前显示的确认警报。此命令指示 Selenium 取消它。如果警报尚未出现，请改为使用“在下次确认时选择取消”。

---
## `webdriver choose cancel on visible prompt`

影响当前显示的警报提示。此命令指示 Selenium 取消它。如果警报尚未出现，请改为使用“在下一个提示中选择取消”。

---
## `webdriver choose ok on visible confirmation`

影响当前显示的确认警报。此命令指示 Selenium 接受它。如果警报尚未出现，则使用“在下一次确认时选择确定”。

---
## `while`

只要提供的条件表达式为 true，就创建一个重复执行前进命令的循环。

**参数**

- conditional expression：返回布尔结果的 JavaScript 表达式，用于控制流命令。
- loop limit：一个可选参数，指定循环控制流命令可以执行的最大次数。这可以防止无限循环。默认值设置为 1000。
