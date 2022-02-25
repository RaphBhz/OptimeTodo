import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Locked from "./components/pages/Locked";
import Dev from "./components/pages/Dev";
import AndroidFonts from "./components/react-native-fonts-master/AndroidFonts";
import IosFonts from "./components/react-native-fonts-master/IosFonts";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfTDPTKOqXTifAsUi8o44UNPkvJPKkv80",
  authDomain: "optimetodo.firebaseapp.com",
  databaseURL: "https://optimetodo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "optimetodo",
  storageBucket: "optimetodo.appspot.com",
  messagingSenderId: "1060067118634",
  appId: "1:1060067118634:web:43eb47dc9589ff96ebbd53",
  measurementId: "G-QQVBKNHPXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//see dev.tsx pour la navigation typescript
export type RootStackParams = {
	Dev: undefined;
	Locked: undefined;
	Ios: undefined;
	Android: undefined;
};

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Dev">
				<Stack.Screen name="Dev" component={Dev} />
				<Stack.Screen name="Locked" component={Locked} options={{headerShown: false}}/>
				<Stack.Screen name="Ios" component={IosFonts} />
				<Stack.Screen name="Android" component={AndroidFonts} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
