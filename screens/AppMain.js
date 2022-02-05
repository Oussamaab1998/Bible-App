import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import {
  BeforeSplash,
  Splash,
  Register,
  Login,
  Recovery,
  Home,
} from "./index.js";
import QuizQuestion from "./Root/QuizQuestion.js";
import BibleSerch from "./Root/today-screens/BibleSerch.js";
import BookSearch from "./Root/BookSearch.js";
const Stack = createStackNavigator();

const mapState = ({ user }) => ({
  currentProperty: user.currentProperty,
});

const AppMain = () => {
  const { currentProperty } = useSelector(mapState);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialeRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        {!currentProperty && (
          <>
            <Stack.Screen name="BeforeSplash" component={BeforeSplash} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Recovery" component={Recovery} />
          </>
        )}
        {currentProperty && (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="QuizQuestion" component={QuizQuestion} />
            <Stack.Screen name="BookSearch" component={BookSearch} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppMain;
