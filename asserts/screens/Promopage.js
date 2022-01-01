import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import promo from '../stylesheet/promo';

export default class Promopage extends Component {
  render() {
    return (
      <View style={promo.container}>
        <SafeAreaView style={promo.container}>
          <ScrollView style={promo.ScrollView}>
            <View style={promo.header}>
              <Text style={promo.title}>Today's Promo</Text>
            </View>
            <View style={promo.midcontainer}>
              <View>
                <Text style={promo.subtitle}>Delics Fruit Salad</Text>
                <Text style={promo.des}>Nothigum Street 5</Text>
              </View>
              <View style={promo.hr}></View>
              <View>
                <ImageBackground
                  source={{
                    uri: 'https://media.istockphoto.com/photos/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-and-picture-id1295633127?b=1&k=20&m=1295633127&s=170667a&w=0&h=VDkBqjm0RShberDPMJ_L-LHX1rZ5v8yNvq0I0UxXquM=',
                  }}
                  style={{
                    flex: 1,
                    width: 80,
                    height: 100,
                    marginTop: 33,
                    marginLeft: 30,
                  }}
                  imageStyle={{borderRadius: 10}}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}></View>
                </ImageBackground>
                <View style={promo.imagedesc}>
                  <Text style={promo.name}> Fruit salad mix</Text>
                  <Text style={promo.price}> 18.500</Text>
                  <Text style={promo.Delivery}> Free Delivery </Text>
                </View>
                <TouchableOpacity>
                  <View>
                    <View style={promo.addview}>
                      <Text style={promo.min}>-</Text>

                      <TextInput
                        style={promo.addTextbox}
                        placeholder='0' keyboardType='number-pad'></TextInput>

                        <Text style={promo.add}>+</Text>
                     
                    </View>
                  </View>
                </TouchableOpacity>
                <View>
                  <ImageBackground
                    source={{
                      uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
                    }}
                    style={{
                      flex: 1,
                      width: 80,
                      height: 100,
                      marginTop: 33,
                      marginLeft: 30,
                    }}
                    imageStyle={{borderRadius: 10}}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}></View>
                  </ImageBackground>
                  <View style={promo.imagedesc}>
                    <Text style={promo.name}> Fruit salad mix</Text>
                    <Text style={promo.price}> 18.500</Text>
                    <Text style={promo.Delivery}> Free Delivery </Text>
                  </View>
                  <TouchableOpacity>
                  <View>
                    <View style={promo.addview}>
                      <Text style={promo.min}>-</Text>

                      <TextInput
                        style={promo.addTextbox}
                        placeholder='0' keyboardType='number-pad'></TextInput>

                        <Text style={promo.add}>+</Text>
                     
                    </View>
                  </View>
                </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={promo.midcontainer}>
              <View>
                <Text style={promo.subtitle}>Delics Fruit Salad</Text>
                <Text style={promo.des}>Nothigum Street 5</Text>
              </View>
              <View style={promo.hr}></View>
              <View>
                <ImageBackground
                  source={{
                    uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
                  }}
                  style={{
                    flex: 1,
                    width: 80,
                    height: 100,
                    marginTop: 33,
                    marginLeft: 30,
                  }}
                  imageStyle={{borderRadius: 10}}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}></View>
                </ImageBackground>
                <View style={promo.imagedesc}>
                  <Text style={promo.name}> Fruit salad mix</Text>
                  <Text style={promo.price}> 18.500</Text>
                  <Text style={promo.Delivery}> Free Delivery </Text>
                </View>
                <TouchableOpacity>
                  <View>
                    <View style={promo.addview}>
                      <Text style={promo.min}>-</Text>

                      <TextInput
                        style={promo.addTextbox}
                        placeholder='0' keyboardType='number-pad'></TextInput>

                        <Text style={promo.add}>+</Text>
                     
                    </View>
                  </View>
                </TouchableOpacity>
                <View>
                  <ImageBackground
                    source={{
                      uri: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
                    }}
                    style={{
                      flex: 1,
                      width: 80,
                      height: 100,
                      marginTop: 33,
                      marginLeft: 30,
                    }}
                    imageStyle={{borderRadius: 10}}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}></View>
                  </ImageBackground>
                  <View style={promo.imagedesc}>
                    <Text style={promo.name}> Fruit salad mix</Text>
                    <Text style={promo.price}> 18.500</Text>
                    <Text style={promo.Delivery}> Free Delivery </Text>
                  </View>
                  <TouchableOpacity>
                  <View>
                    <View style={promo.addview}>
                      <Text style={promo.min}>-</Text>

                      <TextInput
                        style={promo.addTextbox}
                        placeholder='0' keyboardType='number-pad'></TextInput>

                        <Text style={promo.add}>+</Text>
                     
                    </View>
                  </View>
                </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={promo.midcontainer}>
              <View>
                <Text style={promo.subtitle}>Delics Fruit Salad</Text>
                <Text style={promo.des}>Nothigum Street 5</Text>
              </View>
              <View style={promo.hr}></View>
              <View>
                <ImageBackground
                  source={{
                    uri: 'https://media.istockphoto.com/photos/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-and-picture-id1295633127?b=1&k=20&m=1295633127&s=170667a&w=0&h=VDkBqjm0RShberDPMJ_L-LHX1rZ5v8yNvq0I0UxXquM=',
                  }}
                  style={{
                    flex: 1,
                    width: 80,
                    height: 100,
                    marginTop: 33,
                    marginLeft: 30,
                  }}
                  imageStyle={{borderRadius: 10}}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}></View>
                </ImageBackground>
                <View style={promo.imagedesc}>
                  <Text style={promo.name}> Fruit salad mix</Text>
                  <Text style={promo.price}> 18.500</Text>
                  <Text style={promo.Delivery}> Free Delivery </Text>
                </View>
                <TouchableOpacity>
                  <View>
                    <View style={promo.addview}>
                      <Text style={promo.min}>-</Text>

                      <TextInput
                        style={promo.addTextbox}
                        placeholder='0' keyboardType='number-pad'></TextInput>

                        <Text style={promo.add}>+</Text>
                     
                    </View>
                  </View>
                </TouchableOpacity>
                <View>
                  <ImageBackground
                    source={{
                      uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
                    }}
                    style={{
                      flex: 1,
                      width: 80,
                      height: 100,
                      marginTop: 33,
                      marginLeft: 30,
                    }}
                    imageStyle={{borderRadius: 10}}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}></View>
                  </ImageBackground>
                  <View style={promo.imagedesc}>
                    <Text style={promo.name}> Fruit salad mix</Text>
                    <Text style={promo.price}> 18.500</Text>
                    <Text style={promo.Delivery}> Free Delivery </Text>
                  </View>
                  <TouchableOpacity>
                  <View>
                    <View style={promo.addview}>
                      <Text style={promo.min}>-</Text>

                      <TextInput
                        style={promo.addTextbox}
                        placeholder='0' keyboardType='number-pad'></TextInput>

                        <Text style={promo.add}>+</Text>
                     
                    </View>
                  </View>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={promo.checkcontainer}>
            <TouchableOpacity>
              <View style={promo.checkout_container}>
                <Text style={promo.checkout}> Checkout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
