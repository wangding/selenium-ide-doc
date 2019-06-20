# AndWait 命令

命令（如常见的 click )与 AndWait 后缀命令的区别是，普通命令会执行动作，并以最快的速度继续执行下面的命令，而 AndWait 后缀命令（如 clickAndWait ）告诉 Selenium 在动作完成后等待页面加载完成。

AndWait 后缀命令经常用在浏览器导航到另一个页面或重新加载当前页面时。 

请注意，如果您在某个动作上使用一个 AndWait 命令，他不触发导航或者刷新，您的测试将会失败。这是因为 Selenium 达到了 AndWait 超时上限，却没有看到任何导航或刷新，导致 Selenium 抛出超时异常。
