import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, images } from "../constants";
import { Icons } from '@expo/vector-icons';
import Icon from "react-native-dynamic-vector-icons";
import { MaterialCommunityIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useFonts, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
// Import Screens Start //
import Today from "./Root/Today";
import Bible from "./Root/Bible";
import Quiz from "./Root/Quiz";
import Me from "./Root/Me";
import { AccessibilityInfo } from 'react-native-web';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TobBarNav from "./Root/TobBarNav";
// Import Screens End //

const TabArr = [

  { route: 'Bible', label: 'Bible', component: Bible, iconType: "FontAwesome5", activeIcon: 'bible', inActiveIcon: 'bible' },
  { route: 'Quiz', label: 'Quiz', component: Quiz, iconType: "MaterialCommunityIcons", activeIcon: 'comment-question', inActiveIcon: 'comment-question-outline' },
  { route: 'Me', label: 'Me', component: Me, iconType: "FontAwesome", activeIcon: 'user', inActiveIcon: 'user-o' }
]

const Tab = createBottomTabNavigator();

const TabButtonForToday = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={1}>
      <Icon
        type={item.iconType}
        name={item.activeIcon}
        color={focused ? COLORS.primary : '#939393'}
        size={26}
      />
    </TouchableOpacity>
  )
}
const TabButtonForSpecialOne = (props) => {
  const { onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={1}>
      <Icon
        type='MaterialCommunityIcons'
        name='calendar-month'
        color={focused ? COLORS.primary : '#939393'}
        size={26}
      />
    </TouchableOpacity>
  )
}
const TabButtonForQuiz = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name={"comment-question"}
        size={26}
      />
    </TouchableOpacity>
  )
}
const TabButtonForMe = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome
        name={"user"}
        size={26}
      />
    </TouchableOpacity>
  )
}
const Home = () => {
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand: require("../assets/fonts/Quicksand.ttf"),
    SegoeBold: require("../assets/fonts/SegoeBold.ttf"),
    SegoeSemibold: require("../assets/fonts/SegoeSemibold.ttf"),
  });

  if (fontsLoaded) {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
            paddingBottom: 10,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            fontSize: 18,
            fontFamily: 'SegoeSemibold'
          },
        }}
      >

        <Tab.Screen

          name='Today'
          component={TobBarNav}
          options={{
            tabBarLabel: 'Today',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'calendar-month' : 'calendar-month-outline'}
                color={color}
                size={26}
              />
            ),
            tabBarButton: (props) => <TabButtonForSpecialOne {...props} />
          }}
        />
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarLabel: item.label,
                tabBarIcon: ({ color, focused }) => (
                  <MaterialCommunityIcons
                    name={focused ? item.activeIcon : item.inActiveIcon}
                    color={color}
                    size={26}
                  />
                ),
                tabBarButton: (props) => <TabButtonForToday {...props} item={item} />
              }}
            />
          )
        })}
        {/* <Tab.Screen
          name="Today"
          component={Today}
          options={{
            tabBarLabel: "Today",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "calendar-month" : "calendar-month-outline"}
                color={color}
                size={26}
              />
            ),
            tabBarButton: (props) => <TabButtonForToday {...props} />
          }}
        />
        <Tab.Screen
          name="Bible"
          component={Bible}
          options={{
            tabBarLabel: "Bible",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5
                name={focused ? "bible" : "bible"}
                size={26}
                color={color} />
            ),
            tabBarButton: (props) => <TabButtonForBible {...props} />
          }} />
        <Tab.Screen name="Quiz" component={Quiz}
          options={{
            tabBarLabel: "Quiz",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "comment-question" : "comment-question-outline"}
                size={26}
                color={color} />

            ),
            tabBarButton: (props) => <TabButtonForQuiz {...props} />
          }}
        />
        <Tab.Screen
          name="Me"
          component={Me}
          options={{
            tabBarLabel: "Me",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                name={focused ? "user" : "user-o"}
                size={26}
                color={color} />

            ),
            tabBarButton: (props) => <TabButtonForMe {...props} />
          }}
        /> */}
      </Tab.Navigator>
    );
  } else {
    return (<Text>Hello</Text>)
  }
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileStyle: {
    padding: 0,
    margin: 0,
    backgroundColor: COLORS.primary,
    height: 160,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  textStyle: {
    color: "white",
    fontSize: 14,
    marginVertical: 15,
  },
  drawerContent: {
    padding: 0,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  itemIcon: {
    marginRight: 20,
    marginLeft: 20,
  },
  itemText: {
    color: "black",
    fontSize: 18,
  },
  itemBorderTop: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  drawerNavStyle: {
    padding: 0,
    margin: 0,
  },
});
