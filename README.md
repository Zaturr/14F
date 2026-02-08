# San Valentín

Página web en **React + Vite** para publicar en GitHub Pages.

## Ejecutar en local

```bash
npm install
npm run dev
```

Se abrirá en [http://localhost:5173](http://localhost:5173). Para generar la versión de producción:

```bash
npm run build
```

Los archivos quedan en la carpeta `dist/`.

## Cómo publicarla en internet (GitHub Pages)

1. **Crea un repositorio en GitHub**
   - Ve a [github.com](https://github.com) y entra a tu cuenta.
   - Clic en **"New"** (nuevo repositorio).
   - Nombre: por ejemplo `sanvalentin`.
   - Elige **Public** y no marques "Add a README".
   - Clic en **Create repository**.

2. **Sube el proyecto**
   - En la carpeta del proyecto ejecuta:

   ```bash
   git init
   git add .
   git commit -m "Primera versión con React"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

3. **Configura la base para GitHub Pages**
   - En `vite.config.js`, dentro de `defineConfig`, añade `base: '/TU_REPOSITORIO/'` (mismo nombre que el repo).
   - Vuelve a hacer build: `npm run build`.

4. **Activa GitHub Pages**
   - En el repo: **Settings** → **Pages**.
   - **Source**: Deploy from a branch.
   - **Branch**: `gh-pages` y carpeta `/ (root)` (o usa una GitHub Action que ejecute `npm run build` y suba `dist/`).

   Si despliegas la carpeta `dist/` en la rama `gh-pages`, tu página quedará en:  
   **https://TU_USUARIO.github.io/TU_REPOSITORIO/**
