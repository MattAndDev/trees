FROM node:14 AS build

WORKDIR /

COPY . .
RUN npm i --ignore-scripts
RUN npm run bundle

FROM node:alpine

WORKDIR /
COPY --from=build /app ./app
EXPOSE 4242
ENTRYPOINT ["node", "/app/server/js/index.js"]
