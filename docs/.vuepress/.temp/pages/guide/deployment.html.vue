<template>
  <div>
    <h1 id="deployment" tabindex="-1">
      <a class="header-anchor" href="#deployment" aria-hidden="true">#</a>
      Deployment
    </h1>
    <p>The following guides are based on some shared assumptions:</p>
    <ul>
      <li>
        You are placing your Markdown source files inside the
        <code v-pre>docs</code> directory of your project;
      </li>
      <li>
        You are using the default build output location (<code v-pre
          >.vuepress/dist</code
        >);
      </li>
      <li>
        You are using
        <a
          href="https://classic.yarnpkg.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          >yarn classic<ExternalLinkIcon
        /></a>
        as package manager, while npm is also supported;
      </li>
      <li>
        VuePress is installed as a local dependency in your project, and you
        have setup the following script in <code v-pre>package.json</code>:
      </li>
    </ul>
    <div class="language-json ext-json line-numbers-mode">
      <pre
        v-pre
        class="language-json"
      ><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <h2 id="github-pages" tabindex="-1">
      <a class="header-anchor" href="#github-pages" aria-hidden="true">#</a>
      GitHub Pages
    </h2>
    <ol>
      <li>
        <p>
          Set the correct
          <RouterLink to="/reference/config.html#base">base</RouterLink> config.
        </p>
        <p>
          If you are deploying to
          <code v-pre>https://&lt;USERNAME&gt;.github.io/</code>, you can omit
          this step as <code v-pre>base</code> defaults to
          <code v-pre>&quot;/&quot;</code>.
        </p>
        <p>
          If you are deploying to
          <code v-pre>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>,
          for example your repository is at
          <code v-pre>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>,
          then set <code v-pre>base</code> to
          <code v-pre>&quot;/&lt;REPO&gt;/&quot;</code>.
        </p>
      </li>
      <li>
        <p>
          Choose your preferred CI tools. Here we take
          <a
            href="https://github.com/features/actions"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub Actions<ExternalLinkIcon
          /></a>
          as an example.
        </p>
        <p>
          Create <code v-pre>.github/workflows/docs.yml</code> to set up the
          workflow.
        </p>
      </li>
    </ol>
    <details class="custom-container details">
      <summary>Click to expand sample config</summary>
      <div class="language-yaml ext-yml line-numbers-mode">
        <pre
          v-pre
          class="language-yaml"
        ><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># trigger deployment on every push to main branch</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token comment"># trigger deployment manually</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># fetch all commits to get last updated time or other git log info</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># choose node.js version to use</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'14'</span>

      <span class="token comment"># cache node_modules</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            **/node_modules</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles('<span class="token important">**/yarn.lock')</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            ${{ runner.os }}-yarn-</span>

      <span class="token comment"># install dependencies if the cache did not hit</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> 'true'
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token comment"># run build script</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn docs<span class="token punctuation">:</span>build

      <span class="token comment"># please check out the docs of the workflow for more details</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># deploy to gh-pages branch</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># deploy the default output dir of VuePress</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
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
    </details>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Please refer to
        <a
          href="https://pages.github.com/"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub Pages official guide<ExternalLinkIcon
        /></a>
        for more details.
      </p>
    </div>
    <h2 id="gitlab-pages" tabindex="-1">
      <a class="header-anchor" href="#gitlab-pages" aria-hidden="true">#</a>
      GitLab Pages
    </h2>
    <ol>
      <li>
        <p>
          Set the correct
          <RouterLink to="/reference/config.html#base">base</RouterLink> config.
        </p>
        <p>
          If you are deploying to
          <code v-pre>https://&lt;USERNAME&gt;.gitlab.io/</code>, you can omit
          <code v-pre>base</code> as it defaults to
          <code v-pre>&quot;/&quot;</code>.
        </p>
        <p>
          If you are deploying to
          <code v-pre>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code>,
          for example your repository is at
          <code v-pre>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>,
          then set <code v-pre>base</code> to
          <code v-pre>&quot;/&lt;REPO&gt;/&quot;</code>.
        </p>
      </li>
      <li>
        <p>
          Create <code v-pre>.gitlab-ci.yml</code> to set up
          <a
            href="https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/"
            target="_blank"
            rel="noopener noreferrer"
            >GitLab CI<ExternalLinkIcon
          /></a>
          workflow.
        </p>
      </li>
    </ol>
    <details class="custom-container details">
      <summary>Click to expand sample config</summary>
      <div class="language-yaml ext-yml line-numbers-mode">
        <pre
          v-pre
          class="language-yaml"
        ><code><span class="token comment"># choose a docker image to use</span>
<span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>14<span class="token punctuation">-</span>buster

<span class="token key atrule">pages</span><span class="token punctuation">:</span>
  <span class="token comment"># trigger deployment on every push to main branch</span>
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> main

  <span class="token comment"># cache node_modules</span>
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> node_modules/

  <span class="token comment"># install dependencies and run build script</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile
  <span class="token punctuation">-</span> yarn docs<span class="token punctuation">:</span>build <span class="token punctuation">-</span><span class="token punctuation">-</span>dest public

  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> public
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
          <div class="line-number"></div>
          <div class="line-number"></div>
          <div class="line-number"></div>
          <div class="line-number"></div>
          <div class="line-number"></div>
        </div>
      </div>
    </details>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Please refer to
        <a
          href="https://docs.gitlab.com/ce/user/project/pages/#getting-started"
          target="_blank"
          rel="noopener noreferrer"
          >GitLab Pages official guide<ExternalLinkIcon
        /></a>
        for more details.
      </p>
    </div>
    <h2 id="google-firebase" tabindex="-1">
      <a class="header-anchor" href="#google-firebase" aria-hidden="true">#</a>
      Google Firebase
    </h2>
    <ol>
      <li>
        <p>
          Make sure you have
          <a
            href="https://www.npmjs.com/package/firebase-tools"
            target="_blank"
            rel="noopener noreferrer"
            >firebase-tools<ExternalLinkIcon
          /></a>
          installed.
        </p>
      </li>
      <li>
        <p>
          Create <code v-pre>firebase.json</code> and
          <code v-pre>.firebaserc</code> at the root of your project with the
          following content:
        </p>
      </li>
    </ol>
    <p><code v-pre>firebase.json</code>:</p>
    <div class="language-json ext-json line-numbers-mode">
      <pre
        v-pre
        class="language-json"
      ><code><span class="token punctuation">{</span>
  <span class="token property">"hosting"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"public"</span><span class="token operator">:</span> <span class="token string">"./docs/.vuepress/dist"</span><span class="token punctuation">,</span>
    <span class="token property">"ignore"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p><code v-pre>.firebaserc</code>:</p>
    <div class="language-json ext-json line-numbers-mode">
      <pre
        v-pre
        class="language-json"
      ><code><span class="token punctuation">{</span>
  <span class="token property">"projects"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"default"</span><span class="token operator">:</span> <span class="token string">"&lt;YOUR_FIREBASE_ID>"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <ol start="3">
      <li>
        After running <code v-pre>yarn docs:build</code>, deploy using the
        command <code v-pre>firebase deploy</code>.
      </li>
    </ol>
    <div class="custom-container tip">
      <p class="custom-container-title">TIP</p>
      <p>
        Please refer to
        <a
          href="https://firebase.google.com/docs/cli"
          target="_blank"
          rel="noopener noreferrer"
          >Firebase CLI official guide<ExternalLinkIcon
        /></a>
        for more details.
      </p>
    </div>
    <h2 id="heroku" tabindex="-1">
      <a class="header-anchor" href="#heroku" aria-hidden="true">#</a> Heroku
    </h2>
    <ol>
      <li>
        <p>
          Install
          <a
            href="https://devcenter.heroku.com/articles/heroku-cli"
            target="_blank"
            rel="noopener noreferrer"
            >Heroku CLI<ExternalLinkIcon /></a
          >.
        </p>
      </li>
      <li>
        <p>
          Create a Heroku account by
          <a
            href="https://signup.heroku.com"
            target="_blank"
            rel="noopener noreferrer"
            >signing up<ExternalLinkIcon /></a
          >.
        </p>
      </li>
      <li>
        <p>
          Run <code v-pre>heroku login</code> and fill in your Heroku
          credentials:
        </p>
      </li>
    </ol>
    <div class="language-bash ext-sh line-numbers-mode">
      <pre v-pre class="language-bash"><code>heroku login
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
      </div>
    </div>
    <ol start="4">
      <li>
        Create a file called <code v-pre>static.json</code> in the root of your
        project with the below content:
      </li>
    </ol>
    <p><code v-pre>static.json</code>:</p>
    <div class="language-json ext-json line-numbers-mode">
      <pre
        v-pre
        class="language-json"
      ><code><span class="token punctuation">{</span>
  <span class="token property">"root"</span><span class="token operator">:</span> <span class="token string">"./docs/.vuepress/dist"</span>
<span class="token punctuation">}</span>
</code></pre>
      <div class="line-numbers" aria-hidden="true">
        <div class="line-number"></div>
        <div class="line-number"></div>
        <div class="line-number"></div>
      </div>
    </div>
    <p>
      This is the configuration of your site; read more at
      <a
        href="https://github.com/heroku/heroku-buildpack-static"
        target="_blank"
        rel="noopener noreferrer"
        >heroku-buildpack-static<ExternalLinkIcon /></a
      >.
    </p>
    <h2 id="layer0" tabindex="-1">
      <a class="header-anchor" href="#layer0" aria-hidden="true">#</a> Layer0
    </h2>
    <p>
      See
      <a
        href="https://docs.layer0.co/guides/vuepress"
        target="_blank"
        rel="noopener noreferrer"
        >Layer0 Documentation &gt; Framework Guides &gt;
        VuePress<ExternalLinkIcon /></a
      >.
    </p>
    <h2 id="netlify" tabindex="-1">
      <a class="header-anchor" href="#netlify" aria-hidden="true">#</a> Netlify
    </h2>
    <ol>
      <li>
        <p>
          On
          <a
            href="https://netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            >Netlify<ExternalLinkIcon /></a
          >, set up a new project from GitHub with the following settings:
        </p>
        <ul>
          <li>
            <strong>Build Command:</strong> <code v-pre>yarn docs:build</code>
          </li>
          <li>
            <strong>Publish directory:</strong>
            <code v-pre>docs/.vuepress/dist</code>
          </li>
        </ul>
      </li>
      <li>
        <p>
          Set
          <a
            href="https://docs.netlify.com/configure-builds/environment-variables"
            target="_blank"
            rel="noopener noreferrer"
            >Environment variables<ExternalLinkIcon
          /></a>
          to choose node version:
        </p>
        <ul>
          <li><code v-pre>NODE_VERSION</code>: 14</li>
        </ul>
      </li>
      <li>
        <p>Hit the deploy button.</p>
      </li>
    </ol>
    <h2 id="vercel" tabindex="-1">
      <a class="header-anchor" href="#vercel" aria-hidden="true">#</a> Vercel
    </h2>
    <ol>
      <li>
        <p>
          Go to
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
            >Vercel<ExternalLinkIcon /></a
          >, set up a new project from GitHub with the following settings:
        </p>
        <ul>
          <li><strong>FRAMEWORK PRESET:</strong> <code v-pre>Other</code></li>
          <li>
            <strong>BUILD COMMAND:</strong> <code v-pre>yarn docs:build</code>
          </li>
          <li>
            <strong>OUTPUT DIRECTORY:</strong>
            <code v-pre>docs/.vuepress/dist</code>
          </li>
        </ul>
      </li>
      <li>
        <p>Hit the deploy button.</p>
      </li>
    </ol>
  </div>
</template>
