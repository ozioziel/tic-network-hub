import {
  AppWindow,
  ArrowDown,
  Blocks,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Database,
  ExternalLink,
  Gauge,
  Goal,
  HardDrive,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  Wifi,
  Workflow,
} from 'lucide-react'

const components = [
  {
    icon: Goal,
    code: 'STR/01',
    title: 'Estrategia tecnológica',
    text: 'Define hacia dónde debe avanzar la tecnología para respaldar las prioridades de la organización.',
  },
  {
    icon: Server,
    code: 'INF/02',
    title: 'Infraestructura tecnológica',
    text: 'Integra redes, servidores, nube, dispositivos y telecomunicaciones que sostienen la operación.',
  },
  {
    icon: AppWindow,
    code: 'APP/03',
    title: 'Gestión de aplicaciones',
    text: 'Selecciona, mantiene y mejora el software que necesita cada área para trabajar con eficiencia.',
  },
  {
    icon: Database,
    code: 'DAT/04',
    title: 'Datos y talento humano',
    text: 'Convierte información en decisiones y desarrolla las capacidades de las personas que gestionan las TIC.',
  },
]

const strategyPoints = [
  ['01', 'Objetivos tecnológicos', 'Traducir necesidades en metas concretas, prioridades e iniciativas medibles.'],
  ['02', 'Alineación organizacional', 'Conectar inversiones y proyectos TIC con la estrategia y el valor esperado.'],
  ['03', 'Seguridad', 'Incorporar protección, control de acceso y gestión de riesgos desde la planificación.'],
  ['04', 'Continuidad', 'Preparar capacidades de respaldo y recuperación para mantener las operaciones esenciales.'],
]

const providers = ['AXS', 'Entel', 'Tigo', 'Starlink']
const providerCriteria = ['Cobertura', 'Velocidad', 'Latencia', 'Coste', 'Estabilidad', 'Soporte', 'Seguridad', 'Disponibilidad local']

const departments = [
  { icon: BriefcaseBusiness, label: 'Administración', need: 'gestión documental y coordinación' },
  { icon: Gauge, label: 'Finanzas', need: 'contabilidad, presupuesto y reportes' },
  { icon: Users, label: 'Recursos Humanos', need: 'personal, asistencia y capacitación' },
  { icon: Sparkles, label: 'Ventas', need: 'clientes, oportunidades y seguimiento' },
  { icon: Workflow, label: 'Operaciones', need: 'procesos, inventarios y control' },
  { icon: Blocks, label: 'Tecnología', need: 'soporte, monitoreo y desarrollo' },
]

const managementProcesses = [
  {
    icon: Workflow,
    title: 'Gestión de proyectos',
    text: 'Organiza alcance, tiempo, recursos, responsables y resultados para convertir una necesidad en una solución tecnológica.',
  },
  {
    icon: ShieldCheck,
    title: 'Gestión y análisis de riesgos',
    text: 'Identifica amenazas, estima su probabilidad e impacto, prioriza respuestas y asigna responsables para tratarlas.',
  },
  {
    icon: RefreshCw,
    title: 'Contingencia y mejora continua',
    text: 'Prepara recuperación ante interrupciones y revisa procesos, métricas e incidentes para mejorar de forma iterativa.',
  },
]

const frameworks = [
  {
    tag: 'AGILE',
    name: 'Enfoques ágiles',
    text: 'Principios y formas de trabajo iterativas que favorecen entregas frecuentes, colaboración y adaptación al cambio.',
  },
  {
    tag: 'SCRUM',
    name: 'Scrum',
    text: 'Marco de trabajo ágil y ligero para generar valor mediante ciclos breves, transparencia, inspección y adaptación.',
  },
  {
    tag: 'ITIL',
    name: 'ITIL',
    text: 'Guía de prácticas para gestionar servicios digitales y de TI con foco en valor, calidad y mejora continua.',
  },
  {
    tag: 'COBIT',
    name: 'COBIT',
    text: 'Marco para el gobierno y la gestión de la información y la tecnología en toda la organización.',
  },
  {
    tag: 'PMI',
    name: 'PMI · PMBOK',
    text: 'PMI publica la guía PMBOK, una referencia de estándares, principios y buenas prácticas para dirigir proyectos.',
  },
]

