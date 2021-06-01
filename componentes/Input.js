import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = ({
  label,
  keyboardType,
  placeholder,
  styles,
  statePropiety,
  updateFormState,
  textValue,
}) => {
  return (
    <View>
      <Text style={styles.inputLabel}>{label}:</Text>
      <TextInput
        style={styles.inputBox}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={text => updateFormState(statePropiety, text)}
        value={textValue}
      />
    </View>
  );
};

export default Input;
