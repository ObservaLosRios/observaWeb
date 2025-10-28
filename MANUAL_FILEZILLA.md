# Manual de Usuario - FileZilla SFTP

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Instalación de FileZilla](#instalación-de-filezilla)
3. [Conexión a un servidor SFTP](#conexión-a-un-servidor-sftp)
4. [Navegación por la interfaz](#navegación-por-la-interfaz)
5. [Crear directorios](#crear-directorios)
6. [Subir archivos](#subir-archivos)
7. [Descargar archivos](#descargar-archivos)
8. [Solución de problemas comunes](#solución-de-problemas-comunes)

---

## Introducción

FileZilla es un cliente FTP/SFTP gratuito y de código abierto que permite transferir archivos entre tu computadora local y un servidor remoto de forma segura. Este manual te guiará paso a paso en el uso de FileZilla para conectarte mediante SFTP (SSH File Transfer Protocol).

**[Placeholder: Captura de pantalla de la interfaz principal de FileZilla]**

---

## Instalación de FileZilla

### Paso 1: Descargar FileZilla

1. Visita el sitio web oficial: [https://filezilla-project.org](https://filezilla-project.org)
2. Haz clic en "Download FileZilla Client"
3. Selecciona la versión correspondiente a tu sistema operativo (Windows, macOS o Linux)

**[Placeholder: Captura de pantalla de la página de descarga de FileZilla]**

### Paso 2: Instalar FileZilla

1. Ejecuta el archivo descargado
2. Sigue las instrucciones del asistente de instalación
3. Acepta los términos y condiciones
4. Selecciona la ruta de instalación (se recomienda dejar la predeterminada)
5. Haz clic en "Instalar" y espera a que finalice el proceso

**[Placeholder: Capturas del proceso de instalación]**

---

## Conexión a un servidor SFTP

### Método 1: Conexión Rápida

Este método es ideal para conexiones ocasionales.

#### Paso 1: Abrir FileZilla

Ejecuta FileZilla desde tu menú de aplicaciones o escritorio.

**[Placeholder: Icono de FileZilla en el escritorio]**

#### Paso 2: Ingresar credenciales en la barra de conexión rápida

En la parte superior de FileZilla encontrarás la barra de "Conexión Rápida". Completa los siguientes campos:

- **Servidor**: Dirección IP o dominio del servidor (ejemplo: `38.7.201.62` o `server.observalosrios.cl`)
- **Usuario**: Tu nombre de usuario SSH
- **Contraseña**: Tu contraseña SSH
- **Puerto**: 22 (puerto predeterminado para SFTP)

**[Placeholder: Captura de la barra de conexión rápida con campos completados]**

#### Paso 3: Conectar

1. Haz clic en el botón "Conexión rápida"
2. Si es la primera vez que te conectas a este servidor, aparecerá un mensaje de advertencia sobre la clave del host desconocida
3. Lee el mensaje y marca la casilla "Confiar siempre en este servidor" si deseas evitar este mensaje en futuras conexiones
4. Haz clic en "Aceptar"

**[Placeholder: Captura del diálogo de clave de host desconocida]**

#### Paso 4: Verificar la conexión

Si la conexión es exitosa, verás:
- Un mensaje en el registro de actividad indicando "Listado de directorio exitoso"
- Los archivos del servidor aparecerán en el panel derecho

**[Placeholder: Captura de conexión exitosa con listado de archivos]**

---

### Método 2: Gestor de Sitios (Recomendado)

Este método guarda las credenciales para conexiones frecuentes.

#### Paso 1: Abrir el Gestor de Sitios

1. Haz clic en el menú "Archivo" → "Gestor de sitios"
   - O usa el atajo de teclado: `Ctrl + S` (Windows/Linux) o `Cmd + S` (macOS)
   - O haz clic en el icono de servidor en la barra de herramientas

**[Placeholder: Captura mostrando cómo acceder al Gestor de Sitios]**

#### Paso 2: Crear un nuevo sitio

1. En la ventana del Gestor de Sitios, haz clic en "Nuevo sitio"
2. Asigna un nombre descriptivo (ejemplo: "Servidor ObservaLosRios")

**[Placeholder: Captura del botón "Nuevo sitio"]**

#### Paso 3: Configurar los datos de conexión

Completa la siguiente información en la pestaña "General":

**Protocolo:**
- Selecciona "SFTP - SSH File Transfer Protocol" del menú desplegable

**Servidor:**
- Ingresa la dirección IP o dominio (ejemplo: `server.observalosrios.cl`)

**Puerto:**
- Deja el valor 22 (predeterminado para SFTP)

**Modo de acceso:**
- Selecciona "Normal"

**Usuario:**
- Ingresa tu nombre de usuario SSH

**Contraseña:**
- Ingresa tu contraseña (opcional, si la dejas vacía, FileZilla la pedirá al conectar)

**[Placeholder: Captura de la configuración completa del sitio]**

#### Paso 4: Configuraciones avanzadas (Opcional)

En la pestaña "Avanzado" puedes configurar:
- **Directorio remoto predeterminado**: Carpeta que se abrirá al conectar (ejemplo: `/var/www/`)
- **Directorio local predeterminado**: Carpeta de tu computadora que se mostrará al conectar

**[Placeholder: Captura de la pestaña Avanzado]**

#### Paso 5: Guardar y conectar

1. Haz clic en "Conectar" para establecer la conexión inmediatamente
   - O haz clic en "Aceptar" para guardar sin conectar
2. Si es la primera conexión, acepta la clave del host como se explicó anteriormente

**[Placeholder: Captura del botón Conectar en el Gestor de Sitios]**

---

## Navegación por la interfaz

FileZilla divide su interfaz en varias secciones:

### Componentes principales

**[Placeholder: Captura de la interfaz completa con números identificando cada sección]**

1. **Barra de conexión rápida**: Para conexiones rápidas sin guardar
2. **Registro de mensajes**: Muestra el estado de las conexiones y transferencias
3. **Panel izquierdo (Local)**: Archivos y carpetas de tu computadora
4. **Panel derecho (Remoto)**: Archivos y carpetas del servidor
5. **Cola de transferencias**: Muestra los archivos en proceso de transferencia
6. **Estado de transferencias**: Información sobre transferencias completadas y fallidas

### Navegación básica

- **Doble clic** en una carpeta para abrirla
- **Botón de flecha hacia arriba** (↑) para subir un nivel en la jerarquía de carpetas
- **Clic derecho** en archivos o carpetas para ver opciones adicionales

**[Placeholder: Captura mostrando la navegación por carpetas]**

---

## Crear directorios

### Método 1: Clic derecho

#### Paso 1: Navegar a la ubicación deseada

En el panel remoto (derecho), navega hasta la carpeta donde deseas crear el nuevo directorio.

**[Placeholder: Captura navegando a la ubicación]**

#### Paso 2: Crear directorio

1. Haz **clic derecho** en un espacio vacío del panel remoto
2. Selecciona **"Crear directorio"** del menú contextual

**[Placeholder: Captura del menú contextual con opción "Crear directorio"]**

#### Paso 3: Nombrar el directorio

1. Aparecerá una ventana solicitando el nombre del directorio
2. Ingresa el nombre deseado (ejemplo: `proyecto-web`)
3. Haz clic en "Aceptar"

**[Placeholder: Captura del diálogo para ingresar el nombre del directorio]**

#### Paso 4: Verificar la creación

El nuevo directorio aparecerá en la lista del panel remoto.

**[Placeholder: Captura del nuevo directorio creado]**

---

### Método 2: Menú superior

1. Asegúrate de estar en la ubicación correcta en el panel remoto
2. Haz clic en el menú **"Servidor"** → **"Crear directorio"**
3. Ingresa el nombre y confirma

**[Placeholder: Captura del menú Servidor con opción Crear directorio]**

---

## Subir archivos

### Método 1: Arrastrar y soltar (Más sencillo)

#### Paso 1: Preparar el entorno

1. En el **panel izquierdo** (local), navega hasta la carpeta que contiene los archivos a subir
2. En el **panel derecho** (remoto), navega hasta la carpeta destino en el servidor

**[Placeholder: Captura mostrando ambos paneles preparados]**

#### Paso 2: Seleccionar archivos

- **Un archivo**: Haz clic sobre él
- **Múltiples archivos consecutivos**: Haz clic en el primero, mantén presionada la tecla `Shift` y haz clic en el último
- **Múltiples archivos no consecutivos**: Mantén presionada la tecla `Ctrl` (Windows/Linux) o `Cmd` (macOS) mientras haces clic en cada archivo
- **Todos los archivos**: Presiona `Ctrl + A` (Windows/Linux) o `Cmd + A` (macOS)

**[Placeholder: Captura mostrando archivos seleccionados]**

#### Paso 3: Arrastrar

1. Haz clic y mantén presionado sobre los archivos seleccionados
2. Arrastra hacia el panel derecho (remoto)
3. Suelta el botón del ratón

**[Placeholder: Captura del proceso de arrastrar archivos]**

#### Paso 4: Monitorear la transferencia

- La **cola de transferencias** (parte inferior) mostrará el progreso
- Un icono verde indica transferencia exitosa
- Un icono rojo indica error en la transferencia

**[Placeholder: Captura de la cola de transferencias con archivos en proceso]**

---

### Método 2: Clic derecho

#### Paso 1: Seleccionar archivos

En el panel local (izquierdo), selecciona los archivos o carpetas que deseas subir.

#### Paso 2: Subir

1. Haz **clic derecho** sobre la selección
2. Selecciona **"Subir"** del menú contextual
3. Los archivos se transferirán a la ubicación actual del panel remoto

**[Placeholder: Captura del menú contextual con opción "Subir"]**

---

### Método 3: Doble clic

Para subir archivos individuales rápidamente:
1. Asegúrate de estar en la carpeta destino correcta en el panel remoto
2. Haz **doble clic** sobre el archivo en el panel local
3. El archivo se subirá automáticamente

**[Placeholder: Captura de un archivo siendo subido con doble clic]**

---

### Subir carpetas completas

FileZilla puede subir carpetas completas con todo su contenido:

1. Selecciona la carpeta en el panel local
2. Arrástrale al panel remoto (o usa clic derecho → "Subir")
3. FileZilla recreará la estructura de carpetas automáticamente

**[Placeholder: Captura de una carpeta siendo subida con su estructura]**

---

### Gestión de conflictos

Si subes un archivo que ya existe en el servidor, FileZilla preguntará qué hacer:

- **Sobrescribir**: Reemplaza el archivo existente
- **Sobrescribir si el archivo origen es más nuevo**: Solo reemplaza si el archivo local es más reciente
- **Omitir**: No sube el archivo
- **Renombrar**: Asigna un nuevo nombre al archivo
- **Reanudar**: Continúa una transferencia interrumpida

Puedes marcar "Aplicar solo a esta dirección" o "Aplicar a la cola actual" para aplicar la acción a todos los archivos.

**[Placeholder: Captura del diálogo de conflicto de archivos]**

---

## Descargar archivos

El proceso de descarga es similar al de subida, pero en dirección inversa:

### Método 1: Arrastrar y soltar

1. Selecciona archivos o carpetas en el **panel remoto** (derecho)
2. Arrástralos al **panel local** (izquierdo)

**[Placeholder: Captura arrastrando archivos del servidor al local]**

### Método 2: Clic derecho

1. Selecciona archivos en el panel remoto
2. Clic derecho → **"Descargar"**

**[Placeholder: Captura del menú contextual con opción "Descargar"]**

### Método 3: Doble clic

Haz doble clic en un archivo del panel remoto para descargarlo a la carpeta local actual.

---

## Solución de problemas comunes

### Error: "Conexión rechazada"

**Causas posibles:**
- Puerto incorrecto (verifica que sea 22 para SFTP)
- Firewall bloqueando la conexión
- Servidor SSH no está ejecutándose

**Solución:**
- Verifica que el puerto sea 22
- Comprueba que el servidor SSH esté activo: `sudo systemctl status ssh`
- Revisa las reglas del firewall

**[Placeholder: Captura del error de conexión rechazada]**

---

### Error: "Autenticación fallida"

**Causas posibles:**
- Usuario o contraseña incorrectos
- Permisos de usuario insuficientes

**Solución:**
- Verifica las credenciales
- Confirma que el usuario tenga acceso SSH al servidor
- Intenta conectarte por terminal SSH para verificar: `ssh usuario@servidor`

**[Placeholder: Captura del error de autenticación]**

---

### Error: "Tiempo de espera agotado"

**Causas posibles:**
- Dirección IP o dominio incorrecto
- Problemas de red o conectividad
- Servidor caído

**Solución:**
- Verifica la dirección del servidor con `ping servidor`
- Comprueba tu conexión a internet
- Contacta al administrador del servidor

**[Placeholder: Captura del error de timeout]**

---

### No puedo crear carpetas o subir archivos

**Causas posibles:**
- Permisos insuficientes en el directorio
- Espacio en disco lleno

**Solución:**
- Verifica los permisos del directorio en el servidor
- Comprueba el espacio disponible: `df -h`
- Contacta al administrador para ajustar permisos

---

### La transferencia se interrumpe constantemente

**Causas posibles:**
- Conexión a internet inestable
- Archivos muy grandes con timeout corto

**Solución:**
- Edita → Configuración → Conexión → Aumenta el timeout
- Edita → Configuración → Transferencias → Limita el número de conexiones simultáneas
- Usa una conexión más estable

**[Placeholder: Captura de la configuración de timeouts]**

---

## Consejos adicionales

### Uso de marcadores

Puedes guardar ubicaciones frecuentes:
1. Navega a la carpeta deseada en el panel remoto
2. Clic derecho → "Añadir directorio a marcadores"
3. Accede rápidamente desde el menú "Marcadores"

**[Placeholder: Captura del menú de marcadores]**

---

### Editar archivos remotos

FileZilla permite editar archivos directamente:
1. Clic derecho en un archivo remoto → "Ver/Editar"
2. El archivo se abre en tu editor predeterminado
3. Al guardar, FileZilla pregunta si deseas subir los cambios

**[Placeholder: Captura del menú Ver/Editar]**

---

### Sincronización de directorios

Para mantener sincronizadas carpetas locales y remotas:
1. Menú "Archivo" → "Navegación sincronizada"
2. Activa la opción
3. Al cambiar de carpeta en un panel, el otro panel se ajusta automáticamente

**[Placeholder: Captura de navegación sincronizada]**

---

## Conclusión

FileZilla es una herramienta poderosa y fácil de usar para gestionar archivos en servidores remotos mediante SFTP. Con esta guía has aprendido a:

✅ Conectarte a un servidor SFTP  
✅ Navegar por la interfaz  
✅ Crear directorios  
✅ Subir y descargar archivos  
✅ Resolver problemas comunes  

Para más información, visita la documentación oficial de FileZilla: [https://wiki.filezilla-project.org](https://wiki.filezilla-project.org)

---

**Versión del manual:** 1.0  
**Fecha:** Octubre 2025  
**Proyecto:** ObservaLosRíos
