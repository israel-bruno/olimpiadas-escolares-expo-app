import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Rotas from "./paginas/routes";
import Login from "./paginas/login";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={!localStorage.getItem("api-token") ? "login" : "Rotas"}>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Rotas" component={Rotas} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
