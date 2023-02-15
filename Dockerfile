FROM node:19 AS app

RUN apt-get install -y wget \ 
    && apt-get update \
    && rm -rf /var/lib/apt/lists/* \
WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . .
RUN npm run build

CMD npm run dev
