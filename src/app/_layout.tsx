import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="splash" />
      <Stack.Screen name="login" />
      <Stack.Screen name="cadastro" />
      <Stack.Screen name="esqueci-senha" />
      <Stack.Screen name="tabs" />
      <Stack.Screen name="categorias" />
      <Stack.Screen name="emergencia" />
      <Stack.Screen name="ferimentos" />
      <Stack.Screen name="medicamentos" />
      <Stack.Screen name="perfil" />
      <Stack.Screen name="picadas" />
      <Stack.Screen name="queimaduras" />
    </Stack>
  );
}