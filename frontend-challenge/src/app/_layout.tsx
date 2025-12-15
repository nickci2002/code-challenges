import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="list"
        options={{
          headerTitle: 'Browse Courts',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="rating"
        options={{
          headerTitle: 'Court Ratings',
        }}
      />
    </Stack>
  );
}
