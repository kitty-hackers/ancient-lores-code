### STAGE 1: Build ###

FROM node:17.6.0-alpine as builder

LABEL maintainer="Paul Petrov (paul@bargamut.ru)"

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy npm package files
COPY package*.json ./

RUN npm set progress=false && npm ci --silent

# Copy app files to out container
COPY . .

RUN npm run build



### STAGE 2: Setup ###

FROM nginx:1.21-alpine

LABEL maintainer="Paul Petrov (paul@bargamut.ru)"

COPY ./configs/nginx-custom.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

# Copy build files from first image to nginx dir
COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]