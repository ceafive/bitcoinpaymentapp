import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { StyleSheet, Text, View } from "react-native";

import Screen from "../atoms/containers/Screen";
import Typography, { types } from "../atoms/typography/Typography";

/**
 * @param errorText error text to render
 * @return JSX.Element
 */

const ErrorFallback = ({ errorText = "error" }) => {
  return <Screen>{errorText && <Typography text={errorText} textStyles={{ color: "red" }} />}</Screen>;
};

const ErrorComponent = ({ FallbackComponent = ErrorFallback }) => {
  return <ErrorBoundary FallbackComponent={FallbackComponent}>{children}</ErrorBoundary>;
};

export default ErrorComponent;
