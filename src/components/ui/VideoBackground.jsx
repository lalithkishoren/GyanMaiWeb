export default function VideoBackground({ src, gradient, style = {} }) {
  return (
    <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', overflow: 'hidden', ...style }}>
      {src ? (
        <video
          autoPlay muted loop playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div style={{
          width: '100%',
          height: '100%',
          background: gradient || 'linear-gradient(135deg, #4F7EF5 0%, #2DC4A2 100%)',
        }} />
      )}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%)',
      }} />
    </div>
  );
}
