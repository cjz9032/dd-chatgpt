<h1 align="center">欢迎使用 dd-chatgpt 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/fuergaosi" target="_blank">
    <img alt="Twitter: fuergaosi" src="https://img.shields.io/twitter/follow/fuergaosi.svg?style=social" />
  </a>
  <a href="https://discord.gg/8fXNrxwUJH" target="blank">
    <img src="https://img.shields.io/discord/1058994816446369832?label=Join%20Community&logo=discord&style=flat-square" alt="join discord community of github profile readme generator"/>
  </a>
</p>

> 在钉钉上迅速接入 ChatGPT，让它成为你最好的助手！  
> [English](README.md) | 中文文档

### 2022.12.27 更新
目前, 使用 Docker 会出现意料之外的问题, 我们正在努力解决。

### 2022.12.20 更新

感谢 @transitive-bullshit 的工作, 使得ChatGPT API可以自动完成这项工作。

## 🌟 功能点

- [x] 通过 ChatGPT 接入机器人到钉钉群
- [x] 创建 OpenAI 的账户池
- [x] 支持通过代理登陆 OpenAI
- [x] 加入了持续对话的功能
- [x] 加入 Dockerfile
- [x] 发布到 Docker.hub
- [x] 实现 OpenAI 账户池的热加载
- [X] 当 OpenAI 返回码为 429/503 时自动重试

[![Publish Docker image](https://github.com/cjz9032/dd-chatgpt/actions/workflows/publish-docker-hub.yml/badge.svg)](https://github.com/cjz9032/dd-chatgpt/actions/workflows/publish-docker-hub.yml)

## 在Linux上通过Docker使用（✅ 推荐）

```sh
cp config.yaml.example config.yaml
# 在当前目录创建并修改config.yaml
# 在Linux或WindowsPowerShell上运行如下命令
docker run -d --name dd-chatgpt -v $(pwd)/config.yaml:/app/config.yaml tanner/dd-chatgpt:latest

```

## 在Windows上通过Docker使用

```sh
# 在当前目录创建并修改config.yaml
# 在WindowsPowerShell中运行如下命令
docker run -d --name dd-chatgpt -v $(pwd)/config.yaml:/app/config.yaml tanner/dd-chatgpt:latest
# 在Windows command line (cmd)中, 您需要像这样修改上述代码的挂载目录:
docker run -d --name dd-chatgpt -v %cd%/config.yaml:/app/config.yaml tanner/dd-chatgpt:latest

```

## 安装

```sh
npm install
```
> 请确认安装的NodeJS版本为18.0.0以上

## 配置

### 复制配置文件

将配置文件复制一份以配置您的项目

```sh
cp config.yaml.example config.yaml
```

### 获取 OpenAI 的账户并配置到项目中

> 如果你没有 OpenAI 的账号，并且您在无法访问 OpenAI 的国家或地区，你可以查看[here](https://mirror.xyz/boxchen.eth/9O9CSqyKDj4BKUIil7NC1Sa1LJM-3hsPqaeW_QjfFBc).

#### 配置方法 A：使用账号密码

可以在配置文件中输入你的账号密码，格式如下

```yaml
chatGPTAccountPool:
  - apiKey: <apiKey>
```

⚠️ 触发关键字必须出现在接收到的消息的第一个位置⚠️

请确保您的终端网络可以登陆 OpenAI。如果登陆失败，请尝试使用代理或使用 SessionToken 方法配置

**设置代理:**
编辑配置文件 `config.yaml`
```yaml
openAIProxy: <代理地址>
```
### 启动项目

```sh
dev
npm run dev

prod
npm run build && npm run serve
// pm2
npm run pm2 list
```
## ✨ Contributor

暂不接收

## 感谢支持 🙏

如果这个项目对你产生了一点的帮助，请为这个项目点上一颗 ⭐️
