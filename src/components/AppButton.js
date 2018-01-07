import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { white, primary as primaryColor } from '../utils/colors';

const AppButton = ({
  primary,
  title,
  onPress,
  buttonStyle,
  backgroundColor,
}) => (
  <Button
    borderRadius={5}
    title={title}
    color={primary ? white : primaryColor}
    backgroundColor={backgroundColor
      ? backgroundColor
      : primary ? primaryColor : white
    }
    underlayColor={primary ? white : primaryColor}
    buttonStyle={[styles.button, buttonStyle && buttonStyle]}
    onPress={onPress}
  />
);

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  primary: PropTypes.bool,
};


const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: primaryColor,
    marginBottom: 8,
  },
});

export default AppButton;
