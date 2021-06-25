import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: Dimensions.get('window').width - 20,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
  },
  button: {
    width: Dimensions.get('window').width - 20,
    height: 50,
    borderRadius: 20,
    backgroundColor: colors.liqidRed,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
});
