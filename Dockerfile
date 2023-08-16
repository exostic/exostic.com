FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@9.8.1
RUN npm install
COPY . .
RUN ls .
RUN npm run build -- --mode custom

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
