/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  Button,
  ButtonText,
  HStack,
  Icon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {ArrowLeft} from 'lucide-react-native';
import React, {useEffect} from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import data from './data';
import {CheckCircleIcon} from '@gluestack-ui/themed';

export default function ViewLangganan({navigation}: any) {
  const {width: screenWidth} = Dimensions.get('window');

  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 1;

  const renderItem = ({item}: any) => (
    <Box>
      <View style={{padding: 20}}>
        <Box bg={item.bgColor} rounded={15}>
          <HStack justifyContent="space-between" alignItems="center">
            <Box p={10}>
              <Text
                fontSize={20}
                fontWeight="$bold"
                color="#FDFDFD"
                pb={10}
                pl={10}>
                {item.title}
              </Text>
              <HStack
                pl={5}
                alignContent="center"
                alignItems="center"
                space="md">
                <View
                  style={{
                    borderRadius: 100,
                    width: 55,
                    height: 55,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{uri: item.imgUrl}}
                    style={{
                      borderRadius: 50 / 2,
                      width: 50,
                      height: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                </View>
                <Text color="white">{item.body}</Text>
              </HStack>
            </Box>
            <Box p={15}>
              <Icon as={CheckCircleIcon} w="$10" h="$10" mt={1} color="white" />
            </Box>
          </HStack>
        </Box>
        <HStack justifyContent="space-between" pt={40}>
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
            <Box bg={item.bgKartu} p={18} rounded={20}>
              <VStack alignItems="center">
                <Text color={item.textBg} fontSize={40} fontWeight="$bold">
                  3
                </Text>
                <Text fontSize={10} color={item.textBg}>
                  bulan
                </Text>
                <Text fontSize={10} mt={20} color={item.textBg}>
                  Rp 134.000/bln
                </Text>
                <Text
                  fontSize={13}
                  mt={25}
                  color={item.textBg}
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
        <Box pt={30}>
          <HStack alignItems="center" space="md" mb={20}>
            <Box bg={item.bgKeuntungan} p={15} borderRadius={10}>
              <Icon as={item.icon1} size="xl" mt={1} color="white" />
            </Box>
            <Box>
              <Text fontSize={14} fontWeight="$bold" color="#030303">
                {item.judulKeuntungan1}
              </Text>
              <Text fontSize={11} pt={3}>
                {item.bodyKeuntungan1}
              </Text>
            </Box>
          </HStack>
          <HStack alignItems="center" space="md" mb={20}>
            <Box bg={item.bgKeuntungan2} p={15} borderRadius={10}>
              <Icon as={item.icon2} size="xl" mt={1} color="white" />
            </Box>
            <Box>
              <Text fontSize={14} fontWeight="$bold" color="#030303">
                {item.judulKeuntungan2}
              </Text>
              <Text fontSize={11} pt={3}>
                {item.bodyKeuntungan2}
              </Text>
            </Box>
          </HStack>
          <HStack alignItems="center" space="md" mb={20}>
            <Box bg={item.bgKeuntungan3} p={15} borderRadius={10}>
              <Icon as={item.icon3} size="xl" mt={1} color="white" />
            </Box>
            <Box>
              <Text fontSize={14} fontWeight="$bold" color="#030303">
                {item.judulKeuntungan3}
              </Text>
              <Text fontSize={11} pt={3}>
                {item.bodyKeuntungan3}
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box>
          <Button
            size="xl"
            variant="solid"
            isDisabled={false}
            borderRadius={10}
            bgColor={item.bgColor}
            isFocusVisible={false}>
            <ButtonText color={item.textBg} fontSize={16}>
              {item.total}
            </ButtonText>
          </Button>
        </Box>
      </View>
    </Box>
  );

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
            Langganan
          </Text>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Carousel
          layout="default"
          data={data}
          renderItem={renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </Box>
    </>
  );
}
