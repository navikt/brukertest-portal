FROM node

# Create app directory
WORKDIR /usr/src/app
COPY backend /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY backend/package*.json backend/yarn.lock ./

# Run yarn without generating a yarn.lock file
RUN cd /usr/src/app/backend
RUN yarn --pure-lockfile

# Bundle app source
COPY . .

# Use the port used by our server.js configuration
EXPOSE 3000
CMD [ "yarn", "start" ]