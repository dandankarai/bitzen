import React from 'react';
import styled from 'styled-components/native';

export const BackgroundLogin = styled.View`
  background-color: #151515;
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 30px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #c4c4c4;
  width: 80%;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #080;
  margin: 10px;
  padding: 10px;
  width: 50%;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled.Text`
  color: #fff;
`;
