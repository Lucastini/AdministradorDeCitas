import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';
import { getData, storeData } from './utils/LocalStorageFunctions';

const App = () => {
  const [mostrarForm, setMostrarForm] = useState(false);

  const [citas, setCitas] = useState([]);

  useEffect(() => {
    getData('citas').then(data => (data !== null ? setCitas(data) : null));
  }, []);

  const agregarCita = cita => {
    const newCitaWithId = {id: Date.now(), ...cita};
    const updatedCitas = [...citas, newCitaWithId];
    setCitas(updatedCitas);
    storeData('citas', updatedCitas);
  };

  const eliminarCita = id => {
    const updatedCitas = citas.filter(cita => cita.id != id);
    setCitas(updatedCitas);
    storeData('citas', updatedCitas);
  };

  const hideKeyboard = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <View style={styles.contenedorGral}>
        <Text style={styles.titles}>Administrador de Citas</Text>
        <TouchableHighlight
          style={styles.boton}
          onPress={() => setMostrarForm(!mostrarForm)}>
          <Text style={styles.textoBoton}>
            {mostrarForm ? 'MOSTRAR CITAS' : 'MOSTRAR FORMULARIO'}
          </Text>
        </TouchableHighlight>
        <View>
          {mostrarForm ? (
            <View style={styles.formContainer}>
              <Text style={styles.titles}>Crea tu cita</Text>
              <Formulario agregarCita={agregarCita} />
            </View>
          ) : (
            <View style={styles.formContainer}>
              <Text style={styles.titles}>
                {citas.length > 0
                  ? 'Tus Citas'
                  : 'No hay citas, agrega una'}
              </Text>
              <FlatList
                data={citas}
                renderItem={cita => (
                  <Cita cita={cita} eliminarCita={eliminarCita} />
                )}
                keyExtractor={cita => cita.id}
              />
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  titles: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  contenedorGral: {
    backgroundColor: '#6495ed',
    flex: 1,
    borderRadius: 0,
  },
  formContainer: {
    height: '92%',
  },
  boton: {
    padding: 10,
    backgroundColor: 'blue',
    marginTop: 10,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
