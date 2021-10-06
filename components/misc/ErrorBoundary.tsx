import React from "react";
import { Button, Paragraph } from "react-native-paper";

export default class ErrorBoundary extends React.Component<
  {},
  { hasError: boolean; error: any }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Paragraph>
            Something went wrong. {this.state.error?.message}
          </Paragraph>
          <Paragraph>Please reload the page or change your state </Paragraph>
          <Button
            onPress={() => this.setState({ hasError: false, error: undefined })}
          >
            Reset
          </Button>
        </>
      );
    }

    return this.props.children;
  }
}
