
import "react-native-reanimated";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { SystemBars } from "react-native-edge-to-edge";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(index)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const CustomDefaultTheme: Theme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      primary: "#2563eb", // Professional blue
      background: "#ffffff", // Clean white background
      card: "#ffffff", // White cards/surfaces
      text: "#1f2937", // Dark gray text
      border: "#e5e7eb", // Light gray borders
      notification: "#ef4444", // Red for notifications
    },
  };

  const CustomDarkTheme: Theme = {
    ...DarkTheme,
    colors: {
      primary: "#3b82f6", // Lighter blue for dark mode
      background: "#111827", // Dark background
      card: "#1f2937", // Dark card color
      text: "#f9fafb", // Light text
      border: "#374151", // Dark gray borders
      notification: "#f87171", // Light red for dark mode
    },
  };

  return (
    <>
      <StatusBar style="auto" animated />
      <ThemeProvider
        value={colorScheme === "dark" ? CustomDarkTheme : CustomDefaultTheme}
      >
        <GestureHandlerRootView>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="(index)" />
            <Stack.Screen 
              name="services" 
              options={{
                headerShown: true,
                title: "Our Services",
                headerStyle: { backgroundColor: "#2563eb" },
                headerTintColor: "#ffffff",
                headerTitleStyle: { fontFamily: "Montserrat_600SemiBold" },
              }}
            />
            <Stack.Screen 
              name="contact" 
              options={{
                headerShown: true,
                title: "Contact Us",
                headerStyle: { backgroundColor: "#2563eb" },
                headerTintColor: "#ffffff",
                headerTitleStyle: { fontFamily: "Montserrat_600SemiBold" },
              }}
            />
          </Stack>
          <SystemBars style={"auto"} />
        </GestureHandlerRootView>
      </ThemeProvider>
    </>
  );
}
