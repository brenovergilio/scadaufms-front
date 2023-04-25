FROM node:16 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/scadaufms-front /usr/share/nginx/html
EXPOSE 80
