# ⚠️ Problema: Descargas no funcionan en producción

## 🔍 Causa Principal: Mixed Content (Contenido Mixto)

El servidor de archivos está en **HTTP** (`http://38.7.201.62:8080/files/...`) pero el sitio en producción usa **HTTPS**. Los navegadores modernos **bloquean automáticamente** las descargas desde HTTP cuando el sitio principal usa HTTPS por razones de seguridad.

### Error en consola del navegador:
```
Mixed Content: The page at 'https://tu-sitio.netlify.app' was loaded over HTTPS, 
but requested an insecure resource 'http://38.7.201.62:8080/files/...'. 
This request has been blocked; the content must be served over HTTPS.
```

### Qué sucede actualmente:
1. Usuario hace clic en "Descargar"
2. El navegador intenta acceder a `http://38.7.201.62:8080/...`
3. El navegador bloquea la solicitud por seguridad
4. Se abre y cierra una pestaña pero no se descarga nada
5. En local funciona porque ambos están en HTTP

---

## ✅ Soluciones (en orden de mejor a peor)

### **Solución 1: HTTPS en el servidor de archivos (MEJOR OPCIÓN)**

Configura HTTPS en el servidor `38.7.201.62:8080`:

#### Opción A - Usar Cloudflare (más fácil, no requiere cambios en servidor):

1. **Registra un dominio o subdominio** (puede ser gratis en Freenom o usar uno existente)
   - Ejemplo: `files.observalosrios.cl`

2. **Configura Cloudflare**:
   ```
   - Añade el dominio a Cloudflare
   - Crea un registro DNS tipo A:
     Nombre: files (o @)
     IP: 38.7.201.62
     Proxy: Activado (nube naranja)
   ```

3. **Configura SSL en Cloudflare**:
   - SSL/TLS → Full (o Flexible si no tienes SSL en el servidor)
   - Edge Certificates → Always Use HTTPS: ON

4. **Resultado**: Tus archivos estarán disponibles en:
   ```
   https://files.observalosrios.cl/files/upload/gobernanza/sesion1_gobernanza.zip
   ```

#### Opción B - Certificado SSL con Let's Encrypt:

```bash
# En el servidor 38.7.201.62
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Si usas Nginx (reemplaza tu-dominio.com)
sudo certbot --nginx -d files.tu-dominio.com

# Si usas Apache
sudo certbot --apache -d files.tu-dominio.com

# Verificar renovación automática
sudo certbot renew --dry-run
```

#### Opción C - Cloudflare Tunnel (sin dominio propio):

```bash
# En el servidor 38.7.201.62
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o cloudflared
chmod +x cloudflared

# Login (sigue las instrucciones)
./cloudflared tunnel login

# Crear túnel
./cloudflared tunnel create observa-files

# Configurar túnel
./cloudflared tunnel route dns observa-files files.tudominio.com

# Iniciar túnel
./cloudflared tunnel run --url http://localhost:8080 observa-files
```

---

### **Solución 2: Proxy en el backend (alternativa viable)**

Si no puedes configurar HTTPS en el servidor de archivos, crea un proxy en tu API backend que ya tiene HTTPS:

#### En el backend (Express.js):

```javascript
// Añadir en tu backend: routes/gobernanza.js o similar
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/gobernanza/download/:filename', async (req, res) => {
    try {
        const { filename } = req.params;
        const fileUrl = `http://38.7.201.62:8080/files/upload/gobernanza/${filename}`;
        
        console.log(`Proxying download: ${fileUrl}`);
        
        const response = await fetch(fileUrl);
        
        if (!response.ok) {
            return res.status(404).json({ error: 'Archivo no encontrado' });
        }
        
        // Copiar headers importantes
        const contentType = response.headers.get('Content-Type') || 'application/octet-stream';
        const contentLength = response.headers.get('Content-Length');
        
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        if (contentLength) res.setHeader('Content-Length', contentLength);
        
        // Stream el archivo
        response.body.pipe(res);
    } catch (error) {
        console.error('Error downloading file:', error);
        res.status(500).json({ error: 'Error al descargar el archivo' });
    }
});

module.exports = router;
```

#### Modificar la base de datos:

Cambia las URLs en la base de datos de:
```
http://38.7.201.62:8080/files/upload/gobernanza/sesion1_gobernanza.zip
```

A:
```
https://observabackend-h5xw.onrender.com/api/v1/gobernanza/download/sesion1_gobernanza.zip
```

#### O modificar en el endpoint de la API:

```javascript
// En el endpoint que retorna los datos de gobernanza
router.get('/gobernanza', async (req, res) => {
    const data = await fetchGobernanzaFromDB();
    
    // Transformar URLs HTTP a proxy HTTPS
    const dataWithProxyUrls = data.map(session => ({
        ...session,
        url: session.url 
            ? session.url.replace(
                'http://38.7.201.62:8080/files/upload/gobernanza/',
                'https://observabackend-h5xw.onrender.com/api/v1/gobernanza/download/'
              ).split('/').pop() // Solo el nombre del archivo
            : null
    }));
    
    res.json(dataWithProxyUrls);
});
```

---

### **Solución 3: Meta tag (puede funcionar en algunos casos)**

Añade en `index.html`:

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

Y en `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "upgrade-insecure-requests"
```

⚠️ **ADVERTENCIA**: 
- Esta solución intenta actualizar HTTP a HTTPS automáticamente
- NO funcionará si el servidor no tiene HTTPS configurado
- No es una solución permanente ni segura

---

## 📊 Comparación de soluciones

| Solución | Dificultad | Seguridad | Rendimiento | Recomendación |
|----------|-----------|-----------|-------------|---------------|
| HTTPS en servidor (Cloudflare) | Fácil | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Mejor opción |
| HTTPS con Let's Encrypt | Media | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Muy buena |
| Proxy en backend | Media | ⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ Alternativa viable |
| Meta tag upgrade | Fácil | ⭐⭐ | ❌ No funciona | ❌ No recomendada |

---

## 🧪 Cómo verificar si funcionó

1. **Abre la consola del navegador** (F12)
2. Ve a la pestaña **Console**
3. Haz clic en "Descargar"
4. **Si funciona**: El archivo se descarga sin errores
5. **Si falla**: Verás error de "Mixed Content" en rojo

### Verificar desde terminal:

```bash
# Verificar que el servidor responde
curl -I http://38.7.201.62:8080/files/upload/gobernanza/sesion1_gobernanza.zip

# Si tienes HTTPS configurado
curl -I https://files.tu-dominio.com/files/upload/gobernanza/sesion1_gobernanza.zip
```

---

## 📝 Resumen

**Problema**: HTTP → HTTPS = Bloqueado por el navegador

**Solución más rápida**: Usa Cloudflare para añadir HTTPS al servidor de archivos (30 minutos)

**Solución alternativa**: Crea un proxy en tu backend que ya tiene HTTPS (1-2 horas)

**NO hagas**: Intentar deshabilitar la seguridad del navegador

---

## 🆘 ¿Necesitas ayuda?

Si necesitas implementar alguna de estas soluciones, proporciona:
1. Acceso al servidor donde están los archivos
2. Acceso al código del backend de la API
3. Nombre de dominio (si tienes uno)
