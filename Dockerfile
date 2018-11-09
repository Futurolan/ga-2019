FROM node:alpine

EXPOSE 3000

ARG EDITION_ID=352
ARG BACKEND_API_URL=https://backoffice.gamers-assembly.net
ARG BACKEND_LOCAL_API_URL=http://drupal
ARG SOCKET_URL=https://socket.gamers-assembly.net
ARG BASE_URL=https://ga2019.gamers-assembly.net

WORKDIR /usr/src/ga-client
COPY . .
RUN npm install
RUN npm run-script build


CMD npm start
