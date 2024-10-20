import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";
import { IconHome } from "./components/icons/IconHome";
import { IconSettings } from "./components/icons/IconSettings";
import { Home } from "./screen/Home/Home";
import { Settings } from "./screen/Settings/Settings";

export default function Index() {
  const Tab = createBottomTabNavigator();

  return (
    // <NavigationContainer>
    <NativeBaseProvider>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Despesas"
          component={Home}
          options={{
            tabBarIcon: ({ size }) => <IconHome size={size} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Configurações"
          component={Settings}
          options={{
            tabBarIcon: ({ size }) => <IconSettings size={size} />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NativeBaseProvider>
    // </NavigationContainer>
  );
}
