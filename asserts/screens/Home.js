import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
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
              <Text> Food Image</Text>
              <View style={home.desview}>
                <Text style={home.product}>Fruit Salad Mix</Text>
                <Text style={home.pdes}>Delecious fruit salad</Text>
                <Text style={home.pdes}>22.0</Text>
              </View>
            </View>

            <View style={home.imageview}>
              <Text> Food Image</Text>
              <View style={home.desview}>
                <Text style={home.product}>Rassian Salad Mix</Text>
                <Text style={home.pdes}> fruit salad with yougut</Text>
                <Text style={home.pdes}>15.0</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
