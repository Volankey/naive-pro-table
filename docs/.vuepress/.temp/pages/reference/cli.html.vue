<template>
  <div>
    <h1 id="command-line-interface" tabindex="-1">
      <a class="header-anchor" href="#command-line-interface" aria-hidden="true"
        >#</a
      >
      Command Line Interface
    </h1>
    <NpmBadge package="@vuepress/cli" />
    <p>
      VuePress CLI is provided by
      <a
        href="https://www.npmjs.com/package/@vuepress/cli"
        target="_blank"
        rel="noopener noreferrer"
        >@vuepress/cli<ExternalLinkIcon
      /></a>
      package. It is included by the
      <a
        href="https://www.npmjs.com/package/vuepress"
        target="_blank"
        rel="noopener noreferrer"
        >vuepress<ExternalLinkIcon
      /></a>
      package, and you can also install it separately.
    </p>
    <p>
      Run <code v-pre>vuepress --help</code> to get following help messages:
    </p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre v-pre class="language-bash"><code>Usage:
  $ vuepress <span class="token operator">&lt;</span>command<span class="token operator">></span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

Commands:
  dev <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>    Start development server
  build <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>  Build to static site
  info               Display environment information

For <span class="token function">more</span> info, run any <span class="token builtin class-name">command</span> with the <span class="token variable"><span class="token variable">`</span>--help<span class="token variable">`</span></span> flag:
  $ vuepress dev --help
  $ vuepress build --help
  $ vuepress info --help

Options:
  -v, --version  Display version number 
  -h, --help     Display this message 
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        VuePress is using
        <a
          href="https://www.npmjs.com/package/debug"
          target="_blank"
          rel="noopener noreferrer"
          >debug<ExternalLinkIcon
        /></a>
        module.
      </p>
      <p>
        Set environment variable <code v-pre>DEBUG=vuepress*</code> to enable
        debug logs.
      </p>
    </div>
    <h2 id="dev" tabindex="-1">
      <a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev
    </h2>
    <p>Start a development server to develop your VuePress site locally.</p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre v-pre class="language-bash"><code>Usage:
  $ vuepress dev <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>

Options:
  -c, --config <span class="token operator">&lt;</span>config<span class="token operator">></span>  Set path to config <span class="token function">file</span> 
  -p, --port <span class="token operator">&lt;</span>port<span class="token operator">></span>      Use specified port <span class="token punctuation">(</span>default: <span class="token number">8080</span><span class="token punctuation">)</span> 
  -t, --temp <span class="token operator">&lt;</span>temp<span class="token operator">></span>      Set the directory of the temporary files 
  --host <span class="token operator">&lt;</span>host<span class="token operator">></span>          Use specified <span class="token function">host</span> <span class="token punctuation">(</span>default: <span class="token number">0.0</span>.0.0<span class="token punctuation">)</span> 
  --cache <span class="token operator">&lt;</span>cache<span class="token operator">></span>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before dev 
  --clean-cache          Clean the cache files before dev 
  --open                 Open browser when ready 
  --debug                Enable debug mode 
  --no-watch             Disable watching page and config files <span class="token punctuation">(</span>default: <span class="token boolean">true</span><span class="token punctuation">)</span>
  -v, --version          Display version number 
  -h, --help             Display this message
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Options set by CLI will override those options with the same name in
        your config file.
      </p>
    </div>
    <h2 id="build" tabindex="-1">
      <a class="header-anchor" href="#build" aria-hidden="true">#</a> build
    </h2>
    <p>
      Build your VuePress site to static files, which are ready for
      <RouterLink to="/guide/deployment.html">deployment</RouterLink>.
    </p>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre v-pre class="language-bash"><code>Usage:
  $ vuepress build <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>

Options:
  -c, --config <span class="token operator">&lt;</span>config<span class="token operator">></span>  Set path to config <span class="token function">file</span> 
  -d, --dest <span class="token operator">&lt;</span>dest<span class="token operator">></span>      Set the directory build output <span class="token punctuation">(</span>default: .vuepress/dist<span class="token punctuation">)</span> 
  -t, --temp <span class="token operator">&lt;</span>temp<span class="token operator">></span>      Set the directory of the temporary files 
  --cache <span class="token operator">&lt;</span>cache<span class="token operator">></span>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before build 
  --clean-cache          Clean the cache files before build 
  --debug                Enable debug mode 
  -v, --version          Display version number 
  -h, --help             Display this message
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Options set by CLI will override those options with the same name in
        your config file.
      </p>
    </div>
    <h2 id="info" tabindex="-1">
      <a class="header-anchor" href="#info" aria-hidden="true">#</a> info
    </h2>
    <p>Outputs information about your system and dependencies.</p>
    <p>
      This command would be helpful when you want to check your environment or
      report an issue.
    </p>
  </div>
</template>
