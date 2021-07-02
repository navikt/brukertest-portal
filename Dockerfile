FROM node

# Create app directory
RUN mkdir -p /app

WORKDIR /app
COPY backend /app

RUN /bin/sh -c 'cd /app; npm install'

# Use the port used by our server.js configuration

COPY public /app/public/

EXPOSE 3000

CMD [ "yarn", "start" ]