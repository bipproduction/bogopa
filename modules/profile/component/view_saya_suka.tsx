/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Button, ButtonText, HStack, Icon, Text} from '@gluestack-ui/themed';
import {VStack} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {ArrowLeft, Star, X} from 'lucide-react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import Modal from 'react-native-modal';

const db = [
  {
    id: 1,
    waktu: 'Tersisa 22 jam',
    img: {uri: 'https://i.pravatar.cc/1000?img=1'},
    jarak: '4 km 21',
  },
  {
    id: 2,
    waktu: 'Tersisa 22 jam',
    img: {uri: 'https://i.pravatar.cc/1000?img=2'},
    jarak: '4 km 21',
  },
  {
    id: 3,
    waktu: 'Tersisa 22 jam',
    jarak: '4 km 21',
    img: {uri: 'https://i.pravatar.cc/1000?img=3'},
  },
  {
    id: 4,
    waktu: 'Tersisa 22 jam',
    jarak: '4 km 21',
    img: {uri: 'https://i.pravatar.cc/1000?img=4'},
  },
  {
    id: 5,
    waktu: 'Tersisa 22 jam',
    jarak: '4 km 21v',
    img: {uri: 'https://i.pravatar.cc/1000?img=5'},
  },
  {
    id: 6,
    waktu: 'Tersisa 22 jam',
    jarak: '4 km 21',
    img: {uri: 'https://i.pravatar.cc/1000?img=6'},
  },
  {
    id: 7,
    waktu: 'Tersisa 22 jam',
    jarak: '4 km 21',
    img: {uri: 'https://i.pravatar.cc/1000?img=7'},
  },
  {
    id: 8,
    waktu: 'Tersisa 22 jam',
    jarak: '4 km 21',
    img: {uri: 'https://i.pravatar.cc/1000?img=8'},
  },
  {
    id: 9,
    waktu: 'Tersisa 22 jam',
    jarak: '4 km 21',
    img: {uri: 'https://i.pravatar.cc/1000?img=9'},
  },
  {
    id: 10,
    waktu: 'Tersisa 22 jam',
    jarak: '4 km 21',
    img: {uri: 'https://i.pravatar.cc/1000?img=10'},
  },
];

export default function ViewSayaSuka({navigation}: any) {
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
            Saya suka
          </Text>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Box pl={'$4'} pr={'$4'} pt={'$3'}>
          <Box>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Box pb={'$3'}>
                <Text
                  alignItems="center"
                  textAlign="center"
                  color="$fuchsia800"
                  fontWeight="$bold">
                  Tingkatkan Suka agar orang lain dapat ,melihat Anda lebih
                  cepat
                </Text>
              </Box>
              <View style={styles.container}>
                {db.map(data => {
                  return (
                    <View style={styles.item} key={data.id}>
                      <TouchableOpacity onPress={handleModal}>
                        <Box>
                          <Image
                            style={{
                              width: 'auto',
                              height: 150,
                            }}
                            source={data.img}
                            borderRadius={10}
                          />
                          <Box
                            style={{
                              position: 'absolute',
                              bottom: 5,
                              left: 10,
                            }}>
                            <Text
                              color="white"
                              fontSize={12}
                              style={{
                                textShadowColor: 'rgba(1, 1, 1, 1)',
                                textShadowOffset: {width: 1, height: 1},
                                textShadowRadius: 10,
                              }}>
                              {data.waktu}
                            </Text>
                            <Text
                              color="white"
                              fontSize={16}
                              style={{
                                textShadowColor: 'rgba(1, 1, 1, 1)',
                                textShadowOffset: {width: 1, height: 1},
                                textShadowRadius: 10,
                              }}>
                              {data.jarak}
                            </Text>
                          </Box>
                          <Box
                            style={{
                              position: 'absolute',
                              bottom: 10,
                              right: 10,
                            }}>
                            <Box
                              bgColor="blue"
                              p={6}
                              style={{borderRadius: 50 / 2}}>
                              <Icon as={Star} size="lg" mt={1} color="white" />
                            </Box>
                          </Box>
                        </Box>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
            <Button
              size="lg"
              variant="solid"
              isDisabled={false}
              borderRadius={10}
              bgColor="#B347B5"
              isFocusVisible={false}
              onPress={handleModal}
              style={{position: 'absolute', bottom: 20}}
              width={'$full'}>
              <ButtonText>Buka “Suka” sekarang </ButtonText>
            </Button>
          </Box>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    paddingBottom: 15,
    width: '48%',
  },
});
