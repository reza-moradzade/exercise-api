# استفاده از Bun image
FROM oven/bun:1.2.2 AS builder

WORKDIR /app

# کپی فایل‌های پروژه
COPY package*.json ./
COPY bun.lockb ./

# نصب وابستگی‌ها با Bun
RUN bun install

COPY . .

# بیلد پروژه
RUN bun run build

# مرحله نهایی
FROM oven/bun:1.2.2-slim

WORKDIR /app

# کپی فایل‌های بیلد شده
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src/data ./src/data
COPY --from=builder /app/media ./media

# پورت
EXPOSE 3001

# اجرا با Bun
CMD ["bun", "run", "start"]
