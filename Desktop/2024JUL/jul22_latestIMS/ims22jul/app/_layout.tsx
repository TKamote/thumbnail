import { Stack } from "expo-router";
import React from "react";
// import YourScreen from './YourScreen';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      screenOptions={{
        headerTitle: "I M S",
        headerStyle: {
          backgroundColor: "#BCDEE6",
        },
        headerTintColor: "#000",
      }}
    >
      {children}
    </Stack>
  );
}
