import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const Container = ({ children, ...props }) => (
  <View style={styles.container} {...props}>
    {children}
  </View>
);

export default Container;
