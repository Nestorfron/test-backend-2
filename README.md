# TEST2

# instalar las dependencias

npm init -y
npm install express sequelize pg pg-hstore dotenv
npm install --save-dev sequelize-cli nodemon
npm install bcryptjs express-validator cors helmet

# crear archivo .env y archivo .gitignore



# Crea la estrucruta de la base de datos (config, models, migrations, y seeders.)

npx sequelize init

# crear archivo config.js dentro de carpeta config

# crear carpeta routes

# crear carpeta controllers

# crear modelo y migración de la tabla

npx sequelize-cli model:generate --name Usuario --attributes nombre:string,correo:string,contraseña:string

# Crea una migración

npx sequelize migration:generate --name create-nombre_de_tabla 

# crear base de datos

npx sequelize-cli db:create

# Ejecutar las migraciones

npx sequelize-cli db:migrate 

# Esto revertirá todas las migraciones

npx sequelize-cli db:migrate:undo:all 


# estructura

/my-project
│
├── /config
│   ├── config.js            # Configuración de la base de datos
│   ├── database.js          # Conexión a la base de datos
│
├── /models
│   ├── Usuario.js          # Modelo de Usuario
│
├── /controllers            # Lógica de negocio (controladores)
│   ├── usuarioController.js
│
├── /routes                 # Definición de rutas
│   ├── usuarioRoutes.js
│
├── /migrations             # Migraciones de Sequelize
│   ├── 20230101000000-create-usuario.js
│   
├── /middlewares            # Middleware para validaciones, autenticación, etc.
│   ├── authMiddleware.js
│
├── /services               # Servicios adicionales (ejemplo: manejo de notificaciones, etc.)
│
├── app.js                  # Archivo principal de la aplicación
├── package.json            # Dependencias y scripts del proyecto
└── .env                    # Archivo de configuración de entorno
# test-backend-2
