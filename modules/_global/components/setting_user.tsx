/* eslint-disable react-native/no-inline-styles */
import {
  ButtonText,
  Center,
  CheckboxIndicator,
  HStack,
  VStack,
} from '@gluestack-ui/themed';
import {Button, Text} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';
import {Checkbox} from '@gluestack-ui/themed';
import {CheckIcon} from '@gluestack-ui/themed';
import {CheckboxIcon} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {ArrowLeft, Gem} from 'lucide-react-native';
import React, {useState} from 'react';
import {Platform, TouchableOpacity} from 'react-native';

export default function SettingUser({route, navigation}: any) {
  const {showLogout} = route.params;
  const [value, setValue] = useState({values: [18, 26]});
  const multiSliderValuesChange = (values: any) => {
    setValue({
      values,
    });
  };

  const [jarak, setJarak] = useState({jaraks: [21]});
  const multiSliderJarakChange = (jaraks: any) => {
    setJarak({
      jaraks,
    });
  };

  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Box pl={'$4'} pr={'$4'} pt={'$3'}>
          <VStack>
            <TouchableOpacity
              style={{paddingRight: 10, width: 20}}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon as={ArrowLeft} size="xl" mt={1} color="#000000" />
            </TouchableOpacity>
            <Box pt={20}>
              <Text color="$fuchsia800" fontWeight="14">
                Tampilan Pengaturan Pengguna
              </Text>
            </Box>
            <HStack justifyContent="space-between" pt={30}>
              <Text color="$fuchsia800" fontWeight="14">
                Lokasi
              </Text>
              <VStack alignItems="flex-end" space="xs">
                <Text color="$fuchsia800" fontWeight="14">
                  Sesuikan Lokasi
                </Text>
                <Text color="$black" fontWeight="14">
                  Kuta
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent="space-between" pt={20}>
              <Text color="$fuchsia800" fontWeight="14">
                Jarak
              </Text>
              <Text color="$fuchsia800" fontWeight="14">
                {jarak.jaraks[0]} Km
              </Text>
            </HStack>
            <MultiSlider
              values={[jarak.jaraks[0]]}
              sliderLength={350}
              selectedStyle={{backgroundColor: '#B347B5'}}
              containerStyle={{alignSelf: 'center', marginTop: -10}}
              onValuesChange={multiSliderJarakChange}
              markerStyle={{
                ...Platform.select({
                  android: {
                    height: 13,
                    width: 13,
                    borderRadius: 50,
                    backgroundColor: '#B347B5',
                  },
                }),
              }}
              min={0}
              max={100}
              step={1}
            />
            <HStack justifyContent="space-between" pt={15}>
              <Text color="$fuchsia800" fontWeight="14">
                Usia
              </Text>
              <Text color="$fuchsia800" fontWeight="14">
                {value.values[0]} - {value.values[1]}
              </Text>
            </HStack>
            <MultiSlider
              values={[value.values[0], value.values[1]]}
              sliderLength={350}
              selectedStyle={{backgroundColor: '#B347B5'}}
              containerStyle={{alignSelf: 'center', marginTop: -10}}
              onValuesChange={multiSliderValuesChange}
              markerStyle={{
                ...Platform.select({
                  android: {
                    height: 13,
                    width: 13,
                    borderRadius: 50,
                    backgroundColor: '#B347B5',
                  },
                }),
              }}
              min={0}
              max={50}
              step={1}
            />
          </VStack>
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <HStack space="xs" alignItems="center" alignContent="center">
                <Text fontSize={14} color="#B347B5">
                  Berbayar
                </Text>
                <Box bg="#AF810B" p={5} justifyContent="center" rounded={5}>
                  <Text fontSize={10} color="white">
                    VIP
                  </Text>
                </Box>
              </HStack>
              <Text fontSize={15}>Pengaturan Privasi</Text>
              <Text fontSize={15}>Sembuyikan yang Terakhir Dilihat</Text>
              <Text fontSize={10}>
                Agar orang tidak melihatmu ketika kamu online
              </Text>
            </VStack>
            <Checkbox value={'Bayar'} size="md">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
            </Checkbox>
          </HStack>
          <HStack justifyContent="space-between" alignItems="center" pt={30}>
            <VStack>
              <HStack space="xs" alignItems="center" alignContent="center">
                <Text fontSize={14} color="#B347B5">
                  Berbayar
                </Text>
                <Box bg="#AF810B" p={5} justifyContent="center" rounded={5}>
                  <Icon as={Gem} size="sm" mt={1} color="white" />
                </Box>
              </HStack>
              <Text fontSize={15}>Hanya tampilkan pengguna yang</Text>
              <Text fontSize={15}>telah diverifikasi </Text>
            </VStack>
            <Checkbox value={'Bayar'} size="md">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
            </Checkbox>
          </HStack>
        </Box>
        {JSON.stringify(showLogout) === 'true' ? (
          <Box position="absolute" bottom={0} w={'$full'} p={20}>
            <Button
              size="lg"
              variant="solid"
              isDisabled={false}
              borderRadius={10}
              bgColor="$fuchsia800"
              onPress={() => navigation.navigate('Login')}
              isFocusVisible={false}>
              <ButtonText>LOGOUT</ButtonText>
            </Button>
          </Box>
        ) : (
          <>
            <Box position="absolute" bottom={0} w={'$full'} p={20}>
              <Center>
                <Text fontSize={13}>BOGOPA V.1.0.0</Text>
              </Center>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
