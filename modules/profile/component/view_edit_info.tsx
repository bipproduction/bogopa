/* eslint-disable react-native/no-inline-styles */
import {ButtonIcon, Text, VStack} from '@gluestack-ui/themed';
import {Box, Button, ButtonText, HStack, Icon} from '@gluestack-ui/themed';
import {ArrowLeft, EditIcon, X} from 'lucide-react-native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity, View} from 'react-native';

export default function ViewEditInfo({navigation}: any) {
  return (
    <Box bgColor="$fuchsia200" h={'$full'}>
      <Box pl={'$4'} pr={'$4'} pt={'$3'}>
        <HStack
          justifyContent="space-between"
          alignContent="center"
          alignItems="center">
          <TouchableOpacity
            style={{paddingRight: 10, width: 20}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon as={ArrowLeft} size="xl" mt={1} color="#000000" />
          </TouchableOpacity>
          <Box>
            <Button
              size="sm"
              variant="solid"
              isDisabled={false}
              borderRadius={10}
              bgColor="$fuchsia800"
              onPress={() => {
                navigation.navigate('MenuUtama');
              }}
              isFocusVisible={false}>
              <ButtonText>Selesai</ButtonText>
            </Button>
          </Box>
        </HStack>
        <View style={{paddingTop: 20}}>
          <HStack space="md" alignItems="center" justifyContent="space-between">
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 20 / 2,
                  }}
                  source={{uri: 'https://i.pravatar.cc/1000?img=3'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50 / 2,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 75,
                  left: 75,
                }}>
                <ButtonIcon as={X} color="$black" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 20 / 2,
                  }}
                  source={{uri: 'https://i.pravatar.cc/1000?img=4'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50 / 2,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 75,
                  left: 75,
                }}>
                <ButtonIcon as={X} color="$black" />
              </TouchableOpacity>
            </View>
            <Box
              bg="#CD81CF"
              style={{
                width: 110,
                height: 110,
                borderRadius: 20 / 2,
              }}
              p={10}>
              <Box
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50 / 2,
                  backgroundColor: 'white',
                  top: 20,
                  left: 20,
                }}>
                <ButtonIcon as={X} size="xl" color="$black" />
              </Box>
            </Box>
          </HStack>
        </View>
        <View style={{paddingTop: 20}}>
          <VStack>
            <HStack space="md" alignItems="center" alignContent="center">
              <Text fontSize={20} fontWeight="$bold" color="$black">
                Alam Ganjar
              </Text>
              <Text fontSize={20} fontWeight="$bold" color="$black">
                20
              </Text>
            </HStack>
            <Text fontSize={13}>Aktif 1 menit lalu</Text>
          </VStack>
        </View>
        <View style={{paddingTop: 30}}>
          <Text fontSize={15} color="$fuchsia800" fontWeight="$bold">
            Tentang Saya
          </Text>
          <HStack space="md" alignContent="center" alignItems="center" pt={10}>
            <Icon as={EditIcon} size="lg" mt={1} color="$black" />
            <Text fontSize={13}>Sembuyikan yang Terakhir Dilihat</Text>
          </HStack>
        </View>
        <View style={{paddingTop: 30}}>
          <Text fontSize={15} color="$fuchsia800" fontWeight="$bold">
            Akun saya
          </Text>
          <HStack space="md" alignContent="center" alignItems="center" pt={10}>
            <Text fontSize={13}>ID DATING: 7643846882</Text>
          </HStack>
        </View>
      </Box>
    </Box>
  );
}
