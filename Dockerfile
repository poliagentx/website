FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# ✅ Make local node_modules/.bin available in PATH
ENV PATH="/app/node_modules/.bin:$PATH"

# ✅ Run Tailwind build
RUN npm run build


FROM nginx:alpine

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
