FROM node:18-alpine as build

WORKDIR /app

COPY package.*json .

RUN npm i

COPY . .

ARG VITE_SERVER_URL
ENV VITE_SERVER_URL=$VITE_SERVER_URL
ARG VITE_APP_TYPE
ENV VITE_APP_TYPE=$VITE_APP_TYPE
ARG VITE_SERVER_STATIC_URL
ENV VITE_SERVER_STATIC_URL=$VITE_SERVER_STATIC_URL
ARG VITE_BOT_URL
ENV VITE_BOT_URL=$VITE_BOT_URL

RUN npm run build

FROM nginx:stable

COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]