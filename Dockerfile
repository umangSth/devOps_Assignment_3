# Use a Node.js base image
FROM node:16

# set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to thw working directory 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . . 

# Expose the port that your app runs on
EXPOSE 3000

# Command to run your app
CMD ["node", "app.js"]