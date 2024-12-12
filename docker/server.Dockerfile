FROM node:20-alpine AS builder

ENV TZ="Asia/Seoul"

WORKDIR /app

COPY ../server/package*.json ./

RUN npm i

COPY ../../server .

RUN npm run build

ENV NODE_ENV prodcution

FROM node:20-alpine

COPY ../server/package*.json ./

RUN npm install --production

COPY --from=builder /app/dist ./dist

COPY ../../server/.env.production ./.env.production

ENV NODE_ENV production

EXPOSE 8080

CMD ["npm", "run", "start"]