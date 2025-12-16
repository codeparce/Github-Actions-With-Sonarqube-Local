# Github-Actions-With-Sonarqube
Manito aqui .. esto es un repo.. para.. que puedas aprender como implimentar Sonarqueb local con Github Actions

# Proyecto

El proyecto que estaremos anal - izando sera uno simple con react , con el comando `npm run dev` lo puedes ejecutal 

    |
    |- tres-en-raya

# .github

Se encuentra la automatizacion simple de clonar el repo, descargar dependencias y ejecutar el escaneo etc.

    |
    |- .git-hub
        |--- scancode.yml

# Sonarqube Local

Esta la definicion del Sonar en docker compose para poderlo levantar y gozar de mucho sexo

*Recomiendo levantar el sonar en un sub sistema debian, pa que copees y peguees*

```bash 
cd sonarqube-local
docker compose up -d 
docker compose logs -f


# si te da errores el sonar realiza el siguiente comando 
sudo sysctl -w vm.max_map_count=262144

#Para hacerlo permanente:
echo "vm.max_map_count=262144" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p

```

- Ya entrando al sonar, desde localhost:9000 debes de hacer unas configuraciones, ir al apartado de My acount  
  
![alt text](/res/1.png)

- Ir a security y generar un token global , el cual tienes que guardar para poderlo agregar in github

![alt text](/res/2.png)

![alt text](/res/3.png)

![alt text](/res/4.png)

# ngrok

- Crear una cuenta ngrok para hacer el enrutamiento, en la misma pagina te da los pasos, y en el paso 2 en ves de colocar puerto 80 pones el puerto 9000

https://dashboard.ngrok.com/get-started/setup/windows

![alt text](/res/7.png)

![alt text](/res/8.png)

- En github ir a la siguiente configuracion y agregas el token y la url donde esta alojado tu host (que en este ejemplo sera ngrok)

![alt text](/res/5.png)

![alt text](/res/6.png)

- y ya cuando hagas push a main podras mirar tu scan en el sonar qube local en rutado con ngrok con unaarquitecturastandalonelevantadocondockercomposeporqueesmassensilloqueusarkubernetesigualesunejemplosimnple
![alt text](11.png)

## Yyyy lisstoo con esto puedes follarte a la de recursos humanos 

![alt text](/res/10.png)