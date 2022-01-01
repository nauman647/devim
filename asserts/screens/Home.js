import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import home from '../stylesheet/home_style';

export default class Home extends Component {
  render() {
    return (
      <View style={home.container}>
        <SafeAreaView style={home.container}>
          <ScrollView style={home.scrollView}>
            <View style={home.search}>
              <TextInput
                style={home.input}
                placeholder="   Enter to search"></TextInput>
            </View>

            <View>
              <Text style={home.title}>Hello Yahya </Text>
              <Text style={home.subt}>What do you want to eat?</Text>
            </View>

            <View>
              <Text style={home.title2}>Today's Promo</Text>
            </View>

            <View style={home.imageview}>
            <ImageBackground
          source={{
            uri: 'https://media.istockphoto.com/photos/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-and-picture-id1295633127?b=1&k=20&m=1295633127&s=170667a&w=0&h=VDkBqjm0RShberDPMJ_L-LHX1rZ5v8yNvq0I0UxXquM=',
          }}
          style={{flex: 1, width: null, height: null,}}
          imageStyle={{ borderRadius: 15}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
             
            }}>
              </View>
              <View>
              <View style={home.desview}>
                <Text style={home.product}>Rassian Salad Mix</Text>
                <Text style={home.pdes}> fruit salad with yougut</Text>
                <Text style={home.pdes}>22.0</Text>
              </View>
              </View>
              </ImageBackground>
            </View>
          

            <View style={home.imageview}>
            <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
          }}
          style={{flex: 1, width: null, height: null,}}
          imageStyle={{ borderRadius: 15}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              </View>
              <View>
              <View style={home.desview}>
                <Text style={home.product}>Rassian Salad Mix</Text>
                <Text style={home.pdes}> fruit salad with yougut</Text>
                <Text style={home.pdes}>15.0</Text>
              </View>
              </View>
              </ImageBackground>
            </View>
            
            
          
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
