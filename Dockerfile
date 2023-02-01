FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY ./src ./src
COPY ./public ./public

RUN npm run build

CMD ["npm", "run", "start"]