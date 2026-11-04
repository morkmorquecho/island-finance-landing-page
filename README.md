# 🏝️ Island Finance · Landing Page

> **Tu patrimonio en calma.**

Landing page oficial de **[Island Finance](https://islandfinance.cc)**, una app de finanzas personales que visualiza tu dinero como un archipiélago: cada **isla** es una cuenta y cada **archipiélago** es un propósito financiero.

🔗 **App:** [islandfinance.cc](https://islandfinance.cc)

---

## 🧭 El concepto

| Elemento | Significado |
| --- | --- |
| 🏝️ **Isla** | Una cuenta donde guardas tu dinero (Mercado Pago, Nu, Revolut, acciones, cripto, etc.) |
| 🌊 **Archipiélago** | Un propósito financiero que agrupa varias islas (viaje, fondo de emergencia, casa, etc.) |

---

## ✨ Qué muestra la landing

- **Hero** con el lema y el acceso directo a la app.
- **Islas y archipiélagos:** explicación visual del concepto central.
- **Bitácora de gastos:** control y visualización de gastos con gráficas claras.
- **Metas de ahorro con un clic:** registra tus ingresos recurrentes sin repetir todo el proceso de agregar una transacción.
- **Wilson, el bot de Telegram:** añade gastos o ingresos con un mensaje corto desde `@IslandFinanceBot`.
- **Plataformas compatibles:** templates para Mercado Pago, Nu, Revolut, DiDi Finanzas, CETES, Openbank, acciones y criptomonedas, con visualización de las ganancias generadas.
- **Cuenta de prueba:** entra a explorar la app sin registrarte con el usuario y la contraseña `islandfinance`.
- **CTA final y footer** con enlaces a la app y al desarrollador.

## 🎨 Detalles de diseño

- Paleta basada en la app, definida en formato **oklch** con variables CSS (cielo, océano, arena, arrecife y tonos de marca por institución).
- Tipografías: **Fraunces** (títulos) e **IBM Plex Sans** (texto).
- Hero fijo con efecto cortina: el contenido sube y lo cubre al hacer scroll.
- Header que se oculta al bajar y reaparece al subir.
- Animaciones de aparición por sección con `framer-motion`, respetando `prefers-reduced-motion`.
- Tarjetas de plataformas con logos normalizados y el color de cada marca.
- Diseño responsive, pensado primero para móvil.

## 🛠️ Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev/) para íconos
- Generado y refinado con [v0](https://v0.dev/)

## 🚀 Cómo correrlo localmente

```bash
# 1. Clona el repositorio
git clone https://github.com/<tu-usuario>/<nombre-del-repo>.git
cd <nombre-del-repo>

# 2. Instala dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Otros comandos

```bash
npm run build   # Compila para producción
npm run start   # Sirve la build de producción
npm run lint    # Revisa el código
```

## 📁 Estructura

```
├── app/            # Páginas, layout y estilos globales (tokens de la paleta)
├── components/     # Secciones de la landing y componentes reutilizables (Button, etc.)
├── public/         # Capturas de la app, logos de plataformas e imagen de Wilson
└── ...
```

## 🌐 Despliegue

Pensado para desplegarse en [Vercel](https://vercel.com/). Conecta el repositorio y el despliegue se configura automáticamente.

## 👨‍💻 Autor

Diseñado y desarrollado por **[TU NOMBRE]**
🔗 [Portafolio](https://portfolio-xi-roan-90.vercel.app/)

---

<p align="center">Buen viento y buenas finanzas 🌴</p>
