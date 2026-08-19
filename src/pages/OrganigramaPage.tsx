import {
  ArrowDown,
  Download,
  ExternalLink,
  FileText,
  Gauge,
  Network,
  Radar,
  ShieldCheck,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

type Role = {
  id: string
  code: string
  name: string
  title: string
  category: string
  jornada: string
  icon: LucideIcon
  summary: string
  highlights: string[]
  file: string
}

const lead: Role = {
  id: 'coordinador',
  code: 'TIC-RED-001',
  name: 'Oziel Rodman Ramos Torrez',
  title: 'Scrum Master / Coordinador de Redes',
  category: 'Directivo',
  jornada: 'Mañana y tarde',
  icon: Users,
  summary:
    'Dirige la operación integral de la red y facilita el marco Scrum dentro del equipo, asegurando la entrega continua de valor.',
  highlights: [
    'Coordina al equipo de administración, seguridad y soporte.',
    'Gestiona el presupuesto y los recursos del área.',
    'Toma decisiones críticas ante incidentes y contingencias.',
  ],
  file: 'puesto-coordinador.pdf',
}

const team: Role[] = [
  {
    id: 'administrador',
    code: 'TIC-RED-002',
    name: 'Rodny Gerald Siles Barrenechea',
    title: 'Administrador de Redes',
    category: 'Profesional / Técnico especializado',
    jornada: 'Mañana y tarde',
    icon: Network,
    summary:
      'Diseña, configura y mantiene la infraestructura de red cableada e inalámbrica que soporta los servicios de la organización.',
    highlights: [
      'Administra enrutadores, conmutadores, cortafuegos y puntos de acceso.',
      'Gestiona direccionamiento, segmentación y calidad de servicio.',
      'Mantiene documentación, respaldos y diagramas de red.',
    ],
    file: 'puesto-administrador.pdf',
  },
  {
    id: 'seguridad',
    code: 'TIC-RED-003',
    name: 'Luis Angel Paredes Torrez',
    title: 'Especialista en Seguridad de Redes',
    category: 'Profesional / Técnico especializado',
    jornada: 'Mañana y tarde',
    icon: ShieldCheck,
    summary:
      'Protege la integridad, disponibilidad y confidencialidad de la información que circula por la red corporativa.',
    highlights: [
      'Define políticas de cortafuegos, acceso y segmentación segura.',
      'Ejecuta análisis de vulnerabilidades y hardening de dispositivos.',
      'Coordina la detección y respuesta ante incidentes.',
    ],
    file: 'puesto-seguridad.pdf',
  },
  {
    id: 'soporte',
    code: 'TIC-RED-004',
    name: 'Alvaro Ariel Torrez Calle',
    title: 'Soporte y Monitoreo de Redes',
    category: 'Técnico / Operativo',
    jornada: 'Mañana y tarde',
    icon: Radar,
    summary:
      'Vigila de forma continua el estado de la red y atiende en primera línea los incidentes de conectividad de los usuarios.',
    highlights: [
      'Opera las plataformas de monitoreo, alertas y tableros.',
      'Atiende y clasifica los tickets de soporte de primer nivel.',
      'Elabora reportes de disponibilidad, tráfico e incidentes.',
    ],
    file: 'puesto-soporte.pdf',
  },
]

const allRoles = [lead, ...team]

const docUrl = (file: string) => `${import.meta.env.BASE_URL}docs/formato-original/${file}`

const chartUrl = `${import.meta.env.BASE_URL}docs/organigrama.pdf`

function RoleNode({ role, variant, onOpen }: { role: Role; variant: 'lead' | 'team'; onOpen: (role: Role) => void }) {
  const Icon = role.icon
  return (
    <button
      type="button"
      className={`org-node org-node-${variant}`}
      onClick={() => onOpen(role)}
      aria-haspopup="dialog"
    >
      <span className="org-node-top">
        <Icon size={variant === 'lead' ? 26 : 22} aria-hidden="true" />
        <span className="org-node-code">{role.code}</span>
      </span>
      <span className="org-node-name">{role.name}</span>
      <span className="org-node-title">{role.title}</span>
      <span className="org-node-cta">
        <FileText size={14} aria-hidden="true" />
        Ver descripción del puesto
      </span>
    </button>
  )
}

export default function OrganigramaPage() {
  const [active, setActive] = useState<Role | null>(null)

  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (!active) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [active, close])

  return (
    <article className="academic-page org-page">
      <header className="page-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="container page-hero-content">
          <div className="page-hero-copy">
            <p className="eyebrow">
              <span>04</span> Estructura interna
            </p>
            <h1>
              Organigrama<br />
              <em>de la Empresa</em>
            </h1>
            <p className="page-lead">
              La estructura jerárquica y funcional del departamento de Redes. Selecciona cualquier puesto para
              consultar su descripción completa: finalidad, funciones, relaciones, responsabilidades y requerimientos.
            </p>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="orbit-core">
              <Users size={42} />
            </span>
            <span className="orbit-node node-a" />
            <span className="orbit-node node-b" />
            <span className="orbit-node node-c" />
            <code>SYS://ORGANIGRAMA</code>
          </div>
        </div>
        <a className="scroll-cue" href="#estructura">
          Explorar estructura <ArrowDown size={16} />
        </a>
      </header>

      <div className="container academic-content">
        <section id="estructura" className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span>01</span> Departamento de Redes
              </p>
              <h2>Estructura del equipo</h2>
            </div>
            <p>
              Cuatro puestos conforman el área. Haz clic en cada tarjeta para desplegar el documento que describe qué
              hace ese rol.
            </p>
          </div>

          <div className="org-chart" aria-label="Organigrama del departamento de Redes">
            <div className="org-level org-level-lead">
              <RoleNode role={lead} variant="lead" onOpen={setActive} />
            </div>
            <div className="org-connector" aria-hidden="true">
              <span className="org-stem" />
              <span className="org-bar" />
              <span className="org-drop org-drop-1" />
              <span className="org-drop org-drop-2" />
              <span className="org-drop org-drop-3" />
            </div>
            <div className="org-level org-level-team">
              {team.map((role) => (
                <RoleNode key={role.id} role={role} variant="team" onOpen={setActive} />
              ))}
            </div>
          </div>

          <div className="org-legend">
            <div className="org-legend-item">
              <Gauge size={18} aria-hidden="true" />
              <div>
                <strong>4 puestos</strong>
                <span>1 directivo · 2 profesionales · 1 técnico operativo</span>
              </div>
            </div>
            <div className="org-legend-item">
              <Network size={18} aria-hidden="true" />
              <div>
                <strong>Dependencia jerárquica</strong>
                <span>Los tres puestos operativos reportan al Coordinador de Redes</span>
              </div>
            </div>
            <a className="org-legend-item org-legend-link" href={chartUrl} target="_blank" rel="noreferrer">
              <Download size={18} aria-hidden="true" />
              <div>
                <strong>Organigrama en PDF</strong>
                <span>Descargar la lámina completa</span>
              </div>
            </a>
          </div>
        </section>

        <section className="content-section org-index-section">
          <div className="section-heading compact">
            <div>
              <p className="eyebrow">
                <span>02</span> Documentación
              </p>
              <h2>Descripción de puestos</h2>
            </div>
            <p>Cada puesto cuenta con su manual de funciones en formato institucional.</p>
          </div>

          <div className="org-index">
            {allRoles.map((role) => (
              <button key={role.id} type="button" className="org-index-row" onClick={() => setActive(role)}>
                <span className="org-index-code">{role.code}</span>
                <span className="org-index-body">
                  <strong>{role.title}</strong>
                  <small>
                    {role.name} · {role.category}
                  </small>
                </span>
                <span className="org-index-action">
                  <FileText size={16} aria-hidden="true" />
                  Abrir PDF
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>

      {active ? (
        <div
          className="org-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="org-modal-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) close()
          }}
        >
          <div className="org-modal-panel">
            <header className="org-modal-head">
              <div>
                <p className="org-modal-code">{active.code}</p>
                <h2 id="org-modal-title">{active.title}</h2>
                <p className="org-modal-person">
                  {active.name} · {active.category} · {active.jornada}
                </p>
              </div>
              <button type="button" className="org-modal-close" onClick={close} aria-label="Cerrar">
                <X size={20} />
              </button>
            </header>

            <div className="org-modal-body">
              <aside className="org-modal-aside">
                <p className="org-modal-summary">{active.summary}</p>
                <ul className="org-modal-list">
                  {active.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="org-modal-actions">
                  <a className="org-modal-action" href={docUrl(active.file)} target="_blank" rel="noreferrer">
                    <ExternalLink size={15} aria-hidden="true" />
                    Abrir en pestaña nueva
                  </a>
                  <a className="org-modal-action" href={docUrl(active.file)} download>
                    <Download size={15} aria-hidden="true" />
                    Descargar PDF
                  </a>
                </div>
              </aside>

              <div className="org-modal-viewer">
                <iframe
                  key={active.id}
                  src={`${docUrl(active.file)}#view=FitH`}
                  title={`Descripción del puesto: ${active.title}`}
                />
                <p className="org-modal-fallback">
                  ¿No se muestra el documento?{' '}
                  <a href={docUrl(active.file)} target="_blank" rel="noreferrer">
                    Ábrelo aquí
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  )
}
