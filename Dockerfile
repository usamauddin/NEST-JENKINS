FROM node:18-alpine
# create app directory inside the container
WORKDIR /app 
# means copy all file start from package and ends on json (.) means into current directory
COPY package*.json . 
Run npm install
# First dot means your working directory and second means docker working directory
COPY . .
Run npm run build
EXPOSE 3000
# to start
CMD ["node", "dist/main"]