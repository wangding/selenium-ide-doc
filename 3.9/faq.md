# 常见问题

## 我如何记录悬停？

鼠标悬停（aka 悬停）操作很难自动捕获，作为记录周期的一部分。

要在测试中添加悬停，需要进行一些手动干预。有两种不同的方法可以做到。

*选项 1：录制时添加*

1. 录制时，右键单击要悬停在其上的元素
2. 从出现的菜单中单击 `Selenium IDE` 然后再单击 `Mouse Over`
3. 确认 `Mouse Over` 测试步骤位于测试中的正确位置（如果需要，将其拖放到其他位置）

*选项 2：在测试编辑器中手动添加*

1. 右键单击 IDE 中的测试步骤
2. 选择 `Insert new command`
3. 输入 `mouse over` 到 `Command` 输入字段
4. 在 `Target` 输入字段中键入要悬停的定位器（或单击 `Select target in page` 并选择要悬停在其上的元素）

## 为什么键入日期输入字段的数字不正确显示？

通过 Selenium IDE 的命令行运行程序运行测试时，会出现此问题。

要绕过它，你需要启用 w3c 模式，你可以通过传递 `-c "chromeOptions.w3c=true"` 作为启动跑步者的一部分来做。

启用 w3c 模式可能会影响 Selenium Actions 的性能（如果您的测试最终使用它们），那么只有在日期输入字段出现问题时才使用此模式。

## 在继续之前，如何使 IDE 等待某个条件成立？

在某些情况下，IDE 中的内置等待策略是不够的。发生这种情况时，您可以使用其中一个可用的显式等待命令。

- `wait for element editable`
- `wait for element present`
- `wait for element visible`
- `wait for element not editable`
- `wait for element not present`
- `wait for element not visible`

## 如何在文本验证中使用正则表达式？

这是我们最终添加的功能（有关[详细信息](https://github.com/SeleniumHQ/selenium-ide/issues/141)，请参阅问题 141）。作为一种变通方法，您可以使用 XPath 定位 `starts-with` 和 `contains` 关键字。

| 命令 | 目标 | 值 |
|----  | ---- | --- |
| assertElementPresent | `//a@[starts-with(.,'you are the') and contains(., 'User to login today')]` |   |

## 如何滚动？

在 Selenium IDE 中没有用于滚动的明确命令，因为在 Selenium 中没有实现。相反，您可以使用 `scrollTo` JavaScript 中的命令通过指定 `x` 和 `y` 滚动到的坐标来完成此操作。

| 命令 | 目标 | 值 |
|----  | ---- | --- |
| executeScript | window.scrollTo（0, 1000）|  |

## 保存文件

### 为什么我保存我的 SIDE 项目的位置不被记住？

### 为什么每次我想要保存项目时都需要单步执行“另存为”流程？

### 为什么我需要覆盖以前保存的文件？

所有这些问题都是同一问题的一部分 - 作为浏览器扩展，Selenium IDE 无法访问文件系统。提供“保存”功能的唯一方法是下载文件。当 IDE 移动到本机应用程序时，将解决此问题。这将为 IDE 首要文件系统提供访问权限，使其能够提供优质的“保存”体验。

如果您想保持更新，可以按照问题 363 进行操作。

## 如何在严格的代理/防火墙后面安装 IDE？

在某些情况下，您可能没有完整的公共 Internet 访问权限（例如“公司代理或防火墙”后面）。在这些环境中，您需要获取构建的 Selenium IDE ZIP 文件的副本，以便记录自动化测试脚本。这可以在 GitHub 的 “Releases” 部分找到：

https://github.com/SeleniumHQ/selenium-ide/releases

并非所有版本都包含 “selenium-ide.zip”，因为有些版本只是“源代码”版本。查找具有此 zip 文件的最新版本。这意味着它是提交给 Chrome 和 Firefox 商店的最新版本。

### 官方签名版本

从项目发布页面下载 zip 文件为您提供了一个未签名的 ZIP 文件。或者，您可以获得正式签名的安装程序，这些安装程序可以更好地使用“安全环境”：

- [Firefox 附加组件](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/)
- [下载所需 “.xpi” 安装程序的说明](https://superuser.com/questions/646856/how-to-save-firefox-addons-for-offline-installation)

**注意：如果您已经安装了插件（例如，在笔记本电脑上试图获取安装程序的副本），您只能在尝试访问它们时看到 REMOVE 按钮。因此，删除它们一次，让安装程序移动到另一台未连接的计算机，然后根据需要在主设备的浏览器中重新安装。**

- [Chrome 商店](https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd)
- [下载所需“.crx”安装程序的说明](https://stackoverflow.com/questions/25480912/how-to-download-a-chrome-extension-without-installing-it)

**注意：您无法直接从 Chrome 商店获取 “.crx” 文件。相反，您需要在本地安装一次，然后转到计算机上的安装目录以检索它。**

## 连接插件后为什么没有出现保存对话框？

由于当前的 [Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=922373)，如果您不回复 Selenium IDE 发出的消息，则不会进行进一步处理。要解决此问题，请务必 `emit` 使用实体监听操作 `project` 并回复 `undefined`：

```javascript
chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  if (message.action === "emit" && message.entity === "project") {
    sendResponse(undefined);
  }
});
```
