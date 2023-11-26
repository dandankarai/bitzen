import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet, View, Text} from 'react-native';
import {backgroundColor} from '@shopify/restyle';
export default function New(props: any) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      {/* <View style={{zIndex: -99}}> */}
      <Image source={props.cover} style={styles.cover} />
      <Text style={styles.namePet}>{props.name}</Text>
      {/* </View> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  cover: {
    // marginBottom: 20,
    width: `100%`,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  namePet: {
    fontWeight: '600',
    fontSize: 24,
    marginLeft: 10,
    position: `absolute`,
    top: '80%',
    color: '#FFF',
    lineHeight: 36,
  },
});
