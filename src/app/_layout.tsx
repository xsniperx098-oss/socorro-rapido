import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="tabs"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ferimentos"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}