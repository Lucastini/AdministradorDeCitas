import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';

const Cita = ({cita, eliminarCita}) => {
  const dialogoEliminar = id => {
    Alert.alert(
      'Eliminacion de Cita',
      '¿Confirma que desea eliminar esta cita?',
      [{text: 'VOLVER'}, {text: 'SI', onPress: () => eliminarCita(id)}],
    );
  };

  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.texto}>{cita.item.paciente} </Text>
      </View>
      <View>
        <Text style={styles.label}>Empleador</Text>
        <Text style={styles.texto}>{cita.item.empleador} </Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas</Text>
        <Text style={styles.texto}>{cita.item.sintomas} </Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(cita.item.id)}
          style={styles.botonEliminar}>
          <Text style={styles.textoEliminar}>ELIMINAR</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
  botonEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
    borderRadius: 10,
  },
  textoEliminar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Cita;
