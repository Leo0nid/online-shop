FROM node:18.12.1

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY src ./src

COPY public ./public

COPY Dockerfile ./

RUN npm run build

CMD ["npm", "start"]

