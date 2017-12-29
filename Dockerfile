FROM node:8-alpine
RUN apk add --no-cache nodejs

## Bake container with the latest build
WORKDIR /app
COPY dist /app
COPY package.json /app
RUN npm install

## Port
EXPOSE 8080

## Run app
CMD ["node", "index.js"]
