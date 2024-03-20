/* eslint-disable react-native/no-inline-styles */
import {Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {View} from 'react-native';
import {ScrollView, StyleSheet} from 'react-native';
const db = [
  {
    id: 1,
    status: 'gass poll aja',
    img: {uri: 'https://i.pravatar.cc/1000?img=1'},
    umur: '21',
    lokasi: 'Jakarta Barat',
  },
  {
    id: 2,
    status: 'gass poll aja',
    img: {uri: 'https://i.pravatar.cc/1000?img=2'},
    lokasi: 'Jakarta Barat',
    umur: '21',
  },
  {
    id: 3,
    status: 'gass poll aja',
    lokasi: 'Jakarta Barat',
    img: {uri: 'https://i.pravatar.cc/1000?img=3'},
    umur: '21',
  },
  {
    id: 4,
    status: 'gass poll aja',
    lokasi: 'Jakarta Barat',
    img: {uri: 'https://i.pravatar.cc/1000?img=4'},
    umur: '21',
  },
  {
    id: 5,
    status: 'gass poll aja',
    umur: '21',
    lokasi: 'Jakarta Barat',
    img: {uri: 'https://i.pravatar.cc/1000?img=5'},
  },
  {
    id: 6,
    status: 'gass poll aja',
    umur: '21',
    lokasi: 'Jakarta Barat',
    img: {uri: 'https://i.pravatar.cc/1000?img=6'},
  },
  {
    id: 7,
    status: 'gass poll aja',
    umur: '21',
    lokasi: 'Jakarta Barat',
    img: {uri: 'https://i.pravatar.cc/1000?img=7'},
  },
  {
    id: 8,
    status: 'gass poll aja',
    umur: '21',
    lokasi: 'Jakarta Barat',
    img: {uri: 'https://i.pravatar.cc/1000?img=8'},
  },
  {
    id: 9,
    status: 'gass poll aja',
    umur: '21',
    lokasi: 'Jakarta Barat',
    img: {uri: 'https://i.pravatar.cc/1000?img=9'},
  },
  {
    id: 10,
    status: 'gass poll aja',
    umur: '21',
    lokasi: 'Jakarta Barat',
    img: {uri: 'https://i.pravatar.cc/1000?img=10'},
  },
];

export default function ViewRekomendasi({}: any) {
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Box>
          <Box>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.container}>
                {db.map(data => {
                  return (
                    <View style={styles.item} key={data.id}>
                      <TouchableOpacity>
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
                              {data.status}
                            </Text>
                            <Text
                              color="white"
                              fontSize={16}
                              style={{
                                textShadowColor: 'rgba(1, 1, 1, 1)',
                                textShadowOffset: {width: 1, height: 1},
                                textShadowRadius: 10,
                              }}>
                              {data.lokasi}
                            </Text>
                          </Box>
                          <Box
                            style={{
                              position: 'absolute',
                              bottom: 10,
                              right: 10,
                            }}>
                            <Text
                              color="white"
                              fontSize={16}
                              style={{
                                textShadowColor: 'rgba(1, 1, 1, 1)',
                                textShadowOffset: {width: 1, height: 1},
                                textShadowRadius: 10,
                              }}>
                              {data.umur}
                            </Text>
                          </Box>
                        </Box>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </Box>
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
    width: '48%',
    paddingBottom: 15,
  },
});
