# Imagen base
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos del proyecto
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Puerto expuesto
EXPOSE 3000

# Comando por defecto (si no se redefine en docker-compose)
CMD ["npm", "src/index.js"]
