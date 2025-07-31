# 1. Use official Node.js base image
FROM node:20-alpine AS builder

# 2. Install dos2unix for fixing Windows line endings (if any)
RUN apk add --no-cache dos2unix

# 3. Set working directory
WORKDIR /app

# 4. Install dependencies
COPY package*.json ./
RUN npm install

# 5. Copy the rest of the source
COPY . .

# 6. Fix permission and line endings of vite binary
RUN dos2unix node_modules/.bin/vite && chmod +x node_modules/.bin/vite

# 7. Build using direct node call to bypass shell
RUN node node_modules/vite/bin/vite.js build

# 8. Use a lightweight web server to serve the app (e.g., nginx)
FROM nginx:alpine

# 9. Copy the build output to nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# 10. Expose the port and start nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
