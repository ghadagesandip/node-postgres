FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

EXPOSE 3001

RUN npm install

CMD ["npm", "start"]