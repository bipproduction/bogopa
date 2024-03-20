/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Button, Center, Text} from '@gluestack-ui/themed';
import {ButtonText, HStack, Icon} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {RefreshCcw, X} from 'lucide-react-native';
import React from 'react';
import {Image, TextInput, TouchableOpacity} from 'react-native';

export default function ViewLive({navigation}: any) {
  return (
    <>
      <Box bgColor="$black" h={'$full'}>
        <Box style={{position: 'absolute', padding: 15}}>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon as={X} size="xl" mt={1} color="white" />
          </TouchableOpacity>
        </Box>
        <Box pl={20} pr={20}>
          <Box
            bg="#424242"
            w={'$full'}
            p={10}
            style={{
              borderRadius: 30 / 2,
              position: 'absolute',
              left: 20,
              top: 80,
            }}>
            <HStack space="md">
              <Image
                width={60}
                height={60}
                borderRadius={30 / 2}
                source={{uri: 'https://i.pravatar.cc/1000?img=10'}}
              />
              <TextInput placeholder="Isi judul ruang LIVE" />
            </HStack>
          </Box>
        </Box>
        <Box
          style={{position: 'absolute', bottom: 20}}
          w={'$full'}
          pl={20}
          pr={20}>
          <TouchableOpacity>
            <Center pb={30}>
              <Icon as={RefreshCcw} size="xl" mb={10} color="white" />
              <Text color="white">Balik</Text>
            </Center>
          </TouchableOpacity>
          <Button
            size="lg"
            variant="solid"
            isDisabled={false}
            borderRadius={10}
            bgColor="#B347B5"
            onPress={() => navigation.navigate('MulaiLive')}
            isFocusVisible={false}>
            <ButtonText>Mulai Siaran</ButtonText>
          </Button>
        </Box>
      </Box>
    </>
  );
}
