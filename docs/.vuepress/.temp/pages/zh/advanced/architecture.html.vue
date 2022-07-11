<template>
  <div>
    <h1 id="架构" tabindex="-1">
      <a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构
    </h1>
    <h2 id="概览" tabindex="-1">
      <a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览
    </h2>
    <p>
      <img
        src="/images/guide/vuepress-architecture-overview.png"
        alt="vuepress-architecture-overview"
      />
    </p>
    <p>上图展示了 VuePress 的简要架构：</p>
    <ul>
      <li>Node App 会生成临时文件，包括布局、页面、路由等。</li>
      <li>
        Bundler 会将 Client App 和临时文件一起进行打包，就像处理一个普通的 Vue
        SPA 一样。
      </li>
    </ul>
    <p>
      作为开发者，你必须要意识到 VuePress 分为两个主要部分：
      <strong>Node App</strong> 和
      <strong>Client App</strong> ，这一点对于开发插件和主题来说都十分重要。
    </p>
    <ul>
      <li>
        插件或者主题的入口文件会在 Node App 中被加载，因此它们需要使用 CommonJS
        格式。
      </li>
      <li>
        客户端文件会在 Client App 中被加载，也就是会被 Bundler
        处理。比如布局、组件、App Setup 文件、App Enhance 文件等。它们最好使用
        ESM 格式。
      </li>
    </ul>
    <h2 id="核心流程与-hooks" tabindex="-1">
      <a class="header-anchor" href="#核心流程与-hooks" aria-hidden="true">#</a>
      核心流程与 Hooks
    </h2>
    <p>
      <img
        src="/images/guide/vuepress-core-process.png"
        alt="vuepress-core-process"
      />
    </p>
    <p>
      上图展示了 VuePress 的核心流程以及
      <RouterLink to="/zh/reference/plugin-api.html">插件 API</RouterLink> 的
      Hooks ：
    </p>
    <ul>
      <li>
        在 <strong>init</strong> 阶段：
        <ul>
          <li>主题和插件会被加载。这意味着插件需要在初始化之前使用。</li>
          <li>
            由于我们要使用 markdown-it 来解析 Markdown
            文件，因此需要在加载页面文件之前创建 markdown-it 实例：
            <ul>
              <li>
                <RouterLink
                  to="/zh/reference/plugin-api.html#extendsmarkdownoptions"
                  >extendsMarkdownOptions</RouterLink
                >
                Hook 会被调用，用以创建 markdown-it 实例。
              </li>
              <li>
                <RouterLink to="/zh/reference/plugin-api.html#extendsmarkdown"
                  >extendsMarkdown</RouterLink
                >
                Hook 会被调用，用以扩展 markdown-it 实例。
              </li>
            </ul>
          </li>
          <li>
            页面文件会被加载：
            <ul>
              <li>
                <RouterLink
                  to="/zh/reference/plugin-api.html#extendspageoptions"
                  >extendsPageOptions</RouterLink
                >
                Hook 会被调用，用以创建页面。
              </li>
              <li>
                <RouterLink to="/zh/reference/plugin-api.html#extendspage"
                  >extendsPage</RouterLink
                >
                Hook 会被调用，用以扩展页面对象。
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        在 <strong>prepare</strong> 阶段：
        <ul>
          <li>
            临时文件会被生成，因此所有和客户端文件相关的 Hooks 会在此处调用。
          </li>
        </ul>
      </li>
      <li>
        在 <strong>dev / build</strong> 阶段：
        <ul>
          <li>
            Bundler 会被加载：
            <ul>
              <li>
                <RouterLink
                  to="/zh/reference/plugin-api.html#extendsbundleroptions"
                  >extendsBundlerOptions</RouterLink
                >
                Hook 会被调用，用以生成 Bundler 的配置。
              </li>
              <li>
                <RouterLink to="/zh/reference/plugin-api.html#alias"
                  >alias</RouterLink
                >
                Hook 和
                <RouterLink to="/zh/reference/plugin-api.html#define"
                  >define</RouterLink
                >
                Hook 会被用在 Bundler 的配置中，所以它们会在此处调用。
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
