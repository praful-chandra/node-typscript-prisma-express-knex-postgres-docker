FROM node:16.4.2-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npm","start"]