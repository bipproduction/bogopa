/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Button, ButtonText, Icon} from '@gluestack-ui/themed';
import {Box, Text} from '@gluestack-ui/themed';
import {ArrowLeft} from 'lucide-react-native';
import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
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
                    <TouchableOpacity>
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
            style={{position: 'absolute', bottom: 20, left: 16}}
            width={'$full'}>
            <ButtonText>Lihat Suka Saya </ButtonText>
          </Button>
        </Box>
      </Box>
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
