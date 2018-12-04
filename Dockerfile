FROM node:latest

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src/mock/db.js .

EXPOSE 3004

CMD ["npm", "run", "server"]
