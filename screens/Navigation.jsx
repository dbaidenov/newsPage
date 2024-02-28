import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen";
import { FullPostScreen } from "./FullPostScreen";

const Stack = createNativeStackNavigator();

const headerOptions = {
  headerTitleStyle: { color: "white" },
  headerStyle: { backgroundColor: "#a877d6" },
};

export const Navigation = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer
        theme={{
          colors: {
            background: "wheat",
          },
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Новости",
              ...headerOptions,
            }}
          />
          <Stack.Screen
            name="FullPost"
            component={FullPostScreen}
            options={{
              ...headerOptions,
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
