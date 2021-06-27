# Create the node stage with the name "builder"
FROM node:latest as builder

# Set the working  directory
WORKDIR /app

# Copy files from current directory  to working directory
COPY . .

RUN npm i && npm run build

# STAGE 2

# Create  the nginx stage for serving content
FROM nginx:alpine

# Set the working  director to nginx  asset directory
WORKDIR /usr/share/nginx/html

# Remove  default  nginx statis assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=builder /app/dist/dashboard .

# Containers  run nginx with global  directives and daemon off
ENTRYPOINT [ "nginx","-g","daemon off;" ]

# docker run --rm -it -p  8080:80 image-name

# or

# docker run --rm -it -p  8080:80 image-id
