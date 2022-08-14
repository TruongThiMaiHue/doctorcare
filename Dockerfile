FROM node:14.17.0-alpine AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json package-lock.json ./
COPY package*.json ./
# COPY ENV variable

# COPY tsconfig.json file

# Install app dependencies
RUN npm install

# COPY . .

# # RUN npx prisma db push

# RUN npm run build

# FROM node:14.17.0-alpine

# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/tsconfig.build.json ./
# COPY --from=builder /app/dist ./dist

EXPOSE 3001

CMD [ "npm", "start" ]