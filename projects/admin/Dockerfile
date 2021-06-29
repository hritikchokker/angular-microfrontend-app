# Create the node stage with the name "builder"
FROM node:alpine as admin-microservice


# Set the working  directory
WORKDIR /usr/share/app



# Copy files from current directory  to working directory
COPY . .




RUN yarn i && yarn run build:admin

FROM nginx:stable-alpine


COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/admin/ .

# docker run --rm -it -p  8080:80 image-name

# or

# docker run --rm -it -p  8080:80 image-id
