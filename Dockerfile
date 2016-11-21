FROM sagacify/kosmio-micro-base-image:v33

ENV APP_NAME dinner-plan-backend
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

WORKDIR /var/www

COPY ./config /var/www/config
COPY ./src /var/www/src
COPY ./package.json /var/www/package.json
COPY ./test /var/www/test

RUN npm run build

CMD ["npm", "start"]
