FROM node:15.8.0 as runtime

FROM runtime as source

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN if [${NODE_ENV} = production]; then printf ´HTTP_PORT=8080\n DB_HOST=${NAIS_DATABASE_brukertest-portal-api_brukertest-portal-db_HOST}\n DB_PORT=${NAIS_DATABASE_brukertest-portal-api_brukertest-portal-db_PORT}\n POSTGRES_DB=${NAIS_DATABASE_brukertest-portal-api_brukertest-portal-db_DATABASE}\n POSRGRES_USER=${NAIS_DATABASE_brukertest-portal-api_brukertest-portal-db_USERNAME}\n POSTGRES_PASSWORD=${NAIS_DATABASE_brukertest-portal-api_brukertest-portal-db_PASSWORD}´ .env.prod ; fi

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