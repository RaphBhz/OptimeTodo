import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Locked from "./components/pages/Locked";
import Dev from "./components/pages/Dev";
import AndroidFonts from "./components/react-native-fonts-master/AndroidFonts";
import IosFonts from "./components/react-native-fonts-master/IosFonts";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVeOA_cBMKu4H8XkmGY-aiguQJ_cjt920",
  authDomain: "optimetodo-9ac02.firebaseapp.com",
  databaseURL: "https://optimetodo-9ac02-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "optimetodo-9ac02",
  storageBucket: "optimetodo-9ac02.appspot.com",
  messagingSenderId: "1012426508520",
  appId: "1:1012426508520:web:95bf5a4b5dd13e8b07215d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
