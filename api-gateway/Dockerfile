FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY ./_proto ./dist/_proto

WORKDIR ./dist

EXPOSE 7000

CMD node ./index.js