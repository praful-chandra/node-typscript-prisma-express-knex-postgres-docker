FROM node:16.4.2

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8000

CMD ["npm","start"]