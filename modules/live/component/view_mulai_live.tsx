/* eslint-disable react-native/no-inline-styles */
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  Icon,
} from '@gluestack-ui/themed';
import {ActionsheetContent} from '@gluestack-ui/themed';
import {HStack} from '@gluestack-ui/themed';
import {Box, Text, VStack} from '@gluestack-ui/themed';
import {AlignJustify, Brush, RefreshCcw, X} from 'lucide-react-native';
import React from 'react';
import {ScrollView, TextInput} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';

const db = [
  {
    id: 1,
    name: 'Dinda Kirana',
    img: {uri: 'https://i.pravatar.cc/1000?img=1'},
    umur: '21',
    jarak: '19Km',
  },
  {
    id: 2,
    name: 'Erlich Bachman',
    img: {uri: 'https://i.pravatar.cc/1000?img=2'},
    umur: '20',
    jarak: '9Km',
  },
  {
    id: 3,
    name: 'Monica Hall',
    umur: '19',
    jarak: '29Km',
    img: {uri: 'https://i.pravatar.cc/1000?img=3'},
  },
  {
    id: 4,
    name: 'Jared Dunn',
    umur: '18',
    jarak: '17Km',
    img: {uri: 'https://i.pravatar.cc/1000?img=4'},
  },
  {
    id: 5,
    name: 'Dinesh Chugtai',
    umur: '22',
    jarak: '10Km',
    img: {uri: 'https://i.pravatar.cc/1000?img=5'},
  },
  {
    id: 6,
    name: 'Dinesh Chugtai',
    umur: '24',
    jarak: '22Km',
    img: {uri: 'https://i.pravatar.cc/1000?img=6'},
  },
  {
    id: 7,
    name: 'Dinesh Chugtai',
    umur: '25',
    jarak: '18Km',
    img: {uri: 'https://i.pravatar.cc/1000?img=7'},
  },
  {
    id: 8,
    name: 'Dinesh Chugtai',
    umur: '26',
    jarak: '26Km',
    img: {uri: 'https://i.pravatar.cc/1000?img=8'},
  },
  {
    id: 9,
    name: 'Dinesh Chugtai',
    umur: '22',
    jarak: '8Km',
    img: {uri: 'https://i.pravatar.cc/1000?img=9'},
  },
  {
    id: 10,
    name: 'Dinesh Chugtai',
    umur: '18',
    jarak: '1Km',
    img: {uri: 'https://i.pravatar.cc/1000?img=10'},
  },
];

