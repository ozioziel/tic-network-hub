import {
  Atom,
  Beaker,
  BrainCircuit,
  Check,
  Cpu,
  Dna,
  ExternalLink,
  FlaskConical,
  Leaf,
  Lightbulb,
  Microscope,
  Orbit,
  RadioTower,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'

const innovationTypes = [
  {
    icon: TrendingUp,
    code: 'INCR',
    title: 'Innovación incremental',
    definition: 'Mejora de manera progresiva un producto, servicio o proceso que ya existe.',
    example: 'Una nueva versión de una aplicación con menor consumo de batería.',
    difference: 'Su novedad es gradual y mantiene la base de la solución anterior.',
  },
  {
    icon: Zap,
    code: 'DSRP',
    title: 'Innovación disruptiva',
    definition: 'Nace como una alternativa más simple o accesible y puede transformar un mercado al extenderse.',
    example: 'El streaming frente al alquiler tradicional de películas.',
    difference: 'Se distingue por cambiar la dinámica del mercado, no solo por usar tecnología avanzada.',
  },
  {
    icon: Sparkles,
    code: 'RADI',
    title: 'Innovación radical',
    definition: 'Introduce un principio, capacidad o solución fundamentalmente nueva frente a lo existente.',
    example: 'El transistor como nueva base para construir dispositivos electrónicos.',
    difference: 'Representa un salto profundo en conocimiento o tecnología, no una mejora gradual.',
  },
]

const innovationProcess = [
  { icon: Lightbulb, number: '01', title: 'Ideación', text: 'Generar propuestas a partir de necesidades, problemas u oportunidades.' },
  { icon: Target, number: '02', title: 'Selección', text: 'Comparar valor, viabilidad y ajuste para priorizar las mejores ideas.' },
  { icon: FlaskConical, number: '03', title: 'Desarrollo', text: 'Convertir la idea en prototipo o solución y probar sus supuestos.' },
  { icon: Rocket, number: '04', title: 'Implementación', text: 'Poner la solución en uso, organizar recursos y acompañar el cambio.' },
  { icon: RadioTower, number: '05', title: 'Difusión', text: 'Facilitar que la innovación llegue, se comunique y sea adoptada.' },
]

const marketFactors = [
  ['Necesidad', 'Resolver un problema real y relevante.'],
  ['Valor', 'Producir un beneficio reconocible.'],
  ['Viabilidad', 'Poder desarrollarse y sostenerse.'],
  ['Público', 'Llegar a las personas adecuadas.'],
  ['Diferencia', 'Ofrecer una ventaja clara frente a alternativas.'],
  ['Adaptación', 'Aprender y responder a los cambios.'],
]

const futureFields = [
  {
    icon: BrainCircuit,
    code: 'AI',
    title: 'Inteligencia artificial',
    description: 'Sistemas capaces de reconocer patrones, generar contenido o apoyar decisiones.',
    importance: 'Ampliará la automatización y el análisis en múltiples sectores.',
    example: 'Apoyo al diagnóstico mediante imágenes médicas.',
  },
  {
    icon: Dna,
    code: 'BIO',
    title: 'Biotecnología',
    description: 'Uso de organismos, células o procesos biológicos para crear soluciones.',
    importance: 'Aportará herramientas para salud, alimentos y ambiente.',
    example: 'Producción de vacunas mediante técnicas biotecnológicas.',
  },
  {
    icon: Microscope,
    code: 'NANO',
    title: 'Nanotecnología',
    description: 'Diseño y manipulación de materiales a escala nanométrica.',
    importance: 'Permitirá materiales con propiedades precisas y nuevas funciones.',
    example: 'Recubrimientos resistentes o sensores de alta sensibilidad.',
  },
  {
    icon: Leaf,
    code: 'REN',
    title: 'Energía renovable',
    description: 'Obtención de energía desde fuentes que se regeneran naturalmente.',
    importance: 'Será clave para reducir emisiones y diversificar el suministro energético.',
    example: 'Generación eléctrica mediante paneles solares.',
  },
  {
    icon: Atom,
    code: 'QBT',
    title: 'Computación cuántica',
    description: 'Procesamiento basado en propiedades cuánticas mediante qubits.',
    importance: 'Podría abordar ciertos cálculos difíciles para sistemas clásicos.',
    example: 'Simulación de moléculas para investigar nuevos materiales.',
  },
]

export default function CienciaInnovacionPage() {
  return (
    <article className="academic-page science-page">
      <header className="page-hero science-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="container page-hero-content">
          <div className="page-hero-copy">
            <p className="eyebrow"><span>02</span> Campo de estudio</p>
            <h1>Ciencia,<br />Tecnología e <em>Innovación</em></h1>
            <p className="page-lead">
              Del conocimiento a la aplicación, y de la aplicación al valor: un sistema que evoluciona mediante aprendizaje, creatividad y adopción.
            </p>
          </div>
          <div className="science-visual" aria-hidden="true">
            <div className="science-rings"><i /><i /><i /></div>
            <span className="science-core"><Atom size={48} /></span>
            <span className="science-label label-one">CONOCER</span>
            <span className="science-label label-two">APLICAR</span>
            <span className="science-label label-three">TRANSFORMAR</span>
          </div>
        </div>
      </header>

      <div className="container academic-content">
        <section className="content-section sti-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>01</span> Un sistema conectado</p>
              <h2>Ciencia, tecnología e innovación</h2>
            </div>
            <p>Tres conceptos distintos que se alimentan entre sí.</p>
          </div>
          <div className="sti-grid">
            <article>
              <span className="sti-icon"><Beaker size={24} /></span>
              <span className="panel-code">01 / OBSERVAR</span>
              <h3>Ciencia</h3>
              <p>Actividad sistemática que busca comprender fenómenos y producir conocimiento mediante observación, razonamiento y evidencia verificable.</p>
            </article>
            <article>
              <span className="sti-icon"><Cpu size={24} /></span>
              <span className="panel-code">02 / APLICAR</span>
              <h3>Tecnología</h3>
              <p>Conjunto de conocimientos, técnicas, procesos y herramientas aplicados para resolver problemas o ampliar capacidades humanas.</p>
            </article>
            <article>
              <span className="sti-icon"><Lightbulb size={24} /></span>
              <span className="panel-code">03 / IMPLEMENTAR</span>
              <h3>Innovación</h3>
              <p>Producto o proceso nuevo o mejorado que se implementa, se pone en uso o se ofrece a potenciales usuarios para aportar valor.</p>
            </article>
          </div>
          <div className="relationship-band">
            <Orbit size={26} />
            <p><strong>Relación dinámica:</strong> la ciencia genera conocimiento; la tecnología lo aplica; la innovación convierte ideas o capacidades en soluciones utilizadas. A su vez, nuevos usos y problemas impulsan más ciencia y tecnología.</p>
          </div>
        </section>

        <section className="content-section innovation-types-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>02</span> Grado y efecto del cambio</p>
              <h2>Tipos de innovación</h2>
            </div>
            <p>La magnitud de la novedad y su efecto permiten distinguir diferentes formas de innovar.</p>
          </div>
          <div className="innovation-grid">
            {innovationTypes.map(({ icon: Icon, code, title, definition, example, difference }) => (
              <article key={title}>
                <div className="innovation-card-head">
                  <span><Icon size={23} /></span>
                  <code>{code}</code>
                </div>
                <h3>{title}</h3>
                <p>{definition}</p>
                <dl>
                  <div><dt>Ejemplo</dt><dd>{example}</dd></div>
                  <div><dt>Diferencia</dt><dd>{difference}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section innovation-process-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>03</span> De la idea a la adopción</p>
              <h2>Proceso de innovación</h2>
            </div>
          </div>
          <div className="innovation-timeline">
            {innovationProcess.map(({ icon: Icon, number, title, text }, index) => (
              <article key={number}>
                <div className="timeline-marker"><span>{number}</span><Icon size={21} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
                {index < innovationProcess.length - 1 && <span className="timeline-connector" aria-hidden="true">→</span>}
              </article>
            ))}
          </div>
        </section>

        <section className="content-section market-section">
          <div className="market-copy">
            <p className="eyebrow"><span>04</span> Adopción y valor</p>
            <h2>Éxito en el mercado</h2>
            <p>Una idea novedosa no garantiza éxito. La innovación debe conectar capacidades reales con una necesidad y lograr adopción.</p>
            <div className="market-signal" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          </div>
          <div className="market-factors">
            {marketFactors.map(([title, text], index) => (
              <article key={title}>
                <span><Check size={16} /></span>
                <div><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section future-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>05</span> Horizontes tecnológicos</p>
              <h2>El futuro</h2>
            </div>
            <p>Cinco campos con potencial para ampliar capacidades y responder a desafíos complejos.</p>
          </div>
          <div className="future-grid">
            {futureFields.map(({ icon: Icon, code, title, description, importance, example }, index) => (
              <article key={title} className={index === 0 ? 'featured' : ''}>
                <div className="future-card-top"><Icon size={26} /><span>{code} / 0{index + 1}</span></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <dl>
                  <div><dt>Importancia futura</dt><dd>{importance}</dd></div>
                  <div><dt>Aplicación básica</dt><dd>{example}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="sources" aria-labelledby="science-sources">
          <div>
            <p className="eyebrow">Base académica</p>
            <h2 id="science-sources">Referencias consultadas</h2>
          </div>
          <div className="source-links">
            <a href="https://www.oecd.org/en/publications/oslo-manual-2018_9789264304604-en.html" target="_blank" rel="noreferrer">OECD · Manual de Oslo <ExternalLink size={14} /></a>
            <a href="https://www.oecd.org/en/publications/frascati-manual-2015_9789264239012-en.html" target="_blank" rel="noreferrer">OECD · Manual de Frascati <ExternalLink size={14} /></a>
            <a href="https://www.unesco.org/en/query-list/s/science-technology-and-innovation" target="_blank" rel="noreferrer">UNESCO · CTI <ExternalLink size={14} /></a>
            <a href="https://www.iso.org/standard/75068.html" target="_blank" rel="noreferrer">ISO · Innovación <ExternalLink size={14} /></a>
          </div>
        </section>
      </div>
    </article>
  )
}
