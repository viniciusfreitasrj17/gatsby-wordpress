FROM node:alpine

WORKDIR /usr/app
COPY package*.json ./

RUN npm i -g gatsby-cli
RUN npm i

COPY . .

EXPOSE 3000
CMD ["gatsby", "develop", "-H", "0.0.0.0"]