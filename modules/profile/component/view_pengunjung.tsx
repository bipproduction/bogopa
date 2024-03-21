/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {HStack, Icon, Text, VStack} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {ArrowLeft, X} from 'lucide-react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {ScrollView} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

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
                      isFocusVisible={false}
                      onPress={handleModal}>
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
            onPress={handleModal}
            style={{position: 'absolute', bottom: 20, left: 16}}
            width={'$full'}>
            <ButtonText>Buka Kunci Sekarang </ButtonText>
          </Button>
        </Box>
      </Box>
      <Modal isVisible={isModalVisible} coverScreen={true}>
        <View style={{backgroundColor: '#B347B5', borderRadius: 40 / 2}}>
          <HStack justifyContent="flex-end" p={15}>
            <TouchableOpacity onPress={handleModal}>
              <Icon as={X} size="xl" color="white" />
            </TouchableOpacity>
          </HStack>
          <VStack alignItems="center" space="3xl">
            <Text fontSize={20} fontWeight="$bold" color="white">
              PREMIUM
            </Text>
            <View
              style={{
                width: 135,
                height: 135,
                borderRadius: 100,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={{uri: 'https://i.pravatar.cc/1000?img=3'}}
              />
            </View>
          </VStack>
          <HStack justifyContent="space-between" p={10} pt={50}>
            <Box bg="#373737" p={18} rounded={20}>
              <VStack alignItems="center">
                <Text color="#D1B378" fontSize={40} fontWeight="$bold">
                  12
                </Text>
                <Text fontSize={10} color="#D1B378">
                  bulan
                </Text>
                <Text fontSize={10} mt={20} color="#D1B378">
                  Rp 100.000/bln
                </Text>
                <Text fontSize={10} mt={25} color="#D1B378">
                  Rp 1.300.000
                </Text>
              </VStack>
            </Box>
            <HStack>
              <Box
                bg="#373737"
                p={8}
                pl={15}
                pr={15}
                rounded={20}
                style={{
                  position: 'absolute',
                  zIndex: 999,
                  bottom: 168,
                  left: 19,
                }}>
                <Text fontSize={8} color="#FFFFFF">
                  Hemat 20%
                </Text>
              </Box>
              <Box bg="#C5C5C5" p={18} rounded={20}>
                <VStack alignItems="center">
                  <Text color="#444040" fontSize={40} fontWeight="$bold">
                    3
                  </Text>
                  <Text fontSize={10} color="#444040">
                    bulan
                  </Text>
                  <Text fontSize={10} mt={20} color="#444040">
                    Rp 134.000/bln
                  </Text>
                  <Text
                    fontSize={13}
                    mt={25}
                    color="#444040"
                    fontWeight="$bold">
                    Rp 459.000
                  </Text>
                </VStack>
              </Box>
            </HStack>
            <Box bg="#373737" p={18} rounded={20}>
              <VStack alignItems="center">
                <Text color="#D1B378" fontSize={40} fontWeight="$bold">
                  1
                </Text>
                <Text fontSize={10} color="#D1B378">
                  bulan
                </Text>
                <Text fontSize={10} mt={20} color="#D1B378">
                  Rp 199.000/bln
                </Text>
                <Text fontSize={11} mt={25} color="#D1B378">
                  Rp 199.000
                </Text>
              </VStack>
            </Box>
          </HStack>
          <Box p={15} pt={30}>
            <Button
              size="lg"
              variant="solid"
              isDisabled={false}
              borderRadius={10}
              bgColor="#C5C5C5"
              isFocusVisible={false}
              width={'$full'}>
              <ButtonText color="$black">
                Rp 459.000 Dapatkan Premium{' '}
              </ButtonText>
            </Button>
          </Box>
        </View>
      </Modal>
    </>
  );
}
