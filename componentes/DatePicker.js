import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

//https://github.com/mmazzarolo/react-native-modal-datetime-picker

const DatePicker = ({mode, buttonText, styles, label, updateFormState, date}) => {
  const buttonTextConverted = buttonText.toString();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    let dato
    let format
    if(mode === 'date'){
        format= {year: 'numeric', month:'long', day: '2-digit'} 
        dato=date.toLocaleDateString('es-ES', format)
        updateFormState('fecha', dato)
    }else if(mode === 'time'){
        format= { hour: 'numeric', minute: '2-digit' } 
        dato=date.toLocaleString('es-ES', format)
        updateFormState('hora', dato)
    }
    hideDatePicker();
  };

  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.button}>
        <Button title={buttonTextConverted} onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={mode}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {date && <Text>{date}</Text>}
      </View>
    </View>
  );
};

export default DatePicker;
