# 代码导出

## 入门

您可以通过右键单击测试或套件，选择 `Export`，选择目标语言并单击 `Export`，将测试或测试套件导出成 `WebDriver` 代码。

![export1，王顶，408542507@qq.com](https://www.seleniumhq.org/selenium-ide/img/docs/code-export/right-click.png)

![export2，王顶，408542507@qq.com](https://www.seleniumhq.org/selenium-ide/img/docs/code-export/menu.png)

这个操作会将包含目标语言导出代码的文件保存到浏览器的下载目录中。

### 来源追踪代码注释

导出时，有一个可选项来启用原始跟踪代码注释。

这将在导出的文件中放置内联代码注释，其中包含有关生成它的 Selenium IDE 中的测试步骤的详细信息。

## 支持的导出

目前，支持导出到 Java，确切的是 Java for JUnit。

我们打算在 Selenium 的所有官方编程语言（例如，Java，JavaScript，C#，Python 和 Ruby）中的每种语言中至少支持一个测试框架。

欢迎提供帮助，以帮助为给定语言添加新语言和测试框架。有关如何操作的详细信息，请参见[如何贡献](code-export.md#如何贡献)。

### Java JUnit

Java JUnit 的导出代码是为了与 Java 8，JUnit 4.12 和最新版本的 Selenium 3 一起使用而构建的。

您应该能够获取导出的 Java 文件并将其放入标准 Maven 目录结构中，并使用 pom.xml 列出这些依赖项的文件并运行它。

下面是一个 `pom.xml` 示例，帮助您上手。

```xml
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-ide-java-code-export</artifactId>
  <version>1</version>
  <url>http://maven.apache.org</url>
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.seleniumhq.selenium</groupId>
      <artifactId>selenium-java</artifactId>
      <version>3.141.59</version>
    </dependency>
  </dependencies>
</project>
```

## 如何贡献

代码导出以模块化方式构建，以帮助实现贡献。

每种语言和测试框架都有自己的包，包含要导出的代码。每个代码片段映射到Selenium IDE 中的命令，并且每个这些包都依赖于底层的“核心”包，它可以完成所有繁重的任务。

下面是基于一个已经存在的语言，建立一个新语言或新测试框架的步骤。

### 创建一个新包

首先，复制现有的语言包（例如：`packages/code-export-java-junit`）并将其重命名（例如，文件夹和文件中的详细信息 `package.json`）到您想要贡献的目标语言和框架（例如：`packages/code-export-ruby-rspec`，等）。

接下来，在 `package.json` 中添加新的依赖软件包。

最后，在项目的根目录运行 `yarn` 命令。

### 更新定位器和命令

代码导出的机制是将特定语言的字符串转换为输出代码。其中最突出的是命令和定位器策略（例如，“by” 查找的语法）。

对于给定的语言，每个语句都有一个文件以及附带的测试文件。

你可以看到一个例子 `packages/code-export-java-junit`。

- [命令](https://github.com/SeleniumHQ/selenium-ide/blob/v3/packages/code-export-java-junit/src/command.js)
- [命令测试](https://github.com/SeleniumHQ/selenium-ide/blob/v3/packages/code-export-java-junit/__test__/src/command.spec.js)
- [定位策略](https://github.com/SeleniumHQ/selenium-ide/blob/v3/packages/code-export-java-junit/src/location.js)
- [定位策略测试](https://github.com/SeleniumHQ/selenium-ide/blob/v3/packages/code-export-java-junit/__test__/src/location.spec.js)

声明新命令时，可以将其输出为指定的字符串，也可以输出为指定[缩进级别](https://github.com/SeleniumHQ/selenium-ide/blob/v3/packages/code-export-java-junit/src/command.js#L242-L249)的对象。

内置于代码导出的是一个用于控制输出代码缩进的修饰符。如果您希望命令的输出是详细的并且是显式的，则此结构很有用。或者，如果该命令更改后面的命令的缩进级别。

### 创建钩子

钩子构成了要导出的代码结构的大部分（例如，套件，测试以及设置，拆卸等所有内容）。它们也是使插件能够将代码导出到测试或套件的不同部分的原因。

有 `9` 种不同的钩子：

- afterAll （所有测试完成后）
- afterEach（每次测试完成后 - 在 afterAll 之前）
- beforeAll （在所有测试运行之前）
- beforeEach（在每次测试之前 - 在 beforeAll 之后）
- command （为插件添加的新命令发出代码）
- dependency （添加附加语言依赖）
- inEachBegin （在每个测试中，在它的开头）
- inEachEnd （在每次测试中，在最后）
- variable （声明要在整个套件中使用的新变量）

你可以在 `packages/code-export-java-junit` 这里看到一个钩子实例：Hooks

### 更新特定于语言的属性

在每种语言中，您需要指定一些低级细节。像缩进的空格，如何声明方法，测试，套件等等。

您可以在 `packages/code-export-java-junit` 此处查看此实现的示例：特定于语言的选项

### 将其添加到混合物中

一旦你完成了所有其他工作，就可以将其连接起来以便在UI中使用。

这是可能的 `packages/code-export/src/index.js`。

您需要添加语言 `availableLanguages`。

### 测试和调整

最佳的端到端测试的代码导出是导出一系列测试并验证它们是否按预期运行。

从开发构建中，您可以访问种子测试。这是验证所有标准库命令是否适用于您的新语言的良好起点。

测试，修复以及再测试，直到您对最终结果有信心。

### 提交 PR

你已经完成了艰难的任务。现在提交 PR 只是一个简单的问题。请对 `v3` 分支 PR。
