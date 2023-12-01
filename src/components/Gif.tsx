import React, {useState} from 'react';
import {View,Text, Image, StyleSheet} from 'react-native';
import { IGifProps } from './types';

const Gif: React.FC<IGifProps> = ({ data }) => {
  
  return (
    
    <View style={styles.container}>
    <Image source={{ uri: data.images.fixed_height.url }} style={styles.gifImage} />
    <Text style={styles.gifTitle}>
      {data?.title}
    </Text>
  </View>
  );
};

export default Gif;


const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    padding:15,
    margin:15
  },
  gifImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  gifTitle: {
    fontSize: 18,
    fontWeight: 'light',
    padding: 10,
  },
});
