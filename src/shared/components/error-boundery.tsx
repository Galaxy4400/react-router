import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		console.log(`error: ${error.message}`);

		return {
			hasError: true,
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.log(`error: ${error.message}`);
		console.log(`errorInfo: ${errorInfo}`);
	}

	render() {
		if (this.state.hasError) {
			return <h3>Something went wrong!</h3>;
		}

		return this.props.children;
	}
}
