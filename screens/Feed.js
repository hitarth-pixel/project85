import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import PostCard from './PostCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
let items = require('./temp_post.json');

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = ({ item: post }) => {
    return <PostCard post={post} navigation={this.props.navigation} />;
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>SPECTAGRAM</Text>
            </View>
          </View>

          <FlatList
            data={items}
            keyExtractor={(item, index) => {
              index.toString();
            }}
            renderItem={this.renderItem}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    width: RFValue(30),
    height: RFValue(100),
  },
  iconImage: {
    width: '100%',
    height: '150%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  appTitleText: {
    marginTop: 0,
    color: 'white',
    fontSize: RFValue(40),
  },

  cardContainer: {
    margin: RFValue(5),
    backgroundColor: 'purple',
    borderRadius: RFValue(20),
  },
  appImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  },

  likeButton: {
    width: RFValue(130),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'pink',
    borderRadius: RFValue(30),
    margin: 5,
  },
  likeText: {
    color: 'purple',
    fontFamily: 'Bubblegum-sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
  disLikeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'pink',
    borderRadius: RFValue(30),
    margin: 5,
  },
  disLikeText: {
    color: 'purple',
    fontFamily: 'Bubblegum-sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
