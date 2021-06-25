import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonWrapper: {
    height: 50,
    width: 100,
    backgroundColor: colors.liqidRed,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'flex-end',
    marginRight: 10,
  },

  buttonText: {
    color: colors.white,
  },

  listWrapper: {
    width: Dimensions.get('window').width - 20,
  },

  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },

  listHeaderWrapper: {
    width: Dimensions.get('window').width - 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginTop: 50,
  },

  listHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
