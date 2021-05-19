import { BottomSheetBackgroundProps, BottomSheetModal as SheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@react-navigation/native";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle } from "react-native-reanimated";

const CustomBackground = ({ style, animatedIndex }) => {
  const theme = useTheme();
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(animatedIndex.value, [0, 1], ["#ffffff", theme.colors.primary]),
  }));
  const containerStyle = useMemo(() => [style, containerAnimatedStyle], [style, containerAnimatedStyle]);

  // render
  return <Animated.View pointerEvents="none" style={[containerStyle, { opacity: 0.5 }]} />;
};

const BottomSheetModal = React.forwardRef(({ index = 1, snap = ["25%", "50%"], children, ...others }, ref) => {
  // variables
  const snapPoints = useMemo(() => snap, [snap]);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <SheetModal
      ref={ref}
      index={index}
      //   style={{ zIndex: 1000000 }}
      backdropComponent={CustomBackground}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      {...others}
    >
      {children}
    </SheetModal>
  );
});

export default BottomSheetModal;
