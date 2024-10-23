import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const PantallaPrestamo = ({navigation}) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [monto, setMonto] = useState('');




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Solicitar Préstamo</Text>
        <TouchableOpacity style={styles.botonRetroceder} onPress={() => navigation.goBack()}>
          <Text style={styles.botonTexto}>Retroceder</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formulario}>
        {/* Campos del formulario */}
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}   

          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          style={styles.input}
          placeholder="Cédula"   

          keyboardType="numeric"
          value={cedula}
          onChangeText={setCedula}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de cuenta"
          keyboardType="numeric"
          value={cuenta}
          onChangeText={setCuenta}
        />
        <TextInput
          style={styles.input}
          placeholder="Monto"
          keyboardType="numeric"
          value={monto}
          onChangeText={setMonto}
        />

        <TouchableOpacity style={styles.botonEnviar}>
          <Text style={styles.botonTexto}>Enviar Solicitud</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Fondo gris claro
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF', // Blanco
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0052FF', // Azul
  },
  botonRetroceder: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#0052FF', // Borde azul
  },
  botonTexto: {
    color: '#0052FF', // Azul
  },
  formulario: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
  botonEnviar: {
    backgroundColor: '#0052FF', // Azul
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export default PantallaPrestamo;