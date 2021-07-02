FROM node

# Create app directory
WORKDIR /usr/src/app
COPY backend /usr/src/app

# Run yarn without generating a yarn.lock file
RUN /bin/sh -c 'cd /usr/src/app; npm install'

# Use the port used by our server.js configuration
EXPOSE 3000
CMD [ "yarn", "start" ]