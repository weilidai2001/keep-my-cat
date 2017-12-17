FROM node:9.2.0-alpine

WORKDIR /usr/src/app

RUN npm install http-server -g

# Set environment
ENV PORT 8099

# Import source files
COPY build .

# Expose server port
EXPOSE $PORT

# Run it
CMD [ "http-server", "-p", "8099" ]