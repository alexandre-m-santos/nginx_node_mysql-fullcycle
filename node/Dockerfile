FROM node:19.7.0-alpine3.17

RUN apk add --no-cache bash

WORKDIR /usr/src/app_node

COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm", "start"]