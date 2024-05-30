FROM node:18-alpine

WORKDIR /app

COPY package.json .

COPY panda.config.ts .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]