#!/bin/bash

set -e # exit with nonzero exit code if anything fails

# 生成静态文件
yarn build

# 进入生成的文件夹
# cd docs/.vuepress/dist
cd dist

# deploy to github pages

if [ -z "$GITHUB_TOKEN" ]; then
  msg="deploy"
  githubURL="git@github.com:PathFun/vite-template-js.git"
else
  msg="来自github actions的自动部署"
  githubURL="https://${GITHUB_TOKEN}@github.com:PathFun/vite-template-js.git"
  git config --global user.name "PathFun"
  git config --global user.email "360603837@qq.com"
fi
git init
git add -f .
git commit -m "${msg}"
git push --force --quiet $githubURL master:gh-pages # 推送到github gh-pages分支