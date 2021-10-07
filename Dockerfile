FROM node:16.7

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]