# syntax=docker/dockerfile:1
FROM docker
COPY --from=docker/buildx-bin /buildx/usr/libexec/docker/cli-plugins/docker-buildx
RUN docker buildx version
# Nginx official image
FROM nginx:1.18
# Use a custom configuration 
COPY nginx.conf /etc/nginx/nginx.conf
# Create our workspace and move the build into it
WORKDIR /code
COPY /code .
# Expose the port
EXPOSE 8080:8080
# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
