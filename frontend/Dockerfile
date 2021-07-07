FROM node
# Create working directory and copy the app before running yarn install as the artifactory
# credentials can be inside .npmrc
WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["npm", "start"]