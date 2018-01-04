FROM nginx:alpine

WORKDIR /usr/src/app

COPY nginx.conf /etc/nginx/nginx.conf

# Set environment
ENV PORT 80

# Import source files
COPY build .

# Expose server port
EXPOSE $PORT