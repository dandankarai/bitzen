import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

import DatePicker from 'react-native-date-picker';
export const NewPet = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState();
  const [name, setName] = useState();
  const [aboutPet, setAboutPet] = useState();

  const formatteDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerTextTitle}>
        <Text style={styles.textInfoTitle}>Informações</Text>
      </View>

      <View style={styles.viewContentContainer}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.inputsRegister}
            placeholderTextColor={'#8C8C8C'}
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.inputsRegister}
            placeholderTextColor={'#8C8C8C'}
            placeholder="Cor"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
        </View>

        <View style={styles.viewInputCalendar}>
          <TextInput
            style={styles.inputCalendar}
            placeholderTextColor={'#8C8C8C'}
            placeholder="Data de Nascimento"
            value={formatteDate}
            onChange={e => setDate(e.target.value)}
          />

          <Pressable onPress={() => setOpen(true)}>
            <Image source={require('../../assets/icons/calendar.png')} />
          </Pressable>
          <DatePicker
            modal
            open={open}
            date={date}
            mode={'date'}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>

        <View style={styles.viewInput}>
          <TextInput
            style={styles.inputAbout}
            placeholderTextColor={'#8C8C8C'}
            placeholder="Sobre o pet"
            value={aboutPet}
            onChange={e => setAboutPet(e.target.value)}
          />
        </View>
      </View>
      <View style={styles.viewButtonPressable}>
        <Pressable
          onPress={() => console.log('clicou')}
          style={styles.PressableButtonRegister}>
          <Text>Cadastrar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },

  viewButtonPressable: {
    backgroundColor: '#00B8C4',
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },

  PressableButtonRegister: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },

  inputsRegister: {
    width: 350,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    paddingLeft: 18,
    margin: 12,
  },

  inputAbout: {
    width: 350,
    height: 100,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    paddingLeft: 18,
    margin: 12,
  },

  viewInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
  },

  viewInputCalendar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    elevation: 2,
    alignItems: 'center',
    height: 48,
  },

  aboutPet: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
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
