FROM mcr.microsoft.com/playwright:v1.59.1-noble

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV CI=true
ENV BASE_URL=https://www.progressive.com

CMD ["npm", "run", "test:e2e"]
