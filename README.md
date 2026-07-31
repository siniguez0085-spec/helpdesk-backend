# Help Desk System - Backend API

## 📝 Descripción
Este proyecto corresponde al desarrollo del backend para el **Sistema de Gestión de Incidentes (Help Desk)**, correspondiente a la **Actividad #8** de la asignatura Desarrollo de Sistemas Informáticos (DSI). 
El objetivo es exponer una API RESTful que permita realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre tickets de soporte, utilizando Node.js, Express y MongoDB.

## 🛠️ Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para la construcción de la API REST.
- **MongoDB**: Base de datos NoSQL para el almacenamiento de los tickets.
- **Mongoose**: ODM (Object Data Modeling) para la conexión y manejo de la base de datos.

## 📂 Estructura del Proyecto
```text
helpdesk-backend/
│
├── models/
│   └── Ticket.js          # Definición del esquema de la base de datos
│
├── routes/
│   └── ticketRoutes.js    # Definición de los endpoints (rutas) de la API
│
├── controllers/
│   └── ticketController.js # Lógica del negocio para cada endpoint
│
├── .env                    # Variables de entorno (puerto, conexión BD)
├── app.js                  # Archivo principal que inicia el servidor
└── package.json            # Dependencias del proyecto