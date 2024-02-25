FROM node:18-alpine

WORKDIR /app

# Copy only the package.json and package-lock.json to leverage Docker cache
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables
ARG API_ENDPOINT
ARG PUBLIC_API_ENDPOINT
ENV API_ENDPOINT=$API_ENDPOINT
ENV PUBLIC_API_ENDPOINT=$PUBLIC_API_ENDPOINT

# Command to run the application
CMD ["npm", "run", "dev"]
