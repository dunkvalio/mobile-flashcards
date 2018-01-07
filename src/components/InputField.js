import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { FormInput } from 'react-native-elements';

const InputField = ({
  onChangeText,
  placeholder,
  value,
  containerStyle,
  inputStyle,
}) => (
  <FormInput
    multiline
    autoCorrect
    blurOnSubmit
    value={value}
    placeholder={placeholder}
    onChangeText={onChangeText}
    containerStyle={[styles.inputContainer, containerStyle && containerStyle]}
    inputStyle={[styles.input, inputStyle && inputStyle]}
  />
);

InputField.propTypes = {
  inputStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
};

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 8,
    width: '95%',
    marginTop: 24,
    marginBottom: 24,
  },
  input: {
    width: '100%',
  },
});

export default InputField;
