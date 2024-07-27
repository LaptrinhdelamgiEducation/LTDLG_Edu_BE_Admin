FROM oven/bun:canary-alpine AS build
WORKDIR /admin-build
COPY . .
RUN bun install

ENTRYPOINT [ "bun", "start" ]