FROM node:14-alpine

WORKDIR /app

COPY . .

RUN yarn global add serve

RUN yarn 

RUN yarn build

EXPOSE 8080

CMD [ "serve", "dist" ]