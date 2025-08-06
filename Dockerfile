# 1. Use official Node.js base image for building
FROM node:20-alpine AS builder

# 2. Install dos2unix for Windows line endings (optional)
RUN apk add --no-cache dos2unix

# 3. Set working directory
WORKDIR /app

# 4. Install dependencies
COPY package*.json ./
RUN npm install

# 5. Copy the rest of the source
COPY . .

# 6. Fix permissions (optional if you had issues on Windows)
RUN dos2unix node_modules/.bin/vite && chmod +x node_modules/.bin/vite

# 7. Build the production files
RUN npm run build

# 8. Use Nginx to serve the app
FROM nginx:alpine

# 9. Copy built files to Nginx default directory
COPY --from=builder /app/dist /usr/share/nginx/html

# 10. Expose the correct Nginx port
EXPOSE 8080

# 11. Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
