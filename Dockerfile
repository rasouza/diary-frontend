
FROM nginx:latest

COPY build/ /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html/