/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {HStack, Icon, Text} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {ArrowLeft} from 'lucide-react-native';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {ScrollView} from 'react-native';
import {TouchableOpacity, View} from 'react-native';

const db = [
  {
    id: 1,
    name: 'Dinda Kirana',
    img: {uri: 'https://i.pravatar.cc/1000?img=1'},
    waktu: 'Mengunjungi Profile 2 jam lalu',
  },
  {
    id: 2,
    name: 'Erlich Bachman',
    img: {uri: 'https://i.pravatar.cc/1000?img=2'},
    waktu: 'Mengunjungi Profile 2 jam lalu',
  },
  {
    id: 3,
    name: 'Monica Hall',
    waktu: 'Mengunjungi Profile 2 jam lalu',
    img: {uri: 'https://i.pravatar.cc/1000?img=3'},
  },
  {
    id: 4,
    name: 'Jared Dunn',
    waktu: 'Mengunjungi Profile 2 jam lalu',
    img: {uri: 'https://i.pravatar.cc/1000?img=4'},
  },
  {
    id: 5,
    name: 'Dinesh Chugtai',
    waktu: 'Mengunjungi Profile 2 jam laluv',
    img: {uri: 'https://i.pravatar.cc/1000?img=5'},
  },
  {
    id: 6,
    name: 'Dinesh Chugtai',
    waktu: 'Mengunjungi Profile 2 jam lalu',
    img: {uri: 'https://i.pravatar.cc/1000?img=6'},
  },
  {
    id: 7,
    name: 'Dinesh Chugtai',
    waktu: 'Mengunjungi Profile 2 jam lalu',
    img: {uri: 'https://i.pravatar.cc/1000?img=7'},
  },
  {
    id: 8,
    name: 'Dinesh Chugtai',
    waktu: 'Mengunjungi Profile 2 jam lalu',
    img: {uri: 'https://i.pravatar.cc/1000?img=8'},
  },
  {
    id: 9,
    name: 'Dinesh Chugtai',
    waktu: 'Mengunjungi Profile 2 jam lalu',
    img: {uri: 'https://i.pravatar.cc/1000?img=9'},
  },
  {
    id: 10,
    name: 'Dinesh Chugtai',
    waktu: 'Mengunjungi Profile 2 jam lalu',
    img: {uri: 'https://i.pravatar.cc/1000?img=10'},
  },
];

export default function ViewPengunjung({navigation}: any) {
  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <View
          style={{
            paddingVertical: 4,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon as={ArrowLeft} size="xl" mt={1} color="#000000" />
          </TouchableOpacity>
          <Text fontWeight="$bold" color="$black">
            Siapa Mengunjungi Saya
          </Text>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Box pl={'$4'} pr={'$4'} pt={'$3'}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {db.map(data => {
              return (
                <Box key={data.id}>
                  <HStack
                    marginBottom={5}
                    justifyContent="space-between"
                    alignItems="center">
                    <HStack>
                      <View
                        style={{
                          width: 57,
                          height: 57,
                          borderRadius: 100,
                          margin: 5,
                          backgroundColor: '#E1B3E2',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            width: 53,
                            height: 53,
                            borderRadius: 100,
                            backgroundColor: '#f5d0fe',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          source={data.img}
                          blurRadius={100}
                        />
                      </View>
                      <View
                        style={{
                          justifyContent: 'flex-start',
                          margin: 8,
                          alignItems: 'flex-start',
                        }}>
                        <Text
                          fontSize={15}
                          fontWeight="$bold"
                          bgColor="white"
                          color="white">
                          {data.name}
                        </Text>
                        <Text pt={5} fontSize={13}>
                          {data.waktu}
                        </Text>
                      </View>
                    </HStack>
                    <Button
                      size="xs"
                      variant="solid"
                      bgColor="#B347B5"
                      borderRadius={10}
                      isDisabled={false}
                      isFocusVisible={false}>
                      <ButtonText>Lihat</ButtonText>
                    </Button>
                  </HStack>
                </Box>
              );
            })}
          </ScrollView>
          <Button
            size="lg"
            variant="solid"
            isDisabled={false}
            borderRadius={10}
            bgColor="#B347B5"
            isFocusVisible={false}
            style={{position: 'absolute', bottom: 20, left: 16}}
            width={'$full'}>
            <ButtonText>Buka Kunci Sekarang </ButtonText>
          </Button>
        </Box>
      </Box>
    </>
  );
}
