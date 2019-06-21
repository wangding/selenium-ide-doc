# 命令行运行器

您现在可以在任何浏览器上，以及在 Grid 上，同时运行所有 Selenium IDE 测试，而无需编写任何代码。

只需要安装 Selenium IDE 命令行运行器，获取必要的浏览器驱动程序（如果需要在本地运行测试），并从命令提示符启动运行器以及所需的选项。

![命令行运行器，王顶，408542507@qq.com](https://www.seleniumhq.org/selenium-ide/img/docs/runner.png)

## 先决条件

命令行运行器需要以下依赖项才能工作：

- `node`（Node.js 编程语言）版本 `8` 或 `10`
- `npm` （NodeJS 包管理器）通常随 `node` 同时安装
- `selenium-side-runner` （Selenium IDE 命令行运行器）
- 浏览器驱动程序（下面将详细介绍）

```sh
> brew install node
> npm install -g selenium-side-runner
```

**注意：您的系统配置可能与上面示例中使用的不同（例如，MacOS 上的 Homebrew）。如果是这样，请参阅[程序包管理器的 Node 安装文档](https://nodejs.org/en/download/package-manager/)，或直接从 [Node 下载页面](https://nodejs.org/en/download/)下载适用于您的操作系统的 Node 安装程序。**

## 安装浏览器驱动程序

如果要在**本地**运行测试，则每个浏览器都需要一些额外的设置。

Selenium 通过称为浏览器驱动程序的小型二进制应用程序与每个浏览器通信。每个浏览器都有自己的驱动程序，您可以手动下载并添加到系统路径，也可以使用包管理器安装最新版本的浏览器驱动程序（推荐）。

您还需要在计算机上安装浏览器。

### Chrome

对于 Chrome，您需要 [ChromeDriver](http://chromedriver.chromium.org)。

```sh
> npm install -g chromedriver
```

### Edge

对于 Microsoft Edge，您需要在 Windows 上运行，并且还需要 [EdgeDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)。

```sh
> npm install -g edgedriver
```

### Firefox

对于 Firefox，您需要 [geckodriver](https://github.com/mozilla/geckodriver)。

```sh
> npm install -g geckodriver
```

### IE

对于 Internet Explorer，您需要在 Windows 上运行，并且还需要 [IEDriver](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)。

```sh
> npm install -g iedriver
```

IEDriver 需要一些额外的设置才能工作，细节信息请查看[这里](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver#required-configuration)。

### Safari

对于 Safari，您需要 [SafariDriver](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari)。

它随附最新版本的 Safari。只需几个步骤即可在您的计算机上启用它。有关详细信息，请参阅 [SafariDriver 文档的此部分](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari#2957277)。

## 启动 Runner

安装好所有内容后，只需从命令行调用 selenium-side-runner，就可以运行测试。命令行参数之前保存的项目文件（参见[入门](getting-started.md#保存成果)）。

```sh
> selenium-side-runner /path/to/your-project.side
```

**注意：如果您有多个 `.side` 文件，则可以使用通配符（例如，`/path/to/*.side`）。**

当您运行此命令时，它将在多个浏览器窗口中并行启动测试，分布在各个 `n` 进程上（`n` 是您的计算机上可用 CPU 核心数）。

进程数（以及其他内容）是可以在运行时配置的，

**注意：并行执行是在套件级别上自动执行的。如果您希望套件内的测试并行执行，则需要更改设置。有关详细信息，请参阅[套件内的测试并行化](command-line-runner.md#在套件中测试并行化)。**

## 运行时配置

使用运行器，您可以在运行时传递不同的配置参数。

### 在本地不同的浏览器上运行测试

运行时配置的最常见用途是为本地测试执行指定不同的浏览器。

```sh
selenium-side-runner -c "browserName=chrome"
selenium-side-runner -c "browserName='internet explorer'"
selenium-side-runner -c "browserName=edge"
selenium-side-runner -c "browserName=firefox"
selenium-side-runner -c "browserName=safari"
```

**注意：在本地运行测试时，每个浏览器都需要进行一些设置。有关详细信息，请参阅[安装浏览器驱](command-line-runner.md#安装浏览器驱动程序)**

### 在 Selenium Grid 上运行

要在 Grid 上运行测试（例如，您自己的 Grid 或 Sauce Labs 等托管服务提供商），您可以指定它的不同功能。

```sh
selenium-side-runner --server http://localhost:4444/wd/hub -c "browserName='internet explorer' version='11.0' platform='Windows 8.1'"
```

`--server` 指定 Grid 的 URL，以及 `-c` 您希望 Grid 使用的功能。

您可以在[此处](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities)查看可用功能的完整列表。

### 指定并行进程数

在 Grid 上运行时，您可能希望控制正在运行的并行会话数。为此，您可以使用 `-w n` 命令参数（其中 `n` 是您想要的进程数）。

```sh
selenium-side-runner -w 10 --server http://localhost:4444/wd/hub
```

运行器将自动将工作器数设置为计算机上可用的相同 CPU 核心数。在大多数情况下，这是最好的选择。

### Chrome 专用功能

如果您在计算机上的非标准位置安装了 Chrome，则可以指定路径，以便 ChromeDriver 知道要查看的位置。

```sh
selenium-side-runner -c "chromeOptions.binary='/path/to/non-standard/Chrome/install'"
```

借助 Chrome 特定功能，您还可以无头地运行测试。

```sh
selenium-side-runner -c "chromeOptions.args=[disable-infobars, headless]"
```

## 触手可及的框架

还有其他细节与 Runner 一起开箱即用。您希望在传统的测试自动化框架中可以获得的东西。

### 更改基本 URL

通过指定不同的基本 URL，您可以轻松地将测试指向不同的环境（例如，本地开发，测试，升级，生产）。

```sh
selenium-side-runner --base-url https://localhost
```

### 过滤测试

您还可以选择使用 `--filter target` 命令标志（其中 `target` 是正则表达式值）运行测试的目标子集。包含给定搜索条件的测试名称将是唯一运行的名称。

```sh
selenium-side-runner --filter smoke
```

### 将测试结果输出到文件

如果需要将测试结果导出到文件（例如，作为 CI 过程的一部分运行时），可以组合使用 `--output-directory` 和 `--output-format` 命令行参数。

`--output-directory` 定义放置测试结果文件的位置。它可以采用绝对路径或相对路径。

`--output-format` 定义用于测试结果文件的格式。它可以是 `jest`（例如，JSON）或 `junit`（例如，XML）。默认格式是 `jest`（例如，如果您未指定类型）。

```sh
selenium-side-runner --output-directory=results
# Outputs results in `jest` frormat in `./results/projectName.json'
```
```sh
selenium-side-runner --output-directory=results --output-format=jest
# Outputs results in `jest` frormat in `./results/projectName.json'
```
```sh
selenium-side-runner --output-directory=results --output-format=junit
# Outputs results in `junit` frormat in `./results/projectName.xml'
```

### 指定默认配置

您可以将运行时参数存储在配置文件中，而不是记住所需的所有命令行参数（可能变得难以操作）。

您可以使用两种配置文件。

#### 选项 1

在您将运行测试的目录中创建一个 `.side.yml` 文件。Runner 将自动使用它。以下是文件内容的示例。

```yaml
capabilities:
  browserName: "firefox"
baseUrl: "https://www.seleniumhq.org"
server: "http://localhost:4444/wd/hub"
```

如果要忽略该文件并使用命令行参数，--no-sideyml 请在运行时与其他命令一起使用。

#### 选项 2

除了使用 `.side.yml` 文件之外，您还可以在 YAML 文件中指定运行时参数，其中包含您选择的名称和位置，然后在运行测试时指定其位置。

```sh
selenium-side-runner --config-file "/path/to/your/config.yaml"
```

**注意：使用 `--config-file` 参数时，`.side.yml` 将被忽略。**

## Selenium IDE 配置

### 在套件中测试并行化

默认情况下，运行器并行执行套件，但套件内的测试按顺序执行。

要并行运行给定套件中的测试，您需要在 Selenium IDE 中更新该套件的设置。

1. 切换到 `Selenium IDE` 中 `Test Suites` 的视图
2. 单击要配置的套件名称旁边的下拉菜单，然后单击 `Settings`
3. 单击复选框 `Run in parallel`
4. 点击 `Submit`
5. 保存您的 Selenium IDE 项目文件

要以这种方式配置多个套件，请在每个套件中重复步骤 1-4。一旦完成，请务必保存项目文件。

## 高级选项

### 额外的参数

Selenium IDE 的插件可以指定自己独特的运行时参数。你可以通过 `--params` 参数使用它们。

此选项采用各种选项的字符串（类似于您指定功能的方式）。

#### 基本用法

您可以指定参数的名称及其值。最基本的方法是指定一个字符串值。

```sh
selenium-side-runner --params "a='example-value'"
```

#### 嵌套参数

参数也可以使用点表示法嵌套。

```sh
selenium-side-runner --params "a.b='another example-value'"
```

#### 数组值

除了字符串之外，您还可以指定字母/数字值数组。

```sh
selenium-side-runner --params "a.b.c=[1,2,3]"
```

#### 多个参数

`--params` 只能调用一次，但您可以通过空格符分隔指定多个参数。

```sh
selenium-side-runner --params "a='example-value' a.b='another example-value' a.b.c=[1,2,3]"
```

### 使用代理服务器

您可以使用 runner 中的以下选项将代理功能传递给浏览器。

#### 直接代理

此选项将 WebDriver 配置为绕过所有浏览器代理。

##### 从命令行：

```sh
> selenium-side-runner --proxy-type=direct
```

##### 在 `.side.yaml`：

```yaml
proxyType: direct
```

#### 手动代理

手动配置浏览器代理。

###### 从命令行：

```sh
selenium-side-runner --proxy-type=manual --proxy-options="http=localhost:434 bypass=[http://localhost:434, http://localhost:8080]"
```

##### 在 `.side.yaml`：

```yaml
proxyType: manual
proxyOptions:
  http: http://localhost:434
  https: http://localhost:434
  ftp: http://localhost:434
  bypass:
    - http://localhost:8080
    - http://host:434
    - http://somethingelse:32
```

#### PAC代理

配置 WebDriver 以使用给定 URL 处的 PAC 文件设置浏览器代理。

##### 从命令行：

```sh
selenium-side-runner --proxy-type=pac --proxy-options="http://localhost/pac"
```

##### 在 `.side.yaml`：

```yaml
proxyType: pac
proxyOptions: http://localhost/pac
```

#### SOCKS 代理

为 SOCKS 代理创建代理配置。

##### 从命令行：

```sh
selenium-side-runner --proxy-type=socks --proxy-options="socksProxy=localhost:434 socksVersion=5"
```

##### 在 `.side.yaml`：

```sh
proxyType: socks
proxyOptions:
  socksProxy: localhost:434
  socksVersion: 5
```

#### 系统代理

配置 WebDriver 以使用当前系统的代理。

##### 从命令行：

```sh
selenium-side-runner --proxy-type=system
```

##### 在 `.side.yaml`：

```yaml
proxyType: system
```

### 代码导出

如果您正在尝试学习如何将记录的测试转换为 WebDriver 代码，或者您希望将记录的测试集成到现有的自定义测试框架中，那么您需要的是代码导出，现在可用于所选语言。你可以在这里了解更多！
