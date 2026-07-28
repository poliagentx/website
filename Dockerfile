# 1. Use official Node.js base image for building
FROM node:20-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the source code
COPY . .

# 5. Build the production files
RUN npm run build


# 6. Use Nginx to serve the app
FROM nginx:alpine

# 7. Copy built files to Nginx default directory
COPY --from=builder /app/dist /usr/share/nginx/html

# 8. Expose Nginx port
EXPOSE 80

# 9. Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]