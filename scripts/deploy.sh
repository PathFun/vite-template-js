#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
# cd docs/.vuepress/dist
cd dist

# deploy to github pages

if [ -z "$GITHUB_TOKEN" ]; then
  msg="deploy"
  githubUrl="git@github.com:PathFun/vite-template-js.git"
else
  msg="来自github actions的自动部署"
  githubUrl="https://${GITHUB_TOKEN}@github.com:PathFun/vite-template-js.git"
  git config --global user.name "PathFun"
  git config --global user.email "360603837@qq.com"
fi
git init
git add -f .
git commit -m "${msg}"
git push --force --quiet $githubUrl master:gh-pages > /dev/null # 推送到github gh-pages分支