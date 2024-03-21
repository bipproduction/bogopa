/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Center, HStack, Icon, Text, VStack} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {X} from 'lucide-react-native';
import {TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native';

export default function ViewLiveSelesai({navigation}: any) {
  return (
    <>
      <Box bgColor="$black" h={'$full'}>
        <Box style={{padding: 15}}>
          <TouchableOpacity
            style={{paddingRight: 10, width: 20}}
            onPress={() => {
              navigation.navigate('MenuUtama');
            }}>
            <Icon as={X} size="xl" mt={1} color="white" />
          </TouchableOpacity>
        </Box>
        <Center>
          <Text fontSize={24} color="white">
            LIVE Berakhir
          </Text>
          <Text fontSize={14} color="#B3B0B0" pb={50}>
            Durasi SIARAN: 00.00.33
          </Text>
          <View
            style={{
              width: 155,
              height: 155,
              borderRadius: 100,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 100,
                backgroundColor: '#f5d0fe',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={{uri: 'https://i.pravatar.cc/1000?img=3'}}
            />
          </View>
        </Center>
        <HStack justifyContent="space-around" pt={50}>
          <VStack alignItems="center">
            <Text color="white" fontSize={40}>
              1
            </Text>
            <Text color="white" fontSize={20}>
              Jumlah LIVE
            </Text>
          </VStack>
          <VStack alignItems="center">
            <Text color="white" fontSize={40}>
              0
            </Text>
            <Text color="white" fontSize={20}>
              Pengikut Baru
            </Text>
          </VStack>
        </HStack>
        <HStack justifyContent="space-around" pt={50}>
          <VStack alignItems="center">
            <Text color="white" fontSize={40}>
              1
            </Text>
            <Text color="white" fontSize={20}>
              Penonton
            </Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
}
