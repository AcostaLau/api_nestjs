FROM --platform=linux/amd64 node:alpine
COPY ./ /app/
WORKDIR /app
RUN npm i
RUN npm run build
EXPOSE 3000