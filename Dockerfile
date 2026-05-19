# minimal Dockerfile
FROM node:20-alpine
WORKDIR /app
# build-time version arg
ARG APP_VERSION=dev
ENV APP_VERSION=$APP_VERSION
# bring in source
COPY server.js ./
USER node
EXPOSE 3000
CMD ["node", "server.js"]