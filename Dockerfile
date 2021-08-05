FROM node:16-alpine

RUN yarn global add serve

WORKDIR /frontend

COPY . .

RUN yarn && node node_modules/esbuild/install.js && yarn build

EXPOSE 5000

CMD serve dist
