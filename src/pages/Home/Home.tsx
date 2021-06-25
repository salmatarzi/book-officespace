import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';

import {styles} from './styles';
import {BookedRoom} from './types';

const mockData: BookedRoom[] = [
  {
    date: '22 Jun 2020',
    roomName: 'Frontend',
  },
  {
    date: '30 Jun 2020',
    roomName: 'Product',
  },
  {
    date: '16 Jul 2020',
    roomName: 'Backend/Dev Ops',
  },
  {
    date: '22 Aug 2020',
    roomName: 'Frontend',
  },
  {
    date: '18 Oct 2020',
    roomName: 'Strategy & Ops',
  },
];

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC<{navigation: HomeScreenNavigationProp}> = ({
  navigation,
}) => {
  const bookARoom = () => navigation.navigate('BookRoom');
  const bookedRoom = ({item}: {item: BookedRoom}) => (
    <View style={styles.rowWrapper}>
      <Text>{item.date}</Text>
      <Text>{item.roomName}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={bookARoom} style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>Book a room</Text>
      </TouchableOpacity>
      <View style={styles.listHeaderWrapper}>
        <Text style={styles.listHeaderTitle}>Upcoming date</Text>
        <Text style={styles.listHeaderTitle}>Booked room</Text>
      </View>
      <FlatList
        data={mockData}
        renderItem={bookedRoom}
        style={styles.listWrapper}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default Home;
