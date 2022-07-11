<template>
  <div>
    <h1 id="贡献指南" tabindex="-1">
      <a class="header-anchor" href="#贡献指南" aria-hidden="true">#</a>
      贡献指南
    </h1>
    <h2 id="概览" tabindex="-1">
      <a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览
    </h2>
    <p>
      项目仓库借助于
      <a
        href="https://pnpm.io/zh/workspaces"
        target="_blank"
        rel="noopener noreferrer"
        >pnpm 工作空间<ExternalLinkIcon
      /></a>
      来实现
      <a
        href="https://en.wikipedia.org/wiki/Monorepo"
        target="_blank"
        rel="noopener noreferrer"
        >Monorepo<ExternalLinkIcon
      /></a>
      ，在 <code v-pre>packages</code> 目录下存放了多个互相关联的独立 Package 。
    </p>
    <ul>
      <li>
        <p>
          <code v-pre>@vuepress/core</code>: Core 模块。提供 Node API 来创建
          VuePress App ，包括页面逻辑、插件系统、数据准备等功能。
        </p>
      </li>
      <li>
        <p>
          <code v-pre>@vuepress/client</code>: Client
          模块。包含客户端页面入口，并提供了客户端开发时可以用到的类型和工具函数。
        </p>
      </li>
      <li>
        <p>
          <code v-pre>@vuepress/bundler-vite</code>: 基于 Vite 的 Bundler
          模块。使用 Vite 对 VuePress App 执行 <code v-pre>dev</code> 和
          <code v-pre>build</code> 操作。
        </p>
      </li>
      <li>
        <p>
          <code v-pre>@vuepress/bundler-webpack</code>: 基于 Webpack 的 Bundler
          模块。使用 Webpack 对 VuePress App 执行 <code v-pre>dev</code> 和
          <code v-pre>build</code> 操作。
        </p>
      </li>
      <li>
        <p>
          <code v-pre>@vuepress/cli</code>: 命令行接口 (CLI)
          模块。包含解析用户配置文件、调用
          <code v-pre>@vuepress/core</code> 创建 VuePress App
          、执行对应命令等功能。
        </p>
      </li>
      <li>
        <p><code v-pre>@vuepress/theme-default</code>: 默认主题。</p>
      </li>
      <li>
        <p><code v-pre>@vuepress/plugin-${name}</code>: 官方插件。</p>
      </li>
      <li>
        <p>
          <code v-pre>@vuepress/shared</code>: 既可以在 Node
          端使用、也可以在客户端使用的工具函数模块。
        </p>
      </li>
      <li>
        <p>
          <code v-pre>@vuepress/utils</code>: 仅可以在 Node
          端使用的工具函数模块。
        </p>
      </li>
      <li>
        <p>
          <code v-pre>vuepress</code>: 是
          <code v-pre>vuepress-vite</code> 的封装。
        </p>
      </li>
      <li>
        <p>
          <code v-pre>vuepress-vite</code>: 是
          <code v-pre>@vuepress/cli</code> +
          <code v-pre>@vuepress/bundler-vite</code> +
          <code v-pre>@vuepress/theme-default</code> 的封装。如果用户想使用
          默认主题 + Vite ，仅安装这个 Package 就可以了。
        </p>
      </li>
      <li>
        <p>
          <code v-pre>vuepress-webpack</code>: 是
          <code v-pre>@vuepress/cli</code> +
          <code v-pre>@vuepress/bundler-webpack</code> +
          <code v-pre>@vuepress/theme-default</code> 的封装。如果用户想使用
          默认主题 + Webpack ，仅安装这个 Package 就可以了。
        </p>
      </li>
    </ul>
    <h2 id="开发配置" tabindex="-1">
      <a class="header-anchor" href="#开发配置" aria-hidden="true">#</a>
      开发配置
    </h2>
    <p>开发要求：</p>
    <ul>
      <li>
        <a href="http://nodejs.org" target="_blank" rel="noopener noreferrer"
          >Node.js<ExternalLinkIcon
        /></a>
        <strong>version 14+</strong>
      </li>
      <li>
        <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer"
          >pnpm<ExternalLinkIcon
        /></a>
        <strong>version 7+</strong>
      </li>
    </ul>
    <p>克隆代码仓库，并安装依赖：</p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p>构建源代码：</p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">pnpm</span> build
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p>开始开发项目文档网站：</p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre
        v-pre
        class="language-bash"
      ><code><span class="token function">pnpm</span> docs:dev
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <p>本项目开发使用的一些主要工具：</p>
    <ul>
      <li>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          >TypeScript<ExternalLinkIcon
        /></a>
        作为开发语言
      </li>
      <li>
        <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer"
          >Jest<ExternalLinkIcon
        /></a>
        用于单元测试
      </li>
      <li>
        <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer"
          >ESLint<ExternalLinkIcon
        /></a>
        +
        <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer"
          >Prettier<ExternalLinkIcon
        /></a>
        用于代码检查和格式化
      </li>
    </ul>
    <h2 id="开发脚本" tabindex="-1">
      <a class="header-anchor" href="#开发脚本" aria-hidden="true">#</a>
      开发脚本
    </h2>
    <h3 id="pnpm-build" tabindex="-1">
      <a class="header-anchor" href="#pnpm-build" aria-hidden="true">#</a>
      <code v-pre>pnpm build</code>
    </h3>
    <p>
      <code v-pre>build</code> 命令会使用 <code v-pre>tsc</code> 和
      <code v-pre>tsup</code> 将 TypeScript 源文件编译为 JavaScript 文件。
    </p>
    <p>
      此外，它还会将必要的资源文件从源文件目录复制到输出目录。这是因为一些资源文件不会被
      <code v-pre>tsc</code> 或
      <code v-pre>tsup</code>
      处理，但它们仍需要被放置到输出目录，并保持它们的项目对路径不变。
    </p>
    <p>
      你在克隆代码仓库后，可能需要先执行该命令来确保项目代码可以顺利运行，因为编译后的输出目录被
      <code v-pre>.gitignore</code> 排除在仓库以外了。
    </p>
    <h3 id="pnpm-clean" tabindex="-1">
      <a class="header-anchor" href="#pnpm-clean" aria-hidden="true">#</a>
      <code v-pre>pnpm clean</code>
    </h3>
    <p>
      <code v-pre>clean</code> 命令会执行所有子 Package 中的
      <code v-pre>clean</code>
      命令，清除所有的输出文件目录和缓存文件。换言之，它将移除所有通过
      <code v-pre>build</code> 和 <code v-pre>copy</code> 命令生成的文件。
    </p>
    <p>当你想要从最初状态重新构建源代码时，你可以执行该命令。</p>
    <h3 id="pnpm-dev" tabindex="-1">
      <a class="header-anchor" href="#pnpm-dev" aria-hidden="true">#</a>
      <code v-pre>pnpm dev:*</code>
    </h3>
    <p>
      <code v-pre>dev:</code>
      前缀表明，这些命令是针对开发使用的，将会以监听模式运行对应的脚本。
    </p>
    <h3 id="pnpm-docs" tabindex="-1">
      <a class="header-anchor" href="#pnpm-docs" aria-hidden="true">#</a>
      <code v-pre>pnpm docs:*</code>
    </h3>
    <h4 id="pnpm-docs-build-pnpm-docs-dev-pnpm-docs-clean" tabindex="-1">
      <a
        class="header-anchor"
        href="#pnpm-docs-build-pnpm-docs-dev-pnpm-docs-clean"
        aria-hidden="true"
        >#</a
      >
      <code v-pre>pnpm docs:build</code>, <code v-pre>pnpm docs:dev</code>,
      <code v-pre>pnpm docs:clean</code>
    </h4>
    <p>
      <code v-pre>docs:</code> 前缀表明，这些命令是针对文档 (documentation)
      进行操作的，即 <code v-pre>docs</code> 目录。
    </p>
    <p>VuePress 使用它自己来构建自己的文档网站。</p>
    <p>
      你需要先执行 <code v-pre>pnpm build</code> 来构建 VuePress
      源代码，然后再运行这些
      <code v-pre>docs:</code> 开头的命令来开发或构建文档。
    </p>
    <h4 id="pnpm-docs-serve" tabindex="-1">
      <a class="header-anchor" href="#pnpm-docs-serve" aria-hidden="true">#</a>
      <code v-pre>pnpm docs:serve</code>
    </h4>
    <p>在本地启动文档网站服务器。</p>
    <p>
      你需要先运行
      <code v-pre>pnpm docs:build</code>
      来生成文档网站的输出文件，然后再通过该命令来启动文档网站。
    </p>
    <h3 id="pnpm-lint" tabindex="-1">
      <a class="header-anchor" href="#pnpm-lint" aria-hidden="true">#</a>
      <code v-pre>pnpm lint</code>
    </h3>
    <p><code v-pre>lint</code> 命令使用 ESLint 来检查所有源文件。</p>
    <h3 id="pnpm-test" tabindex="-1">
      <a class="header-anchor" href="#pnpm-test" aria-hidden="true">#</a>
      <code v-pre>pnpm test</code>
    </h3>
    <p><code v-pre>test</code> 命令使用 Jest 来运行单元测试。</p>
    <h2 id="文档" tabindex="-1">
      <a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档
    </h2>
    <p>VuePress 的文档是由 VuePress 自己驱动的，是由该仓库中的源码构建而来。</p>
    <p>
      所有的 Markdown 源文件都放置在
      <code v-pre>docs</code> 目录下。我们维护了两种翻译：
    </p>
    <ul>
      <li>英语 (en-US) 在 <code v-pre>/</code> 路径下</li>
      <li>中文 (zh-CN) 在 <code v-pre>/zh/</code> 路径下</li>
    </ul>
    <p>我们部署了两套站点：</p>
    <ul>
      <li>
        在
        <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
          >Netlify<ExternalLinkIcon
        /></a>
        部署的 Release
        版本。该站点是从最新发布的版本中构建而来，因此用户不会看到未发布的改动。域名为
        <a
          href="https://v2.vuepress.vuejs.org"
          target="_blank"
          rel="noopener noreferrer"
          >https://v2.vuepress.vuejs.org<ExternalLinkIcon /></a
        >。
      </li>
      <li>
        在
        <a
          href="https://pages.github.com"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub Pages<ExternalLinkIcon
        /></a>
        部署的 Developer
        版本。该站点是从最新的提交中构建而来，因此开发者可以预览最新的改动。域名为
        <a
          href="https://vuepress.github.io"
          target="_blank"
          rel="noopener noreferrer"
          >https://vuepress.github.io<ExternalLinkIcon /></a
        >。
      </li>
    </ul>
  </div>
</template>
