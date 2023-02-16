FROM node:19 AS app

WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . .

CMD npm run dev
