import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {StackNavigationProp} from '@react-navigation/stack';

import {styles} from './styles';
import {AvailableRoom} from './types';
import {colors} from '../../utils/colors';
import {RootStackParamList} from '../../../App';

type BookRoomScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

const mockRooms: AvailableRoom[] = [
  {roomName: 'Frontend', capacity: 4},
  {roomName: 'Product', capacity: 3},
  {roomName: 'Strategy & Ops', capacity: 6},
];

const mockRoomsTwo: AvailableRoom[] = [
  {roomName: 'Backend/Dev Ops', capacity: 3},
  {roomName: 'Frontent', capacity: 1},
  {roomName: 'Strategy & Ops', capacity: 3},
  {roomName: 'Product', capacity: 5},
];

const BookRoom: React.FC<{navigation: BookRoomScreenNavigationProp}> = ({
  navigation,
}) => {
  const [date, setDate] = React.useState(new Date());
  const [toggleData, setToggleData] = React.useState(false);
  const [selectedRoom, setSelectedRoom] = React.useState<string | null>(null);

  const onChange = (_: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setToggleData(!toggleData);
  };

  const navigateToHome = () => navigation.navigate('Home');

  const Room = ({item}: {item: AvailableRoom}) => {
    const isSelected = selectedRoom === item.roomName;
    return (
      <TouchableOpacity
        style={[
          styles.rowWrapper,
          isSelected ? {backgroundColor: colors.liqidRed} : {},
        ]}
        onPress={() => setSelectedRoom(item.roomName)}>
        <Text style={isSelected ? {color: colors.white} : {}}>
          {item.roomName}
        </Text>
        <Text style={isSelected ? {color: colors.white} : {}}>
          {item.capacity}
        </Text>
      </TouchableOpacity>
    );
  };

  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <View style={styles.dateWrapper}>
        <Text style={styles.dateText}>Date</Text>
        <DateTimePicker
          style={styles.datePicker}
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      </View>
      <View style={styles.separator} />
      <FlatList
        style={styles.listWrapper}
        data={toggleData ? mockRoomsTwo : mockRooms}
        renderItem={Room}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={Separator}
      />
      <View style={styles.separator} />
      <TouchableOpacity style={styles.buttonWrapper} onPress={navigateToHome}>
        <Text style={styles.buttonText}>Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookRoom;
