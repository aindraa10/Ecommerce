import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
// import {Text} from 'components';

const index = props => {
  return (
    <TouchableOpacity onPress={ props.onPress }>
      <View style={ [ styles.container, props.btnStyle ] }>
        <Text style={ styles.button } bold>
          { props.title }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default index;
