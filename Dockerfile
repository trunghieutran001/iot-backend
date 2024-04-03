FROM node:14-alpine
RUN mkdir /webapp

WORKDIR /webapp

COPY . .

RUN npm install
EXPOSE 3000
CMD ["node", "src/app.js"]