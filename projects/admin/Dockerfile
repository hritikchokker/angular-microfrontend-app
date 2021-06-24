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
COPY --from=builder /app/dist/admin .

EXPOSE 4000

CMD ng serve --port 4000 --host 0.0.0.0 --disable-host-check
