import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { FormInput, FormValidationMessage } from 'react-native-elements';

const InputField = ({
  onChangeText,
  placeholder,
  value,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  showError,
}) => (
  <View style={[styles.container, containerStyle && containerStyle]}>
    <FormInput
      multiline
      autoCorrect
      blurOnSubmit
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      containerStyle={[
        styles.inputContainer,
        inputContainerStyle && inputContainerStyle,
      ]}
      inputStyle={[styles.input, inputStyle && inputStyle]}
    />
    {showError && (
      <FormValidationMessage>{'This field is required'}</FormValidationMessage>
    )}
  </View>
);

InputField.propTypes = {
  inputStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  inputContainerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  showError: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginTop: 24,
    marginBottom: 24,
  },
  inputContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
  input: {
    width: '100%',
  },
});

export default InputField;
