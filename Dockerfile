FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src

COPY public ./public

COPY Dockerfile ./

RUN npm run build

CMD ["npm", "start"]
