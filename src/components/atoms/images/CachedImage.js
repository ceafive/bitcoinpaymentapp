import React from "react";
import CachedImageComp from "react-native-expo-cached-image";

const CachedImage = ({ isBackground = false, source, style = {}, ...props }) => {
  return <CachedImageComp style={style} isBackground={isBackground} source={source} {...props} />;
};

export default CachedImage;
