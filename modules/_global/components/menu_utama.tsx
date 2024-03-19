/* eslint-disable react/no-unstable-nested-components */
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  ButtonIcon,
  FavouriteIcon,
  Icon,
  MenuIcon,
  MessageCircleIcon,
  SearchIcon,
  SettingsIcon,
} from '@gluestack-ui/themed';
import DatingView from '../../dating/component/dating_view';
import {Live} from '../../live';
import {Chat} from '../../chat';
import {ProfileScreen} from '../../profile';
import {Button} from '@gluestack-ui/themed';
import {RepeatIcon} from '@gluestack-ui/themed';
import {Tv, User} from 'lucide-react-native';

export default function MenuUtama({navigation}: any) {
  const Tab = createBottomTabNavigator();
  return (
    <>
      {/* <NavigationContainer> */}
      <Tab.Navigator
        id="RootNavigator"
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerStyle: {backgroundColor: '#f5d0fe'},
          tabBarActiveTintColor: '#a21caf',
          tabBarInactiveTintColor: '#000000',
          tabBarStyle: {backgroundColor: '#f5d0fe', paddingBottom: 3},
        }}>
        <Tab.Screen
          name="BOGOPA"
          component={DatingView}
          options={{
            tabBarIcon: ({color}) => (
              <Icon as={FavouriteIcon} color={color} size="xl" />
            ),

            title: 'BOGOPA',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Button
                borderRadius="$3xl"
                size="xl"
                variant="link"
                pr="$4.5"
                onPress={() =>
                  navigation.navigate('Pengaturan', {name: 'Submit'})
                }>
                <ButtonIcon as={MenuIcon} size="xl" color="$black" />
              </Button>
            ),
            headerLeft: () => (
              <Button
                borderRadius="$3xl"
                size="xl"
                variant="link"
                pl="$4.5"
                // onPress={() =>
                //   navigation.navigate('Pengaturan', {name: 'Submit'})
                // }
              >
                <ButtonIcon as={RepeatIcon} size="xl" color="$black" />
              </Button>
            ),
          }}
        />
        <Tab.Screen
          name="Live"
          component={Live}
          options={{
            title: 'LIVE BOGOPA',
            tabBarIcon: ({color}) => <Icon as={Tv} color={color} size="xl" />,
            headerRight: () => (
              <Button
                borderRadius="$3xl"
                size="xl"
                variant="link"
                pr="$4.5"
                onPress={() =>
                  navigation.navigate('New Live', {name: 'Submit'})
                }>
                <ButtonIcon as={Tv} size="xl" color="$black" />
              </Button>
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            title: 'CHAT',
            tabBarIcon: ({color}) => (
              <Icon as={MessageCircleIcon} color={color} size="xl" />
            ),
            headerRight: () => (
              <Button
                borderRadius="$3xl"
                size="xl"
                variant="link"
                pr="$4.5"
                onPress={() =>
                  navigation.navigate('SearchUser', {name: 'Submit'})
                }>
                <ButtonIcon as={SearchIcon} size="xl" color="$black" />
              </Button>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'PROFILE',
            tabBarIcon: ({color}) => <Icon as={User} color={color} size="xl" />,
            headerRight: () => (
              <Button
                borderRadius="$3xl"
                size="xl"
                variant="link"
                pr="$4.5"
                onPress={() =>
                  navigation.navigate('PengaturanProfile', {name: 'Submit'})
                }>
                <ButtonIcon as={SettingsIcon} size="xl" color="$black" />
              </Button>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
