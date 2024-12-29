FROM node:18-alpine

# Install basic development tools
RUN apk add --no-cache \
    git \
    python3 \
    py3-pip \
    g++ \
    make \
    cmake

# Install global npm packages
RUN npm install -g nodemon typescript ts-node

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose ports
EXPOSE 3000

# Start command
CMD ["npm", "run", "dev"]