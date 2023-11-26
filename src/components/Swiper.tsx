import {backgroundColor} from '@shopify/restyle';
import {StyleSheet, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default function SwiperComponent() {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: '#000',
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
      activeDotColor="#fff"
      activeDotStyle={{
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
        borderColor: '#000',
      }}>
      <View style={styles.slide}>
        <Image
          source={require('../assets/icons/cat1.png')}
          style={{width: '100%', height: '100%', borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
          source={require('../assets/icons/cat1.png')}
          style={{width: '100%', height: '100%', borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
          source={require('../assets/icons/cat1.png')}
          style={{width: '100%', height: '100%', borderRadius: 8}}
        />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
  },
});
