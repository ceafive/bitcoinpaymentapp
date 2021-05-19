import React from "react";
import { Caption, Headline, Paragraph, Subheading, Text, Title } from "react-native-paper";

export const types = {
  Text,
  Paragraph,
  Title,
  Subheading,
  Headline,
  Caption,
};

/**
 * @param text  text to render
 * @param type type of text to render
 * @param textStyles styles object to apply to text
 * @param children React.Node to render
 * @return JSX.Element
 */

const Typography = ({ text = null, type = Text, textStyles = {}, children, ...props }) => {
  const ComponentToRender = type;

  return (
    <ComponentToRender style={textStyles} {...props}>
      {text && text}
      {children}
    </ComponentToRender>
  );
};

export default Typography;