export default function GestionTecnologiaPage() {
  return (
    <article className="academic-page management-page">
      <header className="page-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="container page-hero-content">
          <div className="page-hero-copy">
            <p className="eyebrow"><span>01</span> Campo de estudio</p>
            <h1>Gestión de<br /><em>Tecnología</em></h1>
            <p className="page-lead">
              Decidir, coordinar y mejorar los recursos tecnológicos para que la estrategia se convierta en resultados seguros y sostenibles.
            </p>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="orbit-core"><Network size={42} /></span>
            <span className="orbit-node node-a" />
            <span className="orbit-node node-b" />
            <span className="orbit-node node-c" />
            <code>SYS://GESTIÓN_TIC</code>
          </div>
        </div>
        <a className="scroll-cue" href="#introduccion">
          Explorar contenido <ArrowDown size={16} />
        </a>
      </header>

      <div className="container academic-content">
        <section id="introduccion" className="content-section intro-section">
          <div className="section-number">01</div>
          <div className="section-copy">
            <p className="eyebrow">Punto de partida</p>
            <h2>Introducción</h2>
            <p className="large-copy">
              La gestión de tecnología es el proceso de <strong>planificar, seleccionar, implementar, operar y mejorar</strong> los recursos tecnológicos de una organización.
            </p>
            <p>
              Sirve para alinear las TIC con los objetivos institucionales, usar bien los recursos, controlar riesgos y asegurar que la tecnología apoye el trabajo diario y la toma de decisiones.
            </p>
          </div>
          <aside className="signal-panel" aria-label="Propósito de la gestión tecnológica">
            <span className="signal-line" />
            <BrainCircuit size={30} />
            <p>La tecnología deja de ser solo soporte y se convierte en una capacidad estratégica.</p>
          </aside>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>02</span> Visión integral</p>
              <h2>Componentes clave</h2>
            </div>
            <p>Cuatro frentes conectados permiten gobernar el ciclo tecnológico completo.</p>
          </div>
          <div className="component-grid">
            {components.map(({ icon: Icon, code, title, text }) => (
              <article className="component-card" key={title}>
                <div className="card-topline">
                  <Icon size={24} aria-hidden="true" />
                  <span>{code}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section strategy-section">
          <div className="section-heading compact">
            <div>
              <p className="eyebrow"><span>03</span> Dirección</p>
              <h2>Estrategia tecnológica</h2>
            </div>
            <p>Define cómo la tecnología contribuirá a las metas y cómo se protegerá lo esencial.</p>
          </div>
          <div className="strategy-list">
            {strategyPoints.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section infrastructure-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>04</span> Base operativa</p>
              <h2>Infraestructura tecnológica</h2>
            </div>
            <p>La plataforma física y digital que mantiene conectados los servicios de la organización.</p>
          </div>

          <div className="infra-layout">
            <div className="infra-stack" aria-label="Capas de infraestructura">
              <div><Wifi size={22} /><span>Redes y telecomunicaciones</span><small>Conectividad</small></div>
              <div><Server size={22} /><span>Servidores y almacenamiento</span><small>Procesamiento</small></div>
              <div><Cloud size={22} /><span>Servicios cloud</span><small>Escalabilidad</small></div>
              <div><HardDrive size={22} /><span>Equipos y dispositivos</span><small>Acceso</small></div>
            </div>
            <div className="infra-copy">
              <h3>Gestionar para estar disponibles</h3>
              <p>
                Una gestión efectiva parte de requisitos claros, inventario actualizado, capacidad suficiente, monitoreo, mantenimiento, seguridad, copias de respaldo y acuerdos de servicio.
              </p>
              <p>
                El objetivo es equilibrar <strong>eficiencia, rendimiento y disponibilidad</strong>: que los recursos respondan cuando se necesitan sin sobredimensionar costes.
              </p>
              <div className="availability-meter">
                <span>Planificar</span><i /><span>Operar</span><i /><span>Medir</span><i /><span>Mejorar</span>
              </div>
            </div>
          </div>

          <div className="provider-panel">
            <div className="provider-intro">
              <span className="mini-icon"><Wifi size={20} /></span>
              <div>
                <p className="eyebrow">Selección de telecomunicaciones</p>
                <h3>No existe un proveedor universalmente mejor</h3>
                <p>AXS, Entel, Tigo y Starlink son ejemplos de alternativas que deben evaluarse según el contexto real de la organización.</p>
              </div>
            </div>
            <div className="provider-names" aria-label="Ejemplos de proveedores">
              {providers.map((provider) => <span key={provider}>{provider}</span>)}
            </div>
            <div className="criteria-list">
              {providerCriteria.map((criterion) => (
                <span key={criterion}><CheckCircle2 size={15} />{criterion}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section applications-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>05</span> Herramientas adecuadas</p>
              <h2>Gestión de aplicaciones</h2>
            </div>
            <p>Cada departamento necesita software coherente con sus procesos, responsabilidades y nivel de acceso.</p>
          </div>
          <p className="section-bridge">
            Antes de adquirir una aplicación se deben analizar necesidades, integración, seguridad, facilidad de uso, coste y soporte. La decisión no empieza por la herramienta, sino por el proceso que debe resolver.
          </p>
          <div className="department-grid">
            {departments.map(({ icon: Icon, label, need }) => (
              <article key={label}>
                <Icon size={20} />
                <div><h3>{label}</h3><p>{need}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section data-talent-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>06</span> Capacidad organizacional</p>
              <h2>Datos y talento humano</h2>
            </div>
          </div>
          <div className="dual-panel">
            <article className="data-panel">
              <div className="panel-icon"><Database size={25} /></div>
              <span className="panel-code">DATA://DECISION</span>
              <h3>Datos que orientan</h3>
              <p>Datos completos, oportunos y protegidos permiten observar resultados, detectar problemas y tomar decisiones con evidencia en lugar de suposiciones.</p>
              <div className="data-bars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            </article>
            <article className="talent-panel">
              <div className="panel-icon"><Users size={25} /></div>
              <span className="panel-code">PEOPLE://CAPABILITY</span>
              <h3>Personas que transforman</h3>
              <ul>
                <li><strong>Desarrollar habilidades</strong><span>Aprendizaje continuo para tecnologías y riesgos cambiantes.</span></li>
                <li><strong>Retener talento</strong><span>Trayectorias, reconocimiento y condiciones que sostengan el conocimiento.</span></li>
                <li><strong>Cultura de innovación</strong><span>Espacio para colaborar, experimentar y aprender de los resultados.</span></li>
              </ul>
            </article>
          </div>
        </section>

        <section className="content-section process-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>07</span> De la decisión a la mejora</p>
              <h2>Procesos de gestión tecnológica</h2>
            </div>
            <p>Disciplina para ejecutar, controlar riesgos y aprender durante todo el ciclo.</p>
          </div>
          <div className="process-cards">
            {managementProcesses.map(({ icon: Icon, title, text }) => (
              <article key={title}><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>

          <div className="framework-block">
            <div className="framework-header">
              <div>
                <p className="eyebrow">Marcos y buenas prácticas</p>
                <h3>Cada referencia resuelve una necesidad distinta</h3>
              </div>
              <span>Guía ≠ metodología única</span>
            </div>
            <div className="framework-list">
              {frameworks.map((framework) => (
                <article key={framework.tag}>
                  <span>{framework.tag}</span>
                  <h4>{framework.name}</h4>
                  <p>{framework.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="term-note">
            <strong>Precisión terminológica</strong>
            <p>El término de los apuntes “metodología scraping” se interpreta como <b>Scrum</b>. Web scraping es extracción automatizada de datos de sitios web; no es un método de gestión de proyectos.</p>
          </aside>
        </section>

        <section className="sources" aria-labelledby="management-sources">
          <div>
            <p className="eyebrow">Base académica</p>
            <h2 id="management-sources">Referencias consultadas</h2>
          </div>
          <div className="source-links">
            <a href="https://scrumguides.org/download.html" target="_blank" rel="noreferrer">Scrum Guides <ExternalLink size={14} /></a>
            <a href="https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1" target="_blank" rel="noreferrer">PeopleCert · ITIL <ExternalLink size={14} /></a>
            <a href="https://www.isaca.org/resources/cobit" target="_blank" rel="noreferrer">ISACA · COBIT <ExternalLink size={14} /></a>
            <a href="https://www.pmi.org/standards/pmbok" target="_blank" rel="noreferrer">PMI · PMBOK <ExternalLink size={14} /></a>
            <a href="https://www.nist.gov/publications/nist-definition-cloud-computing" target="_blank" rel="noreferrer">NIST · Cloud <ExternalLink size={14} /></a>
          </div>
        </section>
      </div>
    </article>
  )
}
