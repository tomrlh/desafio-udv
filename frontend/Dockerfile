# Imagem de Origem
FROM node:12

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app

# Adicionando `/app/node_modules/.bin` para o $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
COPY . /app
RUN npm install --silent
# RUN npm audit fix --silent
RUN npm install react-scripts@3.4.4 -g --silent

# start app
CMD ["npm", "start"]