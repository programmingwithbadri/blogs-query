# Base image
FROM node:alpine 

# Working directory
WORKDIR /app

# copy the package.json to the app folder
COPY package.json ./

# Runs npm install to install dependencies
RUN npm install

# Copy all files into app folder
COPY ./ ./

# Runs default command npm start
CMD ["npm", "start"]