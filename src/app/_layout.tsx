import '@/styles/global.css';

import { defaultTheme } from '@/styles/theme';

import { ThemeProvider } from '@react-navigation/native';
import {  Stack } from 'expo-router';

export {
  ErrorBoundary,
} from 'expo-router';

function RootLayout() {
  return (
    <ThemeProvider value={defaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            statusBarStyle: 'dark'
          }}
        />

        <Stack.Screen
          name="create-todo"
          options={{
            statusBarTranslucent: true
          }}
        />

        <Stack.Screen
          name="home"
          options={{
            statusBarTranslucent: true
          }}
        />
      </Stack>
    </ThemeProvider>
  )
}

export default RootLayout;
