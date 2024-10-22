import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../home/home";
import Calendar from "../calendar/calendar";
import Profile from "../profile/profile";
import icon from "../../constants/icon";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function Main(){
    return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerTitleAlign: 'center',
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29}}/>
                },
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.home} style={{width: 25, height: 25, opacity: focused ? 0.3 : 1}}/>
                },
                tabBarShowLabel: false
            }}/>
            <Tab.Screen name="Calendar" component={Calendar} options={{
                headerTitleAlign: 'center',
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29}}/>
                },
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.calendar} style={{width: 25, height: 25, opacity: focused ? 0.3 : 1}}/>
                },
                tabBarShowLabel: false
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                headerTitleAlign: 'center',
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29}}/>
                },
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.profile} style={{width: 25, height: 25, opacity: focused ? 0.3 : 1}}/>
                },
                tabBarShowLabel: false
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
    
)}


export default  Main;