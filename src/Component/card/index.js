import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Dimensions, Image, Alert, ScrollView } from 'react-native';
import styles from './styles';
import { Button } from '../../Component';



const index = props => {

  const { data } = props;

  return (
    <View style={ { paddingHorizontal: 10, paddingVertical: 10 } }>
      <FlatList
        data={ data }
        horizontal
        renderItem={ ( { item, index } ) => {
          return (
            <View style={ styles.card }>
              <View style={ styles.content }>
                <View style={ styles.imageContent }>
                  <Image style={ styles.img }
                    source={ { uri: item.pict } } />
                </View>
                <Text style={ styles.text }>{ item.title }</Text>
                <Text style={ styles.textDesc }>{ item.price }</Text>
                <Text style={ styles.textDesc }>{ item.location }</Text>
                < Button
                  title='Add'
                  btnStyle={ styles.btnAdd }
                  onPress={ () => Alert.alert( 'Order' ) } />
              </View>
            </View>
          )
        } }
        keyExtractor={ ( item, index ) => index.toString() }
      />
    </View>
  );
};

export default index;
