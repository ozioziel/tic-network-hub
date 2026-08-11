import { ArrowUpRight, Radio, ShieldCheck, Wifi } from 'lucide-react'
import { Link } from 'react-router-dom'
import VideoBackground from '../components/VideoBackground'

const binaryColumns = [
  { text: '01001110 01100101 01110100', left: '4%', delay: '-2s' },
  { text: '10110100 01010100 01001001', left: '92%', delay: '-7s' },
  { text: '00110010 00110000 00110010', left: '19%', delay: '-11s' },
]

export default function HomePage() {
  return (
    <section className="home-page" aria-labelledby="welcome-title">
      <VideoBackground />

      {binaryColumns.map((column) => (
        <span
          key={column.left}
          className="floating-binary"
          style={{ left: column.left, animationDelay: column.delay }}
          aria-hidden="true"
        >
          {column.text}
        </span>
      ))}

      <div className="hero-status" aria-hidden="true">
        <span className="status-dot" />
        Sistema conectado
      </div>

      <div className="hero-content container">
        <div className="hero-kicker">
          <span>Gerencia de las TIC</span>
          <i />
          <span>Redes · Tecnología · Innovación</span>
        </div>

        <h1 id="welcome-title" className="hero-title">
          <span>BIEN</span>
          <span>VENIDO</span>
        </h1>

        <p className="hero-subtitle">
          Gestión de las TIC, redes e innovación
        </p>

        <div className="academic-card">
          <div className="student-block">
            <span className="field-label">Estudiantes: </span>
            <strong>
            <ul>
              <li>Alvaro Ariel Torrez Calle</li> 
              <li>Rodny Gerald Siles Barrenechea</li>
              <li>Luis Angel Paredes Torrez</li>
              <li>Oziel Rodman Ramos Torrez</li>              
            </ul>
            </strong>
          </div>
          <div className="teacher-block">
            <span className="field-label">Docente</span>
            <strong>Yamil Cárdenas Miguel PhD</strong>
          </div>
          <div className="subject-block">
            <span className="field-label">Asignatura</span>
            <strong>Gerencia de las TIC</strong>
          </div>
          <div className="year-block">
            <span className="field-label">Año</span>
            <strong>2026</strong>
          </div>
        </div>

        <Link className="primary-cta" to="/gestion-tecnologia">
          <span>Ingresar</span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>

      <div className="hero-footer container" aria-hidden="true">
        <span><Wifi size={15} /> Red activa</span>
        <span><Radio size={15} /> Nodo 01</span>
        <span><ShieldCheck size={15} /> Enlace seguro</span>
      </div>
    </section>
  )
}
