import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Text, TouchableHighlight, Alert} from 'react-native';
import DatePicker from './DatePicker';
import Input from './Input';
import TextAreaSintoma from './TextAreaSintoma';

const PACIENTE = 'paciente';
const EMPLEADOR = 'empleador';
const TELEFONO = 'telefono';
const FECHA = 'fecha';
const HORA = 'hora';
const SINTOMAS = 'sintomas';

const Formulario = ({agregarCita}) => {
  const initialFormState = {
    [PACIENTE]: '',
    [EMPLEADOR]: '',
    [TELEFONO]: '',
    [FECHA]: null,
    [HORA]: null,
    [SINTOMAS]: '',
  };
  const [formState, setformState] = useState(initialFormState);

  const updateFormState = (propiety, value) => {
    setformState({...formState, [propiety]: value});
  };

  const formIncompleted = () => {
    if (
      formState.paciente.trim() === '' ||
      formState.empleador.trim() === '' ||
      formState.telefono.trim() === '' ||
      formState.fecha === null ||
      formState.hora === null ||
      formState.sintomas.trim() === ''
    )
      return true;
    else return false;
  };

  const createNewCita = () => {
    if (formIncompleted()) {
      Alert.alert('Creacion de Cita', '¡Debe completar todos los campos!', [
        {text: 'Entiendo'},
      ]);
    } else {
      Alert.alert(
        'Creacion de Cita',
        '¿Confirma que desea crear una cita con los datos ingresados?',
        [
          {text: 'VOLVER'},
          {
            text: 'SI',
            onPress: () => {
              agregarCita(formState);
              Alert.alert('Creacion de Cita', '¡Cita creada con éxito!', [
                {text: 'OK'},
              ]);
              setformState(initialFormState);
            },
          },
        ],
      );
    }
  };

  return (
      <ScrollView style={styles.contenedor}>
        <Input
          label={'Paciente'}
          placeholder={'Ingrese su nombre'}
          styles={styles}
          statePropiety={PACIENTE}
          updateFormState={updateFormState}
          textValue={formState.paciente}
        />
        <Input
          label={'Empleador'}
          placeholder={'Ingrese su empleador'}
          styles={styles}
          statePropiety={EMPLEADOR}
          updateFormState={updateFormState}
          textValue={formState.dueño}
        />
        <Input
          label={'Telefono'}
          placeholder={'Ingrese su Telefono'}
          keyboardType={'numeric'}
          styles={styles}
          statePropiety={TELEFONO}
          updateFormState={updateFormState}
          textValue={formState.telefono}
        />
        <DatePicker
          label={'Horario'}
          mode={'time'}
          buttonText={'Elije una hora'}
          styles={styles}
          updateFormState={updateFormState}
          date={formState.hora}
        />
        <DatePicker
          label={'Fecha'}
          mode={'date'}
          buttonText={'Elije una fecha'}
          styles={styles}
          updateFormState={updateFormState}
          date={formState.fecha}
        />
        <TextAreaSintoma
          label={'Sintoma'}
          placeholder={'Ingrese sus sintomas'}
          styles={styles}
          statePropiety={SINTOMAS}
          updateFormState={updateFormState}
          textValue={formState.sintomas}
        />
        <View>
          <TouchableHighlight
            style={styles.botonGuardar}
            onPress={() => createNewCita()}>
            <Text style={styles.textoGuardar}>GUARDAR CITA</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    marginHorizontal: '4%',
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  inputBox: {
    marginTop: 5,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    color: 'black',
  },
  button: {
    marginTop: 5,
  },
  botonGuardar: {
    padding: 10,
    backgroundColor: 'blue',
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  textoGuardar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Formulario;
