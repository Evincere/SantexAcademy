# Aplicación de Encuestas - Documentación

Esta aplicación de encuestas está diseñada para recopilar y gestionar datos de encuestas de turistas que visitan Mina Clavero. Hasta ahora, se ha desarrollado lo siguiente:

## Funcionalidades Implementadas

### Autenticación de Usuarios
- Se ha implementado un sistema de autenticación de usuarios.
- Los usuarios pueden iniciar sesión en la aplicación proporcionando sus credenciales.
- La autenticación se realiza mediante una solicitud HTTP al servidor backend.
- Se utiliza un `AuthService` para gestionar la autenticación de usuarios.

### Panel de Control del Usuario
- Se ha creado un panel de control de usuario que contiene varias secciones.
- El acceso al panel de control está restringido a usuarios autenticados.
- Las secciones actuales incluyen:
  - Inicio: Página principal del panel de control.
  - Encuesta: Permite a los usuarios completar encuestas.
  - Usuarios: Permite a los administradores gestionar usuarios.

### Gestión de Encuestas
- Se ha implementado la funcionalidad de completar encuestas en la sección de "Encuesta".
- Los usuarios pueden responder preguntas de la encuesta y enviar sus respuestas al servidor.
- Las respuestas se almacenan y procesan en el backend.

### RoleGuard
- Se ha implementado un `RoleGuard` personalizado para restringir el acceso a ciertas rutas y funcionalidades según los roles de usuario.
- Por ejemplo, los administradores pueden acceder a la gestión de usuarios y encuestas, mientras que los usuarios normales solo pueden completar encuestas.

## Próximos Pasos

A continuación, se mencionan los próximos pasos para el desarrollo de la aplicación:

### Mejoras en la Autenticación
- Implementar recuperación de contraseña.
- Permitir a los usuarios cambiar sus contraseñas.
- Añadir funciones de registro de nuevos usuarios.

### Ampliación de la Gestión de Encuestas
- Desarrollar una sección de administración de encuestas para que los administradores puedan ver y analizar los datos de encuestas completadas.

### Refinamiento del Sistema de Roles
- Extender el sistema de roles para incluir roles adicionales si es necesario.
- Personalizar aún más el `RoleGuard` para manejar estos roles adicionales.

## Cómo Ejecutar la Aplicación

Si deseas ejecutar esta aplicación en tu entorno local, sigue estos pasos:

1. Clona el repositorio desde GitHub.
2. Instala las dependencias utilizando `npm install`.
3. Configura la URL del servidor backend en el archivo de entorno (`environment.ts`).
4. Ejecuta la aplicación usando `ng serve`.
5. Abre tu navegador y accede a `http://localhost:4200` para ver la aplicación en funcionamiento.

Recuerda que la aplicación actual está en desarrollo y se están trabajando constantemente en nuevas características y mejoras.

¡Gracias por tu interés en nuestra aplicación de encuestas!
