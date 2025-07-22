# Tumia Node.js Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Nakili kila kitu
COPY . .

# Set env ili devDependencies ziingizwe
ENV NODE_ENV=development

# Install dependencies zote
RUN npm install

# Install live-server globally
RUN npm install -g live-server

# Build Tailwind output.css
RUN npx tailwindcss -i ./input.css -o ./dist/output.css --minify


# Fungua port
EXPOSE 8080

# Serve project including Assets
CMD ["live-server", "--port=8080", "--watch=.", "--open=index.html"]
