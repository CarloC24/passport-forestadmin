FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install lumber-cli -g -s
RUN npm install -s
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
