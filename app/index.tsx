import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screen/Home/Home";
import { Settings } from "./screen/Settings/Settings";

export default function Index() {
  const Tab = createBottomTabNavigator();

  return (
    // <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
