FROM node:22-alpine
# create app directory inside the container
WORKDIR /app 
# Prisma needs OpenSSL on slim images
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
# means copy all file start from package and ends on json (.) means into current directory
COPY package*.json . 
Run npm ci
# First dot means your working directory and second means docker working directory
COPY . .
# Generate the Prisma client
RUN npx prisma generate
Run npm run build
EXPOSE 3000
# to start
CMD ["node", "dist/main"]