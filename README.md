# Auth Tutorial

<img style="width: 100%" src="https://github.com/yunyoungsik/Auth-Tutorial/blob/main/frontend/public/thumnail.png?raw=true" />

[참고영상](https://youtu.be/pmvEgZC55Cg?si=Md0ycCec1aoQFrgw)

## 설치

```
[backend]
npm install express cookie-parser mailtrap bcryptjs dotenv jsonwebtoken mongoose crypto
npm i nodemon -D
npm i cors
npm install cross-env --save-dev

[Linux, macOS]
"scripts": {
    "dev": "NODE_ENV=development nodemon backend/index.js",
    "start": "NODE_ENV=production node backend/index.js",
    "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
  },
[window]
"scripts": {
  "dev": "cross-env NODE_ENV=development nodemon backend/index.js",
  "start": "cross-env NODE_ENV=production node backend/index.js",
  "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
}

[frontend]
npm create vite@latest .
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i react-router-dom
npm i framer-motion
npm i lucide-react
npm i zustand
npm i axios
npm i react-hot-toast
```
