import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorMessage: '' }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error?.message || 'Unexpected runtime error',
    }
  }

  componentDidCatch(error, errorInfo) {
    // Keep logs in console for debugging while showing a user-friendly fallback.
    console.error('Runtime crash captured by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          padding: '24px',
          background: 'var(--bg)',
          color: 'var(--text)',
          fontFamily: 'Inter, sans-serif',
        }}>
          <div style={{ maxWidth: '760px', width: '100%', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', background: 'var(--surface-strong)' }}>
            <h1 style={{ margin: 0, fontSize: '1.2rem' }}>Something went wrong while rendering the page.</h1>
            <p style={{ marginTop: '10px', color: 'var(--text-muted)' }}>
              Please refresh once. If this keeps happening, share the error below.
            </p>
            <pre style={{ marginTop: '12px', whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '0.85rem' }}>
              {this.state.errorMessage}
            </pre>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
