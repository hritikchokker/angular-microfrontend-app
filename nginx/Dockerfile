FROM nginx:alpine

RUN apk add --update nodejs nodejs-npm \
  && npm install -g @angular/cli

WORKDIR /app

COPY docker-angular-website ./website-microservice
COPY docker-angular-admin ./admin-microservice
COPY docker-angular-dashboard ./dashboard-microservice

RUN rm -rf /usr/share/nginx/html/*

RUN cd website-microservice \
  && npm ci \
  && npm run build:docker \
  && cd ..

RUN cd admin-microservice \
  && npm ci \
  && npm run build:docker \
  && cd ..
RUN cd dashboard-microservice \
  && npm ci \
  && npm run build:docker \
  && cd ..

EXPOSE 80
