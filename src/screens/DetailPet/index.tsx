import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SwiperComponent from '../../components/Swiper';

export default function DetailPet(props: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>

      <View style={styles.containerTextTitle}>
        <Text style={styles.textInfoTitle}>Informações</Text>
      </View>

      <View style={styles.viewContentContainer}>
        <View style={styles.insideNameAndTitle}>
          <Text style={styles.infoTextLeftSide}>Nome</Text>
          <Text style={styles.infoTextRightSide}>Leona</Text>
        </View>

        <View style={styles.insideNameAndTitle}>
          <Text style={styles.infoTextLeftSide}>Cor</Text>
          <Text style={styles.infoTextRightSide}>Rajada</Text>
        </View>

        <View style={styles.insideNameAndTitle}>
          <Text style={styles.infoTextLeftSide}>Idade</Text>
          <Text style={styles.infoTextRightSide}>8 meses</Text>
        </View>

        <Text style={styles.aboutTitle}>Sobre o pet</Text>
        <View style={styles.aboutPet}>
          <View style={styles.viewAbout}>
            <Text style={styles.descriptionPet}>
              Leona é uma gata companheira e carinhosa. Está sempre pronta para
              brincar e adora ursinhos de pelúcia.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },

  swiperContent: {flexDirection: 'row', height: 350, width: '100%'},

  insideNameAndTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  infoTextLeftSide: {
    color: '#8C8C8C',
    fontSize: 16,
  },

  infoTextRightSide: {
    color: '#000',
    fontSize: 16,
  },

  descriptionPet: {
    color: '#595959',
    fontSize: 18,
    lineHeight: 24,
  },

  aboutTitle: {
    marginHorizontal: 20,
    color: '#8C8C8C',
    fontSize: 20,
    marginTop: 20,
  },

  aboutPet: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  viewAbout: {
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 8,
    padding: 20,
  },

  containerTextTitle: {
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },

  textInfoTitle: {
    color: '#404040',
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 24,
  },

  viewContentContainer: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 8,
  },
});
