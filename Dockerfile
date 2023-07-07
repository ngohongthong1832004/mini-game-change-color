# Base image for building the React app
FROM node:12 as build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Production image for serving the static files with Nginx
FROM nginx:alpine

# Copy the static files from the build stage to the Nginx server
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY ./default.conf /etc/nginx/conf.d/default.conf


# Expose port 80 to the Docker host, so we can access it from the outside
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
