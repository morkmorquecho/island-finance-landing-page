import Image from 'next/image'
import { Check, Compass, MapPin } from 'lucide-react'
import { ExploreDemo } from '../components/explore-demo'
import { ScrollHeader } from '../components/scroll-header'
import { ScrollReveal } from '../components/scroll-reveal'
import { PlatformGrid } from '../components/platform-grid'
import { Button } from '../components/button'

const appScreenshots = {
  login: '/ss1.png',
  islands: '/ss2.png',
  ledger: '/ss3.png',
}
const wilsonImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wilson-IjWPrq9o8zqCMmnITcITmFBiO4uQom.jpeg'

const platforms = [
  { name: 'Nu', initial: 'N', brand: 'nu', description: 'Cuenta digital', logo: '/nu.png' },
  { name: 'Mercado Pago', initial: 'M', brand: 'mercado-pago', description: 'Billetera digital', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mercado%20pago-vLEtv5qDppQ5xmFUG4enQnMRa7lkpA.png' },
  { name: 'Revolut', initial: 'R', brand: 'revolut', description: 'Cuenta global', logo: '/revoult.png' },
  { name: 'CETES', initial: 'C', brand: 'cetes', description: 'Ahorro e inversión', logo: '/cetes.jpeg', darkText: true },
  { name: 'Openbank', initial: 'O', brand: 'openbank', description: 'Banca digital', logo: '/openbank.jpeg' },
  { name: 'DiDi Finanzas', initial: 'D', brand: 'didi', description: 'Crédito y finanzas', logo: '/didi.jpg' },
  { name: 'Acciones', initial: 'A', brand: 'acciones', description: 'Inversión', logo: '/gbm.png', darkText: false },
  { name: 'Criptomonedas', initial: 'C', brand: 'cripto', description: 'Activos digitales', logo: '/crypto.png', darkText: true },
]

export default function Page() {
  return (
    <>
      <main className="hero-shell">
      <ScrollHeader />

      <div className="hero-content">
        <section className="hero-copy" aria-labelledby="hero-title">
          <p className="eyebrow">Tu patrimonio en calma</p>
          <h1 id="hero-title">Haz que tu dinero<br /><em>encuentre su lugar.</em></h1>
          <p className="hero-description">Visualiza tus cuentas como islas y convierte cada propósito en un archipiélago. Una forma más serena de entender tu patrimonio.</p>
          <Button variant="primary" href="https://islandfinance.cc">Zarpar ahora <span aria-hidden="true">↗</span></Button>
        </section>

        <section className="product-preview" aria-label="Vista previa de Island Finance">
          <div className="browser-frame">
            <div className="browser-bar" aria-hidden="true">
              <span /><span /><span />
              <div className="browser-url">islandfinance.cc</div>
            </div>
            <div className="screenshot-wrap">
              <Image
                src={appScreenshots.login}
                alt="Pantalla de inicio de sesión de Island Finance"
                width={900}
                height={600}
                priority
                unoptimized
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="wave" aria-hidden="true" />
      <footer className="hero-footer"><span>Una vista clara.</span><span>Decisiones con calma.</span></footer>
    </main>

    <div className="page-flow">
    <ScrollReveal>
    <section className="islands-section" aria-labelledby="islands-title">
      <div className="islands-inner">
        <div className="section-heading">
          <p className="section-kicker">El concepto central</p>
          <h2 id="islands-title">Cada cuenta es una isla. Cada meta, un archipiélago.</h2>
          <p className="section-intro">Olvídate de las hojas de cálculo. En Island Finance tu dinero se ve como un mapa que da gusto navegar.</p>
        </div>

        <div className="island-cards">
          <article className="island-card">
            <div className="card-icon"><MapPin size={20} strokeWidth={1.6} aria-hidden="true" /></div>
            <h3>La isla</h3>
            <p>Cada isla es una cuenta donde guardas tu dinero: Mercado Pago, Nu, Revolut, acciones, cripto. Cada una con su propia orilla.</p>
          </article>
          <article className="island-card">
            <div className="card-icon"><Compass size={20} strokeWidth={1.6} aria-hidden="true" /></div>
            <h3>El archipiélago</h3>
            <p>Un archipiélago agrupa varias islas bajo un mismo propósito: tu viaje, tu fondo de emergencia, tu casa. Así sabes hacia dónde navega tu dinero.</p>
          </article>
        </div>

        <div className="islands-screenshot">
          <Image
            src={appScreenshots.islands}
            alt="Captura de Island Finance mostrando las cuentas como islas y los propósitos como archipiélagos"
            width={1200}
            height={800}
            unoptimized
            sizes="(max-width: 820px) 86vw, 1120px"
          />
        </div>
      </div>
    </section>
    </ScrollReveal>

    <ScrollReveal>
    <section className="ledger-section" aria-labelledby="ledger-title">
      <div className="ledger-inner">
        <div className="ledger-copy">
          <p className="ledger-kicker">Bitácora</p>
          <h2 id="ledger-title">Sabe a dónde se va cada moneda</h2>
          <p className="ledger-intro">Lleva el registro de tus gastos y míralos con gráficas claras. Cada gasto queda anotado en tu bitácora, así detectas las fugas antes de que hundan el barco.</p>
          <ul className="ledger-points">
            <li><span className="ledger-point-icon"><Check size={15} strokeWidth={2} aria-hidden="true" /></span><span>Gastos ordenados por categoría</span></li>
            <li><span className="ledger-point-icon"><Check size={15} strokeWidth={2} aria-hidden="true" /></span><span>Gráficas fáciles de leer</span></li>
            <li><span className="ledger-point-icon"><Check size={15} strokeWidth={2} aria-hidden="true" /></span><span>Todo en un solo vistazo</span></li>
          </ul>
        </div>

        <div className="ledger-preview" aria-label="Vista previa de la bitácora de gastos">
          <div className="browser-bar" aria-hidden="true">
            <span /><span /><span />
            <div className="browser-url">islandfinance.cc / bitácora</div>
          </div>
          <div className="screenshot-wrap">
            <Image
              src={appScreenshots.ledger}
              alt="Bitácora de gastos de Island Finance con gráficas y categorías"
              width={900}
              height={600}
              unoptimized
              sizes="(max-width: 820px) 86vw, 54vw"
            />
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>

    <ScrollReveal>
    <section className="goals-section" aria-labelledby="goals-title">
      <div className="goals-inner">
        <div className="goals-copy">
          <p className="goals-kicker">Rumbo fijo</p>
          <h2 id="goals-title">Ahorra con un solo clic</h2>
          <p className="goals-intro">Crea una meta de ahorro y define el ingreso que haces cada cierto tiempo. Cuando llegue la fecha, solo márcalo con un clic. Sin repetir todo el proceso de agregar una transacción.</p>
        </div>

        <div className="goal-cards">
          <article className="goal-card">
            <span className="goal-number">1</span>
            <h3>Traza el rumbo</h3>
            <p>Crea tu meta y define cuánto y cada cuándo ahorras.</p>
          </article>
          <article className="goal-card">
            <span className="goal-number">2</span>
            <h3>Espera la marea</h3>
            <p>Llega la fecha de tu ingreso programado.</p>
          </article>
          <article className="goal-card">
            <span className="goal-number">3</span>
            <h3>Un clic y listo</h3>
            <p>Márcalo y tu isla crece al instante.</p>
          </article>
        </div>
      </div>
    </section>
    </ScrollReveal>

    <ScrollReveal>
    <section className="platforms-section" aria-labelledby="platforms-title">
      <div className="platforms-inner">
        <div className="platforms-heading">
          <h2 id="platforms-title">Todos tus puertos en un solo mapa</h2>
          <p>Registra tu dinero con templates listos para Mercado Pago, Nu, Revolut, DiDi, CETES, acciones y criptomonedas. Island Finance calcula y muestra las ganancias que generan tus intereses, y en acciones y cripto ya no tienes que entrar a cada plataforma para saber cuánto tienes. Ver tus ganancias es así de sencillo.</p>
        </div>

        <PlatformGrid platforms={platforms} />
      </div>
    </section>
    </ScrollReveal>

    <ScrollReveal>
    <section className="explore-section" aria-labelledby="explore-title">
      <div className="explore-inner">
        <div className="explore-heading">
          <p className="explore-kicker">Un vistazo sin compromiso</p>
          <h2 id="explore-title">¿Curiosidad? Echa un vistazo antes de zarpar</h2>
          <p>Entra a la app con una cuenta de prueba y recorre la isla sin registrarte.</p>
        </div>
        <ExploreDemo />
      </div>
    </section>
    </ScrollReveal>

    <ScrollReveal scale>
    <section className="wilson-section" aria-labelledby="wilson-title">
      <div className="wilson-inner">
        <div className="wilson-photo">
          <Image src={wilsonImage} alt="Wilson, el balón de playa de la película Náufrago" width={760} height={504} unoptimized sizes="(max-width: 820px) 86vw, 38vw" />
        </div>

        <div className="wilson-copy">
          <p className="wilson-kicker">Tu compañero de isla</p>
          <h2 id="wilson-title">Conoce a Wilson</h2>
          <p className="wilson-intro">Wilson vive en Telegram como @IslandFinanceBot. Escríbele un mensaje corto y él anota tu gasto o ingreso por ti. Sin abrir la app, sin formularios.</p>

          <div className="wilson-chat" aria-label="Ejemplo de conversación con Wilson en Telegram">
            <div className="chat-header">
              <div className="chat-avatar"><Image src={wilsonImage} alt="" width={34} height={34} unoptimized /></div>
              <div><div className="chat-name">Wilson</div><div className="chat-status">bot de finanzas personales</div></div>
            </div>
            <div className="chat-body">
              <div className="chat-bubble user">gasté 250 en tacos</div>
              <div className="chat-bubble wilson">¡Anotado en la bitácora! 🌮 -$250 en Comida</div>
            </div>
          </div>

          <Button variant="secondary" href="https://islandfinance.cc" className="wilson-cta">Conocer a Wilson</Button>
        </div>
      </div>
    </section>
    </ScrollReveal>

    <ScrollReveal>
    <section className="closing-section" aria-labelledby="closing-title">
      <div className="closing-wave" aria-hidden="true" />
      <div className="closing-inner">
        <p className="closing-kicker">El siguiente paso</p>
        <h2 id="closing-title">Es hora de zarpar</h2>
        <p>Tu patrimonio en calma te espera. Descubre más sobre el diseño y todas las funciones en islandfinance.cc.</p>
        <Button variant="onDark" href="https://islandfinance.cc" className="closing-cta">Zarpar ahora</Button>
      </div>
    </section>
    </ScrollReveal>

    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="footer-wordmark" href="https://islandfinance.cc">Island Finance</a>
            <p>Tu patrimonio en calma</p>
          </div>
          <nav className="footer-explore" aria-label="Explorar Island Finance">
            <span>Explorar</span>
            <a href="https://islandfinance.cc">Ir a la app</a>
            <a href="https://islandfinance.cc">Cuenta de prueba</a>
            <a href="https://islandfinance.cc">Wilson en Telegram</a>
          </nav>
          <div className="footer-action">
            <Button variant="onDark" href="https://islandfinance.cc">Zarpar ahora</Button>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p>Buen viento y buenas finanzas</p>
          <p>Diseñado y desarrollado por <a href="https://portfolio-xi-roan-90.vercel.app/" target="_blank" rel="noopener noreferrer">Matias Morquecho</a></p>
        </div>
        <div className="footer-watermark" aria-hidden="true">Island Finance</div>
      </div>
    </footer>
    </div>
    </>
  )
}