export default function ViewMulaiLive({navigation}: any) {
  const [vs, setvs] = React.useState(false);
  const vsClose = () => setvs(!vs);

  const [menu, setMenu] = React.useState(false);
  const menuClose = () => setMenu(!menu);

  const [penonton, setpenonton] = React.useState(false);
  const penontonClose = () => setpenonton(!penonton);
  return (
    <>
      <Box bgColor="$black" h={'$full'}>
        <Box style={{position: 'absolute', top: 20}} w={'$full'}>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            pl={10}
            pr={10}>
            <HStack space="md">
              <Image
                width={50}
                height={50}
                borderRadius={50 / 2}
                source={{uri: 'https://i.pravatar.cc/1000?img=3'}}
              />
              <VStack pt={7}>
                <Text color="white" fontSize={13}>
                  Alam Ganjar
                </Text>
                <Text color="white" fontSize={13}>
                  0 Suka
                </Text>
              </VStack>
            </HStack>
            <TouchableOpacity onPress={penontonClose}>
              <Box bgColor="#565656" h={'auto'} w={'auto'} p={5} rounded={8}>
                <Text textAlign="center" color="white">
                  1
                </Text>
              </Box>
              <Text color="white" fontSize={8}>
                Penonton
              </Text>
            </TouchableOpacity>
            <Actionsheet isOpen={penonton} onClose={penontonClose}>
              <ActionsheetBackdrop />
              <ActionsheetContent h="$72">
                <ActionsheetDragIndicatorWrapper>
                  <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                <ActionsheetItem disabled>
                  <Text fontSize={16}>Penonton</Text>
                </ActionsheetItem>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {db.map(data => {
                    return (
                      <ActionsheetItem key={data.id}>
                        <HStack
                          alignItems="center"
                          justifyContent="space-between"
                          w={'$full'}>
                          <HStack space="lg" alignItems="center">
                            <Image
                              borderRadius={50 / 2}
                              height={50}
                              width={50}
                              source={data.img}
                            />
                            <VStack space="xs">
                              <Text
                                color="#000000"
                                fontWeight="$bold"
                                fontSize={14}>
                                {data.name}
                              </Text>
                              <Box
                                bgColor="#B347B5"
                                w={20}
                                alignItems="center"
                                p={2}
                                rounded={5}>
                                <Text color="white" fontSize={13}>
                                  {data.umur}
                                </Text>
                              </Box>
                            </VStack>
                          </HStack>
                          <Text>{data.jarak}</Text>
                        </HStack>
                      </ActionsheetItem>
                    );
                  })}
                </ScrollView>
              </ActionsheetContent>
            </Actionsheet>
          </HStack>
        </Box>
        <Box position="absolute" w={'$full'} bottom={10} pl={10} pr={10}>
          <HStack space="md" alignItems="center" justifyContent="space-between">
            <Box bgColor="#565656" rounded={10} pl={10} pr={10}>
              <TextInput placeholder="Katakan Sesuatu................" />
            </Box>
            <TouchableOpacity onPress={vsClose}>
              <Box bgColor="#565656" rounded={10} p={13}>
                <Text color="white">VS</Text>
              </Box>
            </TouchableOpacity>
            <Actionsheet isOpen={vs} onClose={vsClose} zIndex={999}>
              <ActionsheetBackdrop />
              <ActionsheetContent h="$72" zIndex={999}>
                <ActionsheetDragIndicatorWrapper>
                  <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                <Text fontWeight="$bold" fontSize={48} color="#B347B5" mt={20}>
                  VS
                </Text>
                <HStack justifyContent="space-around" space="4xl" m={20}>
                  <TouchableOpacity>
                    <Box p={20} bgColor="#B347B5" rounded={5}>
                      <Image
                        source={require('..//..//..//assets/icon/acak.png')}
                      />
                    </Box>
                    <Text textAlign="center" color="#B347B5" mt={10}>
                      Battle Acak
                    </Text>
                    <Text fontSize={12}>Rekor 0 menang</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Box p={20} bgColor="#B347B5" rounded={5}>
                      <Image
                        source={require('..//..//..//assets/icon/teman.png')}
                      />
                    </Box>
                    <Text textAlign="center" color="#B347B5" mt={10}>
                      Teman Battle
                    </Text>
                  </TouchableOpacity>
                </HStack>
              </ActionsheetContent>
            </Actionsheet>
            <TouchableOpacity onPress={menuClose}>
              <Box bgColor="#565656" rounded={10} p={10}>
                <Icon as={AlignJustify} size="xl" mt={1} color="white" />
              </Box>
            </TouchableOpacity>
            <Actionsheet isOpen={menu} onClose={menuClose}>
              <ActionsheetBackdrop />
              <ActionsheetContent h="$72">
                <ActionsheetDragIndicatorWrapper>
                  <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                <ActionsheetItem disabled>
                  <VStack>
                    <Text fontSize={16} color="#B347B5">
                      Alat untuk host
                    </Text>
                    <HStack space="3xl" mt={10}>
                      <TouchableOpacity
                        style={{alignItems: 'center', marginTop: 10}}>
                        <Icon as={Brush} size="xl" color="$fuchsia800" />
                        <Text fontSize={11} mt={5}>
                          Percantik
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{alignItems: 'center', marginTop: 10}}>
                        <Icon as={RefreshCcw} size="xl" color="$fuchsia800" />
                        <Text fontSize={11} mt={5}>
                          Putar Kamera
                        </Text>
                      </TouchableOpacity>
                    </HStack>
                  </VStack>
                </ActionsheetItem>
              </ActionsheetContent>
            </Actionsheet>
            <TouchableOpacity
              onPress={() => navigation.navigate('LiveSelesai')}>
              <Box bgColor="#565656" rounded={10} p={10}>
                <Icon as={X} size="xl" mt={1} color="white" />
              </Box>
            </TouchableOpacity>
          </HStack>
        </Box>
      </Box>
    </>
  );
}
