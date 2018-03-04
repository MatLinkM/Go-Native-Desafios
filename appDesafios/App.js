import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import Posts from "./src/components/posts";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: [
        { id: 1,
          titlePost: 'Aprendendo React Native 1',
          autorPost: 'Matheus Medeiros',
          textPost: "Lorem ipsum dolor sit amet, alii quodsi mentitum mea at. Qui elitr voluptatum interpretaris ne, corpora detraxit cum an. Lorem ipsum dolor sit amet, alii quodsi mentitum mea at. Qui elitr voluptatum interpretaris ne, corpora detraxit cum an.",
        },
        { id: 2,
          titlePost: 'Aprendendo React Native 2',
          autorPost: 'Matheus Medeiros',
          textPost: "Lorem ipsum dolor sit amet, alii quodsi mentitum mea at. Qui elitr voluptatum interpretaris ne, corpora detraxit cum an. Lorem ipsum dolor sit amet, alii quodsi mentitum mea at. Qui elitr voluptatum interpretaris ne, corpora detraxit cum an.",
        },
        { id: 2,
          titlePost: 'Aprendendo React Native 3',
          autorPost: 'Matheus Medeiros',
          textPost: "Lorem ipsum dolor sit amet, alii quodsi mentitum mea at. Qui elitr voluptatum interpretaris ne, corpora detraxit cum an. Lorem ipsum dolor sit amet, alii quodsi mentitum mea at. Qui elitr voluptatum interpretaris ne, corpora detraxit cum an.",
        },
        { id: 4,
          titlePost: 'Aprendendo React Native 4',
          autorPost: 'Matheus Medeiros',
          textPost: "Lorem ipsum dolor sit amet, alii quodsi mentitum mea at. Qui elitr voluptatum interpretaris ne, corpora detraxit cum an. Lorem ipsum dolor sit amet, alii quodsi mentitum mea at. Qui elitr voluptatum interpretaris ne, corpora detraxit cum an.",
        }
      ]
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.titleApp }>GoNative App</Text>
        </View>
        <ScrollView style = { styles.containerPosts }>
          { this.state.posts.map(posts => (
            <Posts key={posts.id} titlePosts={posts.titlePost} autorPosts={posts.autorPost} textPosts={posts.textPost} />
          )) }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777'
  },
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleApp: {
    color: '#333333',
    fontSize: 20,
  },
  containerPosts: {
    marginVertical: 10,
  }
});
