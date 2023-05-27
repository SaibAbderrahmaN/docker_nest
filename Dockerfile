# Use the official Node.js 16 image as the base
FROM node:16
# Set the working directory inside the container to /app
WORKDIR /app
# Copy the package.json file from the host to the container's working directory
COPY package.json .
# Use the NODE_ENV argument to determine the install command
# If NODE_ENV is "development", run "npm install" to install all dependencies
# If NODE_ENV is not "development", run "npm install --only=production" to install only production dependencies
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi
RUN apt-get update && apt-get install -y mongodb
# Copy all files and directories from the host to the container's working directory
COPY . ./

# Set the environment variable PORT to 3000
ENV PORT 3000

# Expose the port specified in the PORT environment variable
EXPOSE $PORT

# Set the command to run when the container starts
CMD ["npm", "start"]
