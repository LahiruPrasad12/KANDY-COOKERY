# Use an official Node.js 21 image with Alpine 3.17 as the base image
FROM node:21-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]