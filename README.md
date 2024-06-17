## 功能说明
在两个屏幕上显示h5
## 环境
ubuntu20
```
sudo apt install curl
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```
确认环境配置是否成功
```
node -v
npm -v
```
## 使用步骤
```
mkdir electron_test
cd electron_test
npm init -y  # 初始化一个新的npm项目,这里会生成package.json，注意替换为这里的
npm install electron --save-dev
# 替换package.json
npm start
```
注意，package.json中
```
"scripts": {
  "start": "electron .",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```
