FROM node:10
RUN npm install webpack -g
WORKDIR /usr/src/client
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD [ "npm", "run", "startDocker" ]
EXPOSE 8080
