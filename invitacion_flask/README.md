
# Invitación Western (Flask)

Proyecto Flask listo para desplegar en Render.com.

## Estructura
```
.
├─ app.py
├─ requirements.txt
├─ render.yaml
├─ templates/
│  └─ index.html
└─ static/
   ├─ css/styles.css
   ├─ js/app.js
   └─ img/
      ├─ cowboy-wave.svg
      ├─ horse.svg
      ├─ bull.svg
      └─ cumpleanero-default.svg
```

## Desarrollo local
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
Abre http://127.0.0.1:5000

## Despliegue en Render
1. Sube estos archivos a un repositorio (GitHub/GitLab).
2. En Render, **New +** → **Web Service** → Conecta el repo.
3. Render detectará `render.yaml` y configurará el servicio.
4. Listo. (Start command: `gunicorn app:app`).

## Personalización
- **Foto del festejado**: coloca `static/img/cumpleanero.jpg` y en `templates/index.html`
  cambia la ruta (o conserva el SVG por defecto).
- **Música**: reemplaza la URL del `<audio>` por tu pista (ten en cuenta que los navegadores
  requieren interacción de usuario para reproducir audio).
- **Álbum**: agrega imágenes en `static/img/album/` y actualiza el arreglo `albumPhotos` en `static/js/app.js`.
- **Fecha/hora del evento**: ajusta `EVENT_DATETIME_ISO` en `app.py` (formato ISO local).
