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
import checkout from '../stylesheet/checkout';

export default class Checkout extends Component {
  render() {
    return (
      <View style={checkout.container}>
        <SafeAreaView style={checkout.container}>
          <ScrollView style={checkout.ScrollView}>
          <View style={checkout.header}>
              <Text style={checkout.title}>Checkout</Text>
            </View>  
            <View style={checkout.midcontainer}>
              <View>
                <Text style={checkout.subtitle}>Keep social distance</Text>
                <Text style={checkout.des}>Leave your order on the door step</Text>
              </View>
              </View>
             < View style={checkout.deliverycontainer}>
              <View>
                <Text style={checkout.delivery}>Deliver to</Text>
                <Text style={checkout.place}>Ji.Jayakatwang no 301</Text>
                <TextInput style={checkout.input} placeholder='   Add a note of delivery address'></TextInput>
              </View>
              </View>

              <View style={checkout.bucketcontainer}>
              <View style={checkout.itemview}>
                <Text style={checkout.subtitle}>My Bucket</Text>
                <TouchableOpacity>
                <Text style={checkout.additem}>+ Add items</Text>
                </TouchableOpacity>
                
              </View>
              
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
                <View style={checkout.imagedesc}>
                  <Text style={checkout.name}> Fruit salad mix</Text>
                  <Text style={checkout.price}> 18.500</Text>
                  <Text style={checkout.Delivery}>   Free Delivery </Text>
                </View>
                <TouchableOpacity>
                  <View>
                    <View style={checkout.addview}>
                      <Text style={checkout.min}>-</Text>

                      <TextInput
                        style={checkout.addTextbox}
                        placeholder='0' keyboardType='number-pad'></TextInput>

                        <Text style={checkout.add}>+</Text>
                     
                    </View>
                  </View>
                </TouchableOpacity>
                </View>
                </View>

                <View style={checkout.paymentcontainer}>
              <View>
                <Text style={checkout.subtitle}>Payment</Text>
              </View>
              <View style={checkout.paymentcon}>
                <Text style={checkout.payitem}>Item total</Text>
                <Text style={checkout.payfee}>RS:18.00</Text>
                
              </View>
              <View style={checkout.paymentcon}>
                <Text style={checkout.payitem}>Delivery fee</Text>
                <Text style={checkout.payfee}>RS:50</Text>
                
              </View>
              </View>
              



            </ScrollView>
            <View style={checkout.checkcontainer}>
            <TouchableOpacity>
              <View style={checkout.order_container}>
                <Text style={checkout.order}> Place order</Text>
              </View>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
          </View>
      );
    }
  }
  

