FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install yarn

RUN rm -rf package-lock.json

RUN yarn

COPY . .

RUN yarn prisma generate

EXPOSE 3330

CMD ["yarn", "db:up"]