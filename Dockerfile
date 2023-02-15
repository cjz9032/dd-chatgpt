FROM node:19 AS app

RUN apt-get install -y wget \ 
    && apt-get update \
    && rm -rf /var/lib/apt/lists/* \
WORKDIR /app
COPY package*.json ./
RUN npm ci > a &&\
    npm run build > b &&
COPY . .

CMD npm run serve
