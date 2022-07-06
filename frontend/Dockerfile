FROM node:16-alpine

WORKDIR /app

RUN mkdir -p node_modules/.vite && chmod -R 777 node_modules/.vite

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3330

CMD ["npm", "run", "dev"]