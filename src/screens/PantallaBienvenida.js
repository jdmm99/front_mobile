import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';




const PantallaBienvenida = ({ navigation}) => {


  return (
    <View style={styles.container}>
      {/* Main content */}
      <View style={styles.content}>
        <Image
          source={require('../assets/welcome-ill.png')}
          style={styles.illustration}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Bienvenido a Banca Estebanquito
        </Text>

        <Text style={styles.subtitle}>
          Trabaje para vivir, no viva para trabajar.
        </Text>
      </View>

      {/* Bottom buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Registrarse')}
        >
          <Text style={styles.buttonText}>Registrate</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Iniciar Sesión')}
        >
          <Text style={styles.signInText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  illustration: {
    width: '80%',
    height: 300,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 40,
    lineHeight: 24,
  },
  bottomContainer: {
    padding: 24,
    paddingBottom: 48,
  },
  button: {
    backgroundColor: '#0052FF',
    borderRadius: 8,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  signInText: {
    color: '#0052FF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
});


export default PantallaBienvenida;