import { create } from "tailwind-react-native";

import styles from "./styles.json";

const { style, variant, useTransition } = create(styles);

export { style, styles, variant, useTransition };
