FROM node


COPY . .
#COPY package.json .
#COPY src ./src
#OPY public ./public
#COPY craco.config.js .
#COPY tsconfig.json .


RUN npm i
RUN npm run-script build

EXPOSE 8080
CMD ["node", "server.js"]
#CMD ["npm", "run", "start"]