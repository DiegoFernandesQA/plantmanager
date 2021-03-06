import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import { Button } from '../components/Button'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification(){

  const [isFocused, setIsFocused] = useState(false) //use State verifica o estado de um objeto
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  function handleInputBlur(){
    setIsFocused(false) // se estiver fora do input = state false
    setIsFilled(!!name)
  }

  function handleInputFocus(){
    setIsFocused(true) // se estiver dentro do inpute recebe state true
  }

  function handleInputChange(value: string){
    setIsFilled(!!value) // vai verificar se o campo está preenchido e devolver um true como resposta
    setName(value)
  }

  return(
    <KeyboardAvoidingView 
      style={styles.container}
      behavior= {Platform.OS === "android" ? "height" : "padding" } 
    >

      <SafeAreaView style= {styles.container}>
        <View style= {styles.content}>

          <View style= {styles.form}>

            <View style= {styles.header}>

              <Text style= {styles.emoji}>
                {isFilled ? '😀' : '😄'}
              </Text>

              <Text style= {styles.title}>
                Como podemos{'\n'}
                chamar você?
              </Text>

            </View>
            
            <TextInput 
              style= {[
                styles.input,
                (isFocused || isFilled) && 
                { borderColor: colors.green }
              ]}
              placeholder = "Digite um nome"
              onBlur = {handleInputBlur} //quando o usuario sai do text input
              onFocus = {handleInputFocus} // quando o user entra no text input
              onChangeText = {handleInputChange}
            />

            <View style= {styles.footer}>
              <Button/>
            </View>

          </View>
          
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
    width: '100%'
  },
  header: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20
  }
})
