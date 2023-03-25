FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY ./src ./src
COPY ./public ./public
COPY ./.env ./.env

RUN npm run build

CMD ["npm", "run", "start"]