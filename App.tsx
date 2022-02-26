import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Locked from "./components/pages/Locked";
import Dev from "./components/pages/Dev";

import Home from './components/pages/Home'
import AppLoading from './components/pages/AppLoading'
import { useFonts, RobotoMono_400Regular, RobotoMono_700Bold } from "@expo-google-fonts/roboto-mono";

//see dev.tsx pour la navigation typescript
export type RootStackParams = {
	Dev: undefined;
	Locked: undefined;
	Home: undefined;
};

const Stack = createNativeStackNavigator();

function App() {

	let [fontsLoaded] = useFonts({
		RobotoMono_400Regular,
		RobotoMono_700Bold
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {

		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
					<Stack.Screen name="Dev" component={Dev} />
					<Stack.Screen name="Locked" component={Locked} options={{headerShown: false}}/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

export default App;
