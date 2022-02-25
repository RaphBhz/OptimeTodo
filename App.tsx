import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Locked from "./components/pages/Locked";
import Dev from "./components/pages/Dev";
import AndroidFonts from "./components/react-native-fonts-master/AndroidFonts";
import IosFonts from "./components/react-native-fonts-master/IosFonts";

import Home from './components/pages/Home'

//see dev.tsx pour la navigation typescript
export type RootStackParams = {
	Dev: undefined;
	Locked: undefined;
	Ios: undefined;
	Android: undefined;
	Home: undefined;
};

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Dev">
				<Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
				<Stack.Screen name="Dev" component={Dev} />
				<Stack.Screen name="Locked" component={Locked} options={{headerShown: false}}/>
				<Stack.Screen name="Ios" component={IosFonts} />
				<Stack.Screen name="Android" component={AndroidFonts} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
