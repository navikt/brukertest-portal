FROM node:15.8.0

WORKDIR /app

ENV NODE_ENV=development

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "dev"]

# FROM source as build

# ENV NODE_ENV=production
# RUN yarn build

# FROM runtime as production
# ENV NODE_ENV=production

# WORKDIR /app
# COPY --from=build /app/dist dist/
# COPY --from=build /app/package.json .

# RUN yarn install --production

# CMD ["yarn", "prod"]