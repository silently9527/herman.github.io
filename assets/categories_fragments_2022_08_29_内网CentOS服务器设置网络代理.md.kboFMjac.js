import{_ as n}from"./chunks/ArticleMetadata.Sb1DYAHo.js";import{_ as p,D as e,o as h,c as d,I as r,w as g,k as t,a as F,R as y,b as C,e as D}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const q=JSON.parse('{"title":"内网CentOS服务器设置网络代理","description":"","frontmatter":{"title":"内网CentOS服务器设置网络代理","author":"查尔斯","date":"2022/08/29 20:53","categories":["杂碎逆袭史"],"tags":["Linux","CentOS","网络代理"]},"headers":[],"relativePath":"categories/fragments/2022/08/29/内网CentOS服务器设置网络代理.md","filePath":"categories/fragments/2022/08/29/内网CentOS服务器设置网络代理.md","lastUpdated":1723356459000}'),A={name:"categories/fragments/2022/08/29/内网CentOS服务器设置网络代理.md"},B=t("h1",{id:"内网centos服务器设置网络代理",tabindex:"-1"},[F("内网CentOS服务器设置网络代理 "),t("a",{class:"header-anchor",href:"#内网centos服务器设置网络代理","aria-label":'Permalink to "内网CentOS服务器设置网络代理"'},"​")],-1),o=y(`<p><strong>C：</strong> 今天在网管那新申请了一台服务器，打算用来做测试环境。但是内网服务器没有网络，所以需要设置一下网络代理才能满足上网要求。</p><h2 id="设置http-https代理" tabindex="-1">设置http/https代理 <a class="header-anchor" href="#设置http-https代理" aria-label="Permalink to &quot;设置http/https代理&quot;">​</a></h2><ol><li><p>修改 profile 文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /etc/profile</span></span></code></pre></div></li><li><p>在 profile 文件末尾，追加下方配置内容</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 注意：这台机器必须能够访问配置的代理服务器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> http_proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://你的代理服务器地址:你的代理服务器端口号</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> https_proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://你的代理服务器地址:你的代理服务器端口号</span></span></code></pre></div><p>如果你的代理服务器需要登录，那么只需要如下写法即可：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 注意：这台机器必须能够访问配置的代理服务器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> http_proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://用户名:密码@你的代理服务器地址:你的代理服务器端口号</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> https_proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://用户名:密码@你的代理服务器地址:你的代理服务器端口号</span></span></code></pre></div></li></ol><h2 id="设置yum代理" tabindex="-1">设置yum代理 <a class="header-anchor" href="#设置yum代理" aria-label="Permalink to &quot;设置yum代理&quot;">​</a></h2><p>因为安装一些环境的时候还需要用到 yum，所以给 yum 也配置一下代理。</p><ol><li><p>修改 yum.conf 文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /etc/yum.conf</span></span></code></pre></div></li><li><p>在 yum.conf 文件末尾，追加下方配置内容</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">proxy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://你的代理服务器地址:你的代理服务器端口号</span></span></code></pre></div><p>当然了，如果你的代理服务器需要登录，写法也和设置 http/https 代理时一样。</p></li></ol><p>都设置完之后，执行 <code>reboot</code> 重启服务器，让配置生效即可。</p><h2 id="检测是否可以上网" tabindex="-1">检测是否可以上网 <a class="header-anchor" href="#检测是否可以上网" aria-label="Permalink to &quot;检测是否可以上网&quot;">​</a></h2><p>重启后，为了确认配置是否成功，执行 <code>curl</code> 来测试一下。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> www.baidu.com</span></span></code></pre></div><p>很明显，看到下面的返回就知道配置成功了，如期返回了百度的页面内容。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">&lt;!--STATUS OK--&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">content-type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">text/html;charset</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">utf-8</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">X-UA-Compatible</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">IE</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Edge</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">always</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">referrer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">stylesheet</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">text/css</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;百度一下，你就知道&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">body</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> link</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">#0000cc</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">wrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">head_wrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">s_form</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">s_form_wrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">lg</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> hidefocus</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">true</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">//www.baidu.com/img/bd_logo1.png</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">270</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">129</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">form</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">form</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">f</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> action</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">//www.baidu.com/s</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">fm</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">hidden</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">bdorz_come</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">hidden</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">ie</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">utf-8</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">hidden</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">f</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">hidden</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">rsv_bp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">hidden</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">rsv_idx</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">hidden</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">tn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">baidu</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;bg s_ipt_wr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">kw</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">wd</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">s_ipt</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> maxlength</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">255</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> autocomplete</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">off</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> autofocus</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;bg s_btn_wr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">submit</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">su</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">百度一下</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;bg s_btn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">u1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://news.baidu.com</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">tj_trnews</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mnav</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;新闻&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://www.hao123.com</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">tj_trhao123</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mnav</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;hao123&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://map.baidu.com</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">tj_trmap</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mnav</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;地图&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://v.baidu.com</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">tj_trvideo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mnav</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;视频&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://tieba.baidu.com</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">tj_trtieba</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mnav</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;贴吧&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">noscript</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://www.baidu.com/bdorz/login.gif?login&amp;amp;tpl</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mn&amp;amp;u</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">tj_login</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">lb</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;登录&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">noscript</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&lt;a href=&quot;http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> encodeURIComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(window.location.href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (window.location.search </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ?</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;?&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;&amp;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;bdorz_come=1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;&quot; name=&quot;tj_login&quot; class=&quot;lb&quot;&gt;登录&lt;/a&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">//www.baidu.com/more/</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">tj_briicon</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">bri</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;display: block;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;更多产品&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">ftCon</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">ftConw</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">lh</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://home.baidu.com</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;关于百度&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://ir.baidu.com</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;About Baidu&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">cp</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">&amp;copy;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">2017</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">&amp;nbsp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Baidu</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">&amp;nbsp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://www.baidu.com/duty</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;使用百度前必读&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">&amp;nbsp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://jianyi.baidu.com/</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">cp-feedback</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;意见反馈&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">&amp;nbsp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">京ICP证030173号</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">&amp;nbsp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">//www.baidu.com/img/gs.gif</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div>`,12);function c(i,E,m,u,b,v){const k=n,l=e("ClientOnly");return h(),d("div",null,[B,r(l,null,{default:g(()=>{var s,a;return[(((s=i.$frontmatter)==null?void 0:s.aside)??!0)&&(((a=i.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(h(),C(k,{key:0,article:i.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),o])}const x=p(A,[["render",c]]);export{q as __pageData,x as default};
