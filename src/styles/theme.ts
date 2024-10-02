import {
  type Theme,
  DefaultTheme,
} from '@react-navigation/native';

import { colors } from './tokens';

export const defaultTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
    text: colors.dark,
    primary: colors.primary,
  }
}
