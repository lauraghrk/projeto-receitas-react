FROM node:alpine3.17 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
WORKDIR /app
COPY --from=builder /app/dist /app/static
COPY ./nginx.conf /etc/nginx/nginx.conf
