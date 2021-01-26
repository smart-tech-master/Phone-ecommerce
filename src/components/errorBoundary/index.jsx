//@flow

import * as React from 'react'

type State = {
  hasError: boolean
}

type Props = {
  children: React.Node
}
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: boolean) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: any) {
    // You can also log the error to an error reporting service
    if (error) {
      this.setState({ hasError: true })
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
