FROM node:18

WORKDIR /usr/src/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "start:dev" ]