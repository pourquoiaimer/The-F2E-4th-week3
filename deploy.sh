# 发生任何错误时终止
set -e

# 构建
npm run build

# 进入输出产物文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# pourquoiaimer.github.io/The-F2E-4th/
git push -f git@github.com:pourquoiaimer/The-F2E-4th-week3.git gh-pages
# git push -f git@github.com:Wang9977/viteProject.git master:gh-pages
