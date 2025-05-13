FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Set environment variable for React build
ENV REACT_APP_API_URL=http://backend-service:5000

# Set Node options for OpenSSL compatibility
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

# Production environment
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]