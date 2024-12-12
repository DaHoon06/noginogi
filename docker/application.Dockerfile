# 베이스 이미지 선택 node 20
# Stage 1. Install
FROM node:20-alpine AS builder

ENV TZ="Asia/Seoul"

## 사용할 디렉토리는 app
RUN mkdir -p /app
## app으로 이동
WORKDIR /app

COPY ../application/package*.json .