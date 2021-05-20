import { BottomSheetModal as SheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@react-navigation/native";
import React, { useCallback, useMemo, useRef } from "react";
import Animated, { interpolateColor, useAnimatedStyle } from "react-native-reanimated";

const CustomBackground = ({ style, animatedIndex }) => {
  const theme = useTheme();
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(animatedIndex.value, [0, 1], ["#ffffff", theme.colors.primary]),
  }));
  const containerStyle = useMemo(() => [style, containerAnimatedStyle], [style, containerAnimatedStyle]);

  // render
  return <Animated.View pointerEvents="none" style={[containerStyle, { opacity: 0.1 }]} />;
};

const BottomSheetModal = React.forwardRef(({ name = null, index = 1, snap = ["25%", "50%"], children, ...others }, ref) => {
  // variables
  const snapPoints = useMemo(() => snap, [snap]);

  // renders
  return (
    <SheetModal ref={ref} name={name} index={index} backdropComponent={CustomBackground} snapPoints={snapPoints} {...others}>
      {children}
    </SheetModal>
  );
});

BottomSheetModal.displayName = "BottomSheetModal";

export default BottomSheetModal;
