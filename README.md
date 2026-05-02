# 📊 IG Insights Tracker

Una mini app fullstack para analizar seguidores de Instagram: detectar **quién te deja de seguir**, nuevos seguidores y evolución en el tiempo.

---

## 🚀 Demo (local)

La app corre en dos partes:

* Frontend: http://localhost:3000
* Backend API: http://localhost:3001

---

## 🧠 ¿Qué hace?

* 🔍 Scrapea tu lista de seguidores automáticamente
* 📉 Detecta **unfollows** comparando snapshots
* 📈 Muestra métricas en un dashboard
* ⚡ Ejecuta todo desde un botón en la UI
* 💾 Guarda datos localmente para análisis

---

## 🛠️ Stack

* **Frontend:** React
* **Backend:** Node.js + Express
* **Scraping:** Playwright
* **Data:** JSON snapshots

---


## 🔐 Importante

* `auth.json` **NO se sube** (sesión de Instagram)
* Snapshots (`followers.json`) están ignorados
* Proyecto pensado para uso personal / testing

---

## 🧪 Cómo probar unfollows

### Método real:

1. Ejecutar "Actualizar seguidores"
2. Que alguien te deje de seguir
3. Volver a ejecutar
4. Se detecta automáticamente

---

### Método rápido:

Editar manualmente `followers.json` y borrar un usuario para simular unfollow.

---

## ⚡ Features actuales

* [x] Scraping de seguidores
* [x] Login persistente
* [x] Snapshot de followers
* [x] Comparación de listas
* [x] Detección de unfollows
* [x] Dashboard React
* [x] Botón que ejecuta scraping real
* [x] Loading state en UI

---

## 🚧 Próximas mejoras

* 📊 Gráficos de crecimiento
* 📅 Historial de unfollows
* 🔁 Seguidores que no te siguen de vuelta
* ⚡ Optimización del scraper
* 🌐 Deploy

---

## ⚠️ Disclaimer

Este proyecto usa scraping con fines educativos y personales.
No está afiliado a Instagram.

---


## 💡 Notas

Este proyecto empezó como una idea simple (ver quién deja de seguir)
y terminó siendo una app fullstack con scraping, backend y UI.

---
