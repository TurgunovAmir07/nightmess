FROM node:18-alpine

WORKDIR /app

COPY package*.json .
COPY yarn.lock .

RUN npm i yarn
RUN yarn

COPY . .

RUN yarn build

CMD ["node", "dist/main.js"]