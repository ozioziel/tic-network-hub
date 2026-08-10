const connections = [
  [76, 94, 208, 146],
  [208, 146, 332, 78],
  [208, 146, 396, 244],
  [396, 244, 548, 164],
  [548, 164, 696, 228],
  [696, 228, 848, 96],
  [696, 228, 938, 310],
  [396, 244, 310, 398],
  [310, 398, 510, 462],
  [510, 462, 720, 390],
  [720, 390, 938, 310],
  [720, 390, 880, 514],
  [310, 398, 130, 510],
]

const nodes = [
  [76, 94],
  [208, 146],
  [332, 78],
  [396, 244],
  [548, 164],
  [696, 228],
  [848, 96],
  [938, 310],
  [310, 398],
  [510, 462],
  [720, 390],
  [880, 514],
  [130, 510],
]

export default function VideoBackground() {
  return (
    <div className="video-background" aria-hidden="true">
      <video autoPlay muted loop playsInline>
        <source src="/videos/technology-background.mp4" type="video/mp4" />
      </video>
      <div className="video-fallback" />
      <svg className="network-map" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        {connections.map(([x1, y1, x2, y2], index) => (
          <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
        {nodes.map(([cx, cy], index) => (
          <g key={index}>
            <circle className="node-pulse" cx={cx} cy={cy} r="9" />
            <circle cx={cx} cy={cy} r="2.8" />
          </g>
        ))}
      </svg>
      <div className="scan-lines" />
      <div className="video-overlay" />
    </div>
  )
}
