FROM node:8.4-slim
ENV NPM_CONFIG_LOGLEVEL error
ARG TYPE
RUN mkdir /app
WORKDIR /app
RUN apt update && \
    apt install -y python make g++ git build-essential && \
    npm install -g pm2@2.7.1 && \
    git clone https://github.com/ChronoBank/io.chronobank.web.git && \
    git clone https://github.com/ChronoBank/io.chronobank.backend.git && \
    cd io.chronobank.web && \
    npm install eslint@^4.9.0 && \
    npm install --unsafe-perm=true && \
    npm install -g cross-env && \
    npm list && \
    npm run build:${TYPE} && \
    cd ../io.chronobank.backend && \
    yarn install --unsafe-perm=true
EXPOSE 3000 3001 3010 3011
RUN echo "test"
CMD pm2-docker start /app/ecosystem.config.js --env=production
