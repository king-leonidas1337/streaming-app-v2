FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

WORKDIR ./dist

EXPOSE 5000

CMD node ./index.js