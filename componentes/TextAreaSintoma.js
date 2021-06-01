import React from 'react';
import {View, TextInput, Text} from 'react-native';

const TextAreaSintoma = ({
  label,
  keyboardType,
  placeholder,
  styles,
  statePropiety,
  updateFormState,
  textValue,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={{...styles.inputBox, height: 80}}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline
        onChangeText={text => updateFormState(statePropiety, text)}
        value={textValue}
      />
    </View>
  );
};

export default TextAreaSintoma;
