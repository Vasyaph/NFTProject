import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {useFonts} from "expo-font";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createStackNavigator();

const them = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,

    }
}

const App = () => {

    const [loaded] = useFonts({
        InterBold: require("./assets/fonts/Inter-Bold.ttf"),
        InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
        InterLight: require("./assets/fonts/Inter-Light.ttf"),
        InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("./assets/fonts/Inter-Regular.ttf")
    })

    if(!loaded) return null
    return (
        <NavigationContainer theme={them}>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <Stack.Screen name={"Home"} component={Home}/>
                <Stack.Screen name={"Details"} component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App
