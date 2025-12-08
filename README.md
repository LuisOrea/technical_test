# Prueba Técnica - Sistema de Reclutas

Este proyecto consiste en un sistema para gestionar la información de reclutas. Incluye registro de reclutas con información completa, consulta por matrícula, visualización de información personal, física, médica, militar, educativa y documental, manejo de errores y loaders durante las operaciones. El backend está implementado con Spring Boot y el frontend con React. Se utiliza React Router para la navegación, Axios para las solicitudes HTTP y Context API para el manejo del estado global. El backend usa H2 en memoria para la base de datos, Spring Data JPA para el acceso a datos y se expone la API en `http://localhost:8080/api/recruits`.

## Estructura del proyecto
**Frontend (React):**  
`src/components/` → Componentes reutilizables como Nav, Loader, InfoSections.  
`src/context/` → AuthProvider para el estado global (loader, error, datos del recluta).  
`src/pages/` → Páginas principales: Home.jsx, Register.jsx, PersonalInfo.jsx.  
`src/services/` → Servicios de conexión a la API: DataService.jsx, TuitionService.jsx.  

**Backend (Spring Boot):**  
`src/main/java/...` → Controladores, servicios y repositorios.  
H2 Database en memoria (`jdbc:h2:mem:reclutadb`).  
Endpoints:  
- `GET /api/recruits` → Obtener todos los reclutas.  
- `GET /api/recruits/{tuition}` → Obtener un recluta por matrícula.  
Tomcat corriendo en puerto 8080.

## Requisitos
Node.js >= 18, npm >= 9, Java 21, Maven, Git.

## Instalación y ejecución
1. Clonar el repositorio:  
git clone <URL_DEL_REPOSITORIO>

2. Backend:

- Entrar a la carpeta del backend:
- cd backEnd-Test
- mvn clean install
- mvn spring-boot:run

La API estará disponible en http://localhost:8080/api/recruits y la base de datos es H2 en memoria (jdbc:h2:mem:reclutadb).

3. Frontend:

Entrar a la carpeta del frontend:

`cd FrontEnd`


Instalar dependencias:

`npm install`


Ejecutar la aplicación:

`npm run dev`


Abrir en el navegador: `http://localhost:5173`.

## Uso del sistema

- Registro de reclutas: Ir a la página Register y llenar todos los campos obligatorios. Campos opcionales: checkboxes de documentación y historial médico. - Al enviar, los datos se guardan y los campos se vacían automáticamente. Se muestra un loader mientras se procesa el envío.

- Consulta por matrícula: Ir a la página PersonalInfo o buscar en Home para consultar la información de un recluta específico. Se muestra un loader mientras se cargan los datos.

- Visualización: Toda la información se organiza en secciones: básica, contacto, física/medica, militar, educación/habilidades y documentos.

## Nota

- Se creó una API con Spring Boot.

- Base de datos H2 en memoria para pruebas rápidas.

- Frontend y backend corren en puertos diferentes (5173 para React, 8080 para Spring Boot), por lo que se debe tener ambos corriendo.

- Pendientes: para producción, se recomienda configurar una base de datos persistente y ajustar CORS si se publica en dominios distintos.
```
