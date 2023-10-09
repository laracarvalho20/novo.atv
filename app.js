import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

 

function LoginScreen() {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState();

 

  const handleLogin = () => {

    // Lógica de autenticação aqui

  };

 

  return (

    <View style={styles.container}>
        <Image source ={require('./assets/unha2.jpg')} ></Image>

      <Text style={styles.label}>Nome de Usuário</Text>

      <TextInput

        style={styles.input}

        placeholder="Digite seu nome de usuário"

        value={username}

        onChangeText={setUsername}

      />

      <Text style={styles.label}>Senha</Text>

      <TextInput

        style={styles.input}

        placeholder="Digite sua senha"

        secureTextEntry

        value={password}

        onChangeText={setPassword}

      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>

        <Text style={styles.buttonText}>Login</Text>

      </TouchableOpacity>

    </View>

  );

}

 



const styles = StyleSheet.create({



  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    padding: 16,

  },

  Image: {
    width: 200,

    height: 200,

    marginBottom: 16,
  },

  label: {

    marginBottom: 8,

  },

  input: {

    width: '100%',

    height: 40,

    borderColor: 'gray',

    borderWidth: 1,

    borderRadius: 4,

    paddingHorizontal: 10,

    marginBottom: 16,

  },

  button: {

    backgroundColor: 'blue',

    paddingVertical: 12,

    paddingHorizontal: 24,

    borderRadius: 4,

  },

  buttonText: {

    color: 'white',

    fontWeight: 'bold',

    textAlign: 'center',

  },

});

 

export default LoginScreen;



