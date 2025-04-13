
import {View, Text} from 'react-native';
import { Stack } from 'expo-router';

import React from 'react'

const HomeLayout = () => {
  return (

      <Stack>
         <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
         <Stack.Screen name='+not-found' options={{headerShown:false}}/>
      </Stack>
  )
}

export default HomeLayout;