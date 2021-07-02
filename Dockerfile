FROM node

# Create app directory
WORKDIR /usr/src/app
COPY backend /usr/src/app

RUN cd backend
RUN yarn

# Use the port used by our server.js configuration
EXPOSE 3000
CMD [ "yarn", "start" ]