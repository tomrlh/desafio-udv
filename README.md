# desafio-udv

## Stack utilizada

Frontend com ReactJS![Screenshot from 2021-04-28 04-42-02](https://user-images.githubusercontent.com/7242326/116444369-0a039880-a82b-11eb-8c6e-a85896c40568.png)
, banco de dados com MySQl (com Docker) e backend com Laravel como API

### Requerimentos para rodar localmente

- Docker
- ambiente PHP/Laravel configurado

## Instalando o Frontend

### com Docker

1 ```cd frontend```

2 docker ```build -t desafio-udv-frontend .```

3 ```sudo docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm desafio-udv-frontend```

4 acessar ```localhost:3001```

### com NPM

1 ```npm install```

2 ```npm start```

3 acessar ```localhost:3000```

## Instalando o Backend

1 ```composer install```

2 ```php artisan key:generate```

3 ```php artisan migrate```

4 ```php artisan db:seed --class=DatabaseSeeder```

5 ```php artisan serve```

## Instalando o Banco de Dados

1 ```docker run --name desafio-udv-db -d -e MYSQL_ROOT_PASSWORD=mysql -p 3306:3306 mysql:latest```

2 criar um banco com nome ```desafio-udv``` ou de acordo com o ```.env``` do Laravel

## Demo das telas

![Screenshot from 2021-04-28 04-42-02](https://user-images.githubusercontent.com/7242326/116444396-0ff97980-a82b-11eb-8c78-23a710a34eae.png)

![Screenshot from 2021-04-28 04-42-11](https://user-images.githubusercontent.com/7242326/116444417-1556c400-a82b-11eb-9ccf-27ff8ea38aeb.png)

![Screenshot from 2021-04-28 04-47-03](https://user-images.githubusercontent.com/7242326/116444437-1ab40e80-a82b-11eb-8229-e7c1140d186e.png)

![Screenshot from 2021-04-28 04-43-57](https://user-images.githubusercontent.com/7242326/116444456-1daeff00-a82b-11eb-9597-906ffe66b5e1.png)
