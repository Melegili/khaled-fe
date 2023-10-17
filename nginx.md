# NGINX

[Nginx](https://www.nginx.com/) is a web server with other uses and functions as well. It is mainly used to run built web applications. In this guide, I'll set up an Nginx to run an angular pre-built application. 

## Dockerfile
Using the official Nginx 1.17 image, we copy our built files into the directory `/code`. This is defined as the root for our server in the [nginx.conf](./nginx.conf) file. 

The port is exposed afterward. 

Finally, we use run the starting command `nginx -g daemon off` to properly track the nginx process.

```
# Nginx official image
FROM nginx:1.17
# Use a custom configuration 
COPY nginx.conf /etc/nginx/nginx.conf
# Create our workspace and move the build into it
WORKDIR /code
COPY /code .
# Expose the port
EXPOSE 8080:8080
# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
```
Build the image from [Dockerfile](./Dockerfile.dockerfile)
```
docker build -f Dockerfile.dockerfile . -t <repository>/<image>:<tag>
```
## Next Steps
You now have a custom image with your built code ready to be run! You can run it locally, or push it to an image repository to use it in your OpenShift environment. You can find how to do that [here](https://github.com/Sohob/OpenShift-Guides/blob/main/Jenkins-OCP.md#1-create-jenkins).

#### References
[Deploying Nginx on OpenShift](https://heidloff.net/article/deploying-nginx-on-openshift/)

> Written by [Mostafa Abdelnasser](https://linkedin.com/in/mostafa-abdelnasser)