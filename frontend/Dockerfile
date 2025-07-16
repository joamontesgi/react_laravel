FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de archivos
COPY . .

# Exponer el puerto por defecto de React
EXPOSE 3000

CMD ["npm", "start"]
