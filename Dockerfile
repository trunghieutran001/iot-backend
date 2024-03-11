FROM node:14-alpine
RUN mkdir /test

WORKDIR /test

COPY . .

RUN npm install
EXPOSE 3000
CMD node src/server.js