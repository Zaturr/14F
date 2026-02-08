# San Valentín

Página web de ejemplo para publicar en GitHub Pages.

## Cómo publicarla en internet (GitHub Pages)

1. **Crea un repositorio en GitHub**
   - Ve a [github.com](https://github.com) y entra a tu cuenta.
   - Clic en **"New"** (nuevo repositorio).
   - Nombre: por ejemplo `sanvalentin` o `mi-pagina`.
   - Elige **Public** y no marques "Add a README" (ya tienes archivos).
   - Clic en **Create repository**.

2. **Sube tu carpeta al repositorio**
   - En la carpeta del proyecto (donde está `index.html`), abre la terminal y ejecuta:

   ```bash
   git init
   git add .
   git commit -m "Primera versión de la página"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

   Sustituye `TU_USUARIO` por tu usuario de GitHub y `TU_REPOSITORIO` por el nombre del repo (ej: `sanvalentin`).

3. **Activa GitHub Pages**
   - En GitHub, entra a tu repositorio.
   - **Settings** → en el menú izquierdo **Pages**.
   - En **Source** elige **Deploy from a branch**.
   - En **Branch** elige `main` y carpeta **/ (root)**.
   - Guarda (**Save**).

4. **Tu página en internet**
   - En unos minutos estará en:  
     **https://TU_USUARIO.github.io/TU_REPOSITORIO/**

Ejemplo: si tu usuario es `juan` y el repo `sanvalentin`, la URL será:  
`https://juan.github.io/sanvalentin/`
