/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Button, ButtonText, HStack, Icon, VStack} from '@gluestack-ui/themed';
import {Box, Text} from '@gluestack-ui/themed';
import {ArrowLeft, X} from 'lucide-react-native';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import Modal from 'react-native-modal';

const db = [
  {
    id: 1,
    name: 'Dinda Kirana',
    img: {uri: 'https://i.pravatar.cc/1000?img=1'},
    chat: 'Assalammualaikum aa',
  },
  {
    id: 2,
    name: 'Erlich Bachman',
    img: {uri: 'https://i.pravatar.cc/1000?img=2'},
    chat: 'Assalammualaikum ss',
  },
  {
    id: 3,
    name: 'Monica Hall',
    chat: 'Assalammualaikum ff',
    img: {uri: 'https://i.pravatar.cc/1000?img=3'},
  },
  {
    id: 4,
    name: 'Jared Dunn',
    chat: 'Assalammualaikum bb',
    img: {uri: 'https://i.pravatar.cc/1000?img=4'},
  },
  {
    id: 5,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum vvv',
    img: {uri: 'https://i.pravatar.cc/1000?img=5'},
  },
  {
    id: 6,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum dw',
    img: {uri: 'https://i.pravatar.cc/1000?img=6'},
  },
  {
    id: 7,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum mm',
    img: {uri: 'https://i.pravatar.cc/1000?img=7'},
  },
  {
    id: 8,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum ll',
    img: {uri: 'https://i.pravatar.cc/1000?img=8'},
  },
  {
    id: 9,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum ff',
    img: {uri: 'https://i.pravatar.cc/1000?img=9'},
  },
  {
    id: 10,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum 11',
    img: {uri: 'https://i.pravatar.cc/1000?img=10'},
  },
];

export default function ViewDisukai({navigation}: any) {
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
            Disukai(151)
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
            <View style={styles.container}>
              {db.map(data => {
                return (
                  <View style={styles.item} key={data.id}>
                    <TouchableOpacity onPress={handleModal}>
                      <Image
                        style={{
                          width: 'auto',
                          height: 150,
                        }}
                        source={data.img}
                        blurRadius={20}
                        borderRadius={10}
                      />
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
            style={{position: 'absolute', bottom: 20, left: 16}}
            width={'$full'}>
            <ButtonText>Lihat Suka Saya </ButtonText>
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
              Lihat Siapa Suka Saya
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
                <Text fontSize={11} mt={20} color="#D1B378">
                  Rp 35.782/bln
                </Text>
                <Text fontSize={11} mt={25} color="#D1B378">
                  Rp 439.782
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
              <Box bg="#684105" p={18} rounded={20}>
                <VStack alignItems="center">
                  <Text color="#FFFFFF" fontSize={40} fontWeight="$bold">
                    3
                  </Text>
                  <Text fontSize={10} color="#FFFFFF">
                    bulan
                  </Text>
                  <Text fontSize={11} mt={20} color="#EFA739">
                    Rp 35.782/bln
                  </Text>
                  <Text
                    fontSize={14}
                    mt={25}
                    color="#FFFFFF"
                    fontWeight="$bold">
                    Rp 159.000
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
                <Text fontSize={11} mt={20} color="#D1B378">
                  Rp 80.782/bln
                </Text>
                <Text fontSize={11} mt={25} color="#D1B378">
                  Rp 80.782
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
              bgColor="#684105"
              isFocusVisible={false}
              width={'$full'}>
              <ButtonText>Rp 159.000 Beli Sekarang </ButtonText>
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
