import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SuspenseWithPerf } from "reactfire";
import Screen from "../atoms/containers/Screen";
import Typography from "../atoms/typography/Typography";

/**
 * @param traceId traceId of Suspense
 * @param children React.Node
 * @return JSX.Element
 */

export const Suspense = ({ traceId = "load-status", children }) => {
  return (
    <React.Suspense
      fallback={
        <Screen>
          <Typography text="Loading..." />
        </Screen>
      }
      traceId={traceId}
    >
      {children}
    </React.Suspense>
  );
};

export default Suspense;

const styles = StyleSheet.create({});
