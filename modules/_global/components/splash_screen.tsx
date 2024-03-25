/* eslint-disable react-native/no-inline-styles */
import {Box} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import React from 'react';
import {Image} from 'react-native';
import {View} from 'react-native';

export default function SplashScreen() {
  return (
    <Box bgColor="$fuchsia200" h={'$full'}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('..//..//..//assets/bogopa.png')}
          style={{height: 130, width: 130}}
          alt="Bogopa"
        />
        <Text fontSize={'$2xl'} fontWeight="$bold" pt={'$1'}>
          BOGOPA
        </Text>
      </View>
    </Box>
  );
}
