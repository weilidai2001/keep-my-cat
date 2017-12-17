FROM node:9.2.0-alpine

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install http-server -g

# Set environment
ENV PORT 8099

# Import source files
COPY build .

# Expose server port
EXPOSE $PORT

# Run it
CMD [ "http-server", "-p", "8099" ]