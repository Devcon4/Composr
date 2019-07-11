FROM node

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY src ./src

COPY eco.prod.json ./

RUN npm install pm2 parcel typescript -g

RUN npm ci --only=production

RUN npm run build

# Bundel app source
COPY . .

EXPOSE 3000

CMD ["pm2-runtime", "eco.prod.json", "--only", "composr"]

# Build image
# docker build -t <your username>/composr .

# Run image
# docker run -p 49160:8080 -d <your username>/composr

# Push to repo
# docker tag local-image:tagname new-repo:tagname
# docker push new-repo:tagname