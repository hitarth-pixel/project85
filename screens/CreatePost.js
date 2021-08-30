import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

export default class CreatePost extends React.Component {
  constructor() {
    super();
    this.state = {
      previewImage: 'image_1',
      dropdownHeight: 40,
    };
  }
  render() {
    let preview_Image = {
      image_1: require('../assets/image_1.jpg'),
      image_2: require('../assets/image_2.jpg'),
      image_3: require('../assets/image_3.jpg'),
      image_4: require('../assets/image_4.jpg'),
      image_5: require('../assets/image_5.jpg'),
      image_6: require('../assets/image_6.jpg'),
      image_7: require('../assets/image_7.jpg'),
      image_8: require('../assets/image_8.png'),
      image_9: require('../assets/image_9.png'),
      image_10: require('../assets/image_10.png'),
    };
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
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>NEW POST</Text>

            <DropDownPicker
              items={[
                { label: 'Image 1', value: 'image_1' },
                { label: 'Image 2', value: 'image_2' },
                { label: 'Image 3', value: 'image_3' },
                { label: 'Image 4', value: 'image_4' },
                { label: 'Image 5', value: 'image_5' },
                { label: 'Image 6', value: 'image_6' },
                { label: 'Image 7', value: 'image_7' },
                { label: 'Image 8', value: 'image_8' },
                { label: 'Image 9', value: 'image_9' },
                { label: 'Image 10', value: 'image_10' },
              ]}
              defaultValue={this.state.previewImage}
              containerStyle={{
                height: 40,
                borderRadius: 20,
                marginBottom: 10,
              }}
              onOpen={() => {
                this.setState({ dropdownHeight: 170 });
              }}
              onClose={() => {
                this.setState({ dropdownHeight: 40 });
              }}
              style={{ backgroundColor: 'transparent' }}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{ backgroundColor: '#2f345d' }}
              labelStyle={{
                color: 'white',
                fontFamily: 'Bubblegum-Sans',
              }}
              arrowStyle={{
                color: 'white',
                fontFamily: 'Bubblegum-Sans',
              }}
              onChangeItem={(item) =>
                this.setState({
                  previewImage: item.value,
                })
              }
            />

            <Image
              source={preview_Image[this.state.previewImage]}
              style={{
                width: '93%',
                height: RFValue(250),
                alignSelf: 'center',
                borderRadius: RFValue(10),
                marginVertical: RFValue(10),
                resizeMode: 'contain',
              }}></Image>
            <TextInput
              style={{
                height: 30,
                borderColor: 'white',
                borderWidth: 3,
                width: 300,
              }}
              placeholderTextColor="white"
              placeholder="caption....."
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
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
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    marginRight: -300,
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(65),
    marginLeft: 40,
    fontFamily: 'fantasy',
    fontStyle: 'italic',
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
