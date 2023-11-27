import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {AuthContext} from '../../contexts';
import {useNavigation} from '@react-navigation/native';
export const Account = (props: any) => {
  const {navigate} = useNavigation();
  const {signOut} = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  function handleDetailAccount() {
    navigate('DetailAccount');
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewAvatar}>
        <Image source={require('../../assets/icons/Avatar.png')} />
        <View style={styles.viewTextNameAndCity}>
          <Text>Ana Maria</Text>
          <Text>Curitiba, PR</Text>
        </View>
      </View>

      <View style={styles.viewButtonInfos}>
        <Pressable
          onPress={handleDetailAccount}
          style={styles.pressableAccount}>
          <Image
            source={require('../../assets/icons/profileAccount.png')}
            tintColor={'#183E4B'}
          />
          <Text style={styles.pressableAccountText}>Meus dados</Text>
        </Pressable>

        <Pressable onPress={handleSignOut} style={styles.pressableAccount}>
          <Image
            source={require('../../assets/icons/logOut.png')}
            tintColor={'#183E4B'}
          />
          <Text style={styles.pressableAccountText}>Sair do aplicativo</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },

  viewAvatar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    marginHorizontal: 20,
    marginVertical: 20,
  },

  viewTextNameAndCity: {
    gap: 6,
  },

  viewButtonInfos: {
    paddingHorizontal: 20,
    borderRadius: 8,
    height: '100%',
    paddingTop: 50,
  },

  pressableAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginVertical: 16,
  },

  pressableAccountText: {
    color: '#404040',
    fontSize: 16,
  },
});
