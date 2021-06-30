FROM navikt/node-express:12.2.0-alpine

WORKDIR /usr/src/app
COPY backend /usr/src/app

RUN /bin/sh -c 'cd /usr/src/app; npm install'

COPY public /usr/src/app/public/

EXPOSE 3000

CMD ["yarn", "start"]