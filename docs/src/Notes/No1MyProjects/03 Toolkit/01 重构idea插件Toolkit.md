---
title: 01 重构idea插件Toolkit
author: Herman
updateTime: 2021-08-14 13:41
desc: 熬夜重构了IDEA插件Toolkit(整合程序员常用的工具箱)，更加便捷
categories: MyProjects
tags: idea插件
outline: deep
---


## 背景
自己在开发的过程中经常会使用一些在线的工具，比如：时间戳转日期，JSON格式化等等；考虑想把这些常用的功能都做成IDEA插件，在使用的时候就不用去网上寻找工具，在IDEA中就可以快速完成提升开发人员开发效率；

## 为什么要重构
最初实现了一个初级版本，大家的反馈还是比较实用，但是也收到了许多的建议和问题，比如：之前的版本tab太多，能否配置隐藏等等；加上本身这个插件集成的工具越来越来，采用Tab的方式也不太合适，所有进行了重新的设计，把所有的工具都采用命令的方式在RunAnything中运行即可，根据自己的实际情况在idea中使用需要的功能。

## How to use
1. 双击control或者点工具类图标即可弹出RunAnything窗口
![](https://cdn.jsdelivr.net/gh/silently9527/images//008eGmZEgy1gobp4rklznj30h001c0sj.jpg)

2. 在RunAnything中输入`?`查看 `toolkit` 命令
![](https://cdn.jsdelivr.net/gh/silently9527/images//008eGmZEgy1gobp6dvicqj30im0edglm.jpg)

3. 输入`toolkit`即可看到所有支持的命令
![](https://cdn.jsdelivr.net/gh/silently9527/images//008eGmZEgy1gobp7jev4lj30im0g0mxc.jpg)

4. 选择需要使用的命令，例如：SQL转elasticSearch语句、二维码生成
![](https://cdn.jsdelivr.net/gh/silently9527/images//008eGmZEgy1gobpa7j02kj30e10jgwel.jpg)
![](https://cdn.jsdelivr.net/gh/silently9527/images//008eGmZEgy1gobpcoswyyj30ti0rm3yv.jpg)

## How to install
第一种方式：下载源码自己打包安装

第二种方式：
1. 关注微信公众号：贝塔学java，回复：`toolkit` 即可获取已打包的插件，最新插件版本`1.0.3`
2. 打包idea的插件安装界面 -> `install plugin from disk` ,选择下载的最新插件包，重启idea接口生效
![](https://cdn.jsdelivr.net/gh/silently9527/images//008eGmZEgy1gobq5a9ajzj31de0u0dij.jpg)


## 支持的命令

| 命令 | 说明 |
| --- | --- |
| toolkit date | 日期转时间戳 |
| toolkit timestamp | 时间戳转日期 |
| toolkit json | JSON格式化 |
| toolkit sql2dsl | SQL转elasticSearch语句 |
| toolkit url encode | URL编码 |
| toolkit url decode | URL解码 |
| toolkit base64 encode | base64编码 |
| toolkit base64 decode | base64解码 |
| toolkit phone | 手机号归属地 |
| toolkit ip | IP归属地 |
| toolkit md5 | MD5加密 |
| toolkit sha1 | SHA1加密 |
| toolkit sha224 | SHA224加密 |
| toolkit sha256 | SHA256加密 |
| toolkit sha384 | SHA384加密 |
| toolkit sha512 | SHA512加密 |
| toolkit uuid | UUID随机值 |
| toolkit regular | 正则表达式 |
| toolkit qrcode encode | 生成二维码（支持插入Logo） |


## 计划中的命令
| 命令 | 说明 |
| --- | --- |
| toolkit nat | 内网穿透（方便微信、支付宝等后台开发） |
| toolkit cron | Cron表达式 |
| toolkit file minify | js/css混淆压缩 |
| toolkit file download | 文件下载 |
| toolkit qrcode decode | 二维码解析 |

> 欢迎小伙伴留言希望支持的命令

## 测试通过IDEA的版本

测试通过的版本如下，如果其他版本出现问题，欢迎给我留言

| IDE | 版本 | 
| --- | --- | 
| Intellij IDEA | 2019、2020 | 

## 项目地址
> Github地址: https://github.com/silently9527/ToolsetIdeaPlugin
>
> Gitee地址: https://gitee.com/silently9527/ToolsetIdeaPlugin
>
> **觉得好用的小伙伴记得小手一抖 star 哟**

