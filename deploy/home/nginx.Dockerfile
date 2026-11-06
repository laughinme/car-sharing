FROM nginx:1.29-alpine
COPY deploy/home/nginx.conf /etc/nginx/conf.d/default.conf
