# Configuración de Variables de Entorno en Netlify

## Problema: Descargas no funcionan en producción

### Causas identificadas:

1. **Variables de entorno no configuradas en Netlify**
2. **Problemas de CORS al descargar archivos de servidores externos**
3. **Comportamiento errático del botón al cambiar pestañas**

### Soluciones implementadas:

#### 1. Función de descarga mejorada
- Cambio de `<a>` a `<button>` con manejador personalizado
- Descarga usando `fetch()` y `Blob` para mejor control
- Fallback automático a `window.open()` si falla la descarga directa

#### 2. Estilos optimizados
- Eliminado gradiente complejo que causaba comportamiento errático
- Transiciones simplificadas y más estables
- Mejor feedback visual

#### 3. Configuración de Netlify mejorada
- Headers de seguridad añadidos en `netlify.toml`

### Configuración requerida en Netlify:

#### Paso 1: Acceder a la configuración del sitio
1. Ve a [Netlify Dashboard](https://app.netlify.com)
2. Selecciona tu sitio
3. Ve a **Site settings** → **Environment variables**

#### Paso 2: Añadir variables de entorno
Añade la siguiente variable:

```
Key: VITE_API_URL
Value: https://observabackend-h5xw.onrender.com/api/v1
```

#### Paso 3: Redesplegar
1. Ve a **Deploys**
2. Click en **Trigger deploy** → **Clear cache and deploy site**

### Verificación en producción:

Después del despliegue, verifica:

1. ✅ Las sesiones de gobernanza se cargan correctamente
2. ✅ El botón "Descargar" responde al click
3. ✅ El archivo se descarga o abre en nueva pestaña
4. ✅ No hay errores en la consola del navegador (F12)

### Notas adicionales:

**Si las descargas siguen fallando:**

1. Verifica que las URLs en la base de datos sean absolutas (incluyan `http://` o `https://`)
2. Revisa la consola del navegador para errores de CORS
3. Verifica que el servidor de archivos (`observabackend`) tenga configurados los headers CORS correctamente:
   ```
   Access-Control-Allow-Origin: *
   Access-Control-Allow-Methods: GET, OPTIONS
   ```

**Para depurar:**
- Abre la consola del navegador (F12)
- Ve a la pestaña Network
- Intenta descargar un archivo
- Revisa si hay errores 403, 404 o CORS

### Archivo de referencia creado:
- `.env.example` - Muestra las variables de entorno necesarias
