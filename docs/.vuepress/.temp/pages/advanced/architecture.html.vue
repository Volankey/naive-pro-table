<template>
  <div>
    <h1 id="architecture" tabindex="-1">
      <a class="header-anchor" href="#architecture" aria-hidden="true">#</a>
      Architecture
    </h1>
    <h2 id="overview" tabindex="-1">
      <a class="header-anchor" href="#overview" aria-hidden="true">#</a>
      Overview
    </h2>
    <p>
      <img
        src="/images/guide/vuepress-architecture-overview.png"
        alt="vuepress-architecture-overview"
      />
    </p>
    <p>The above figure shows a brief overview of the VuePress architecture:</p>
    <ul>
      <li>
        Node App will generate temp files, including the layouts, pages, routes,
        etc.
      </li>
      <li>
        Bundler will handle Client App together with the temp files, just like a
        common Vue SPA.
      </li>
    </ul>
    <p>
      As a developer, you must be aware of that VuePress has two main parts:
      <strong>Node App</strong> and <strong>Client App</strong>, which is
      important when developing plugins and themes:
    </p>
    <ul>
      <li>
        The entry file of a plugin or a theme will be loaded in Node App. So you
        need to use CommonJS format for them.
      </li>
      <li>
        Client files will be loaded in Client App, which will be handled by
        bundler. For example, layouts, components, app setup files, app enhance
        files, etc. You'd better use ESM format for them.
      </li>
    </ul>
    <h2 id="core-process-and-hooks" tabindex="-1">
      <a class="header-anchor" href="#core-process-and-hooks" aria-hidden="true"
        >#</a
      >
      Core Process and Hooks
    </h2>
    <p>
      <img
        src="/images/guide/vuepress-core-process.png"
        alt="vuepress-core-process"
      />
    </p>
    <p>
      The above figure shows the core process of VuePress Node App and the hooks
      of <RouterLink to="/reference/plugin-api.html">Plugin API</RouterLink>:
    </p>
    <ul>
      <li>
        In the <strong>init</strong> stage:
        <ul>
          <li>
            Theme and plugins will be loaded. That means all the plugins should
            be used before initialization.
          </li>
          <li>
            As we are using markdown-it to parse the markdown file, so we need
            to create markdown-it instance before loading pages:
            <ul>
              <li>
                <RouterLink
                  to="/reference/plugin-api.html#extendsmarkdownoptions"
                  >extendsMarkdownOptions</RouterLink
                >
                hook will be processed to create markdown-it instance.
              </li>
              <li>
                <RouterLink to="/reference/plugin-api.html#extendsmarkdown"
                  >extendsMarkdown</RouterLink
                >
                hook will be processed extends markdown-it instance.
              </li>
            </ul>
          </li>
          <li>
            Page files will be loaded:
            <ul>
              <li>
                <RouterLink to="/reference/plugin-api.html#extendspageoptions"
                  >extendsPageOptions</RouterLink
                >
                hook will be processed to create pages.
              </li>
              <li>
                <RouterLink to="/reference/plugin-api.html#extendspage"
                  >extendsPage</RouterLink
                >
                hook will be processed to extends page object.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        In the <strong>prepare</strong> stage:
        <ul>
          <li>
            Temp files will be generated, so all hooks related to client files
            will be processed here.
          </li>
        </ul>
      </li>
      <li>
        In the <strong>dev / build</strong> stage:
        <ul>
          <li>
            Bundler will be resolved:
            <ul>
              <li>
                <RouterLink
                  to="/reference/plugin-api.html#extendsbundleroptions"
                  >extendsBundlerOptions</RouterLink
                >
                hook will be processed to create bundler configuration.
              </li>
              <li>
                <RouterLink to="/reference/plugin-api.html#alias"
                  >alias</RouterLink
                >
                hook and
                <RouterLink to="/reference/plugin-api.html#define"
                  >define</RouterLink
                >
                hook would be used in bundler configuration, so they will be
                processed here.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
