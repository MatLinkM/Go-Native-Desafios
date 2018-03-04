import React, { component } from "react";
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Posts = (props) => (
  <View style={ styles.boxPost }>
    <View style={ styles.headerPost }>
      <Text style={ styles.titlePost }>{ props.titlePosts }</Text>
      <Text style={ styles.autorPost }>{ props.autorPosts }</Text>
    </View>
    <View style={ styles.contentPost }>
      <Text style={ styles.textPost }>
        { props.textPosts }
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  boxPost: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  headerPost: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  titlePost: {
    color: '#333333',
    fontSize: 20,
  },
  autorPost: {
    color: '#999999',
    fontSize: 15,
  },
  contentPost: {
    paddingTop: 10,
  },
  textPost: {
    color: '#666666',
    fontSize: 15,
  }
});

export default Posts;
