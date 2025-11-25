# frontend/Dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# dev server, accessible from host
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
