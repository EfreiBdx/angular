FROM node:20-alpine as build

ARG MODE=""

COPY . /app
WORKDIR /app

RUN npm ci 
RUN npm run build${MODE}

#docker build -t cequetuveux --build-arg=:dev . => npm run build:dev

#-------------------------------------------
FROM nginx:alpine

COPY --from=build /app/dist/marcel/browser /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80