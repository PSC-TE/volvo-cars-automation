FROM node:16-alpine

ADD ./

WORKDIR /test

RUN npm install

ENTRYPOINT ["npm", "run", "wdio"]
