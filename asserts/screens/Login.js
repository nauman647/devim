import React, { Component } from 'react';
import { View, Text, TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import auth_style from'../stylesheet/auth_style';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        
        <View style={auth_style.container}  >
        <View >
        <Text  style={auth_style.title}> Login </Text>
        </View>
        <View style ={auth_style.input_view}>
        <TextInput keyboardType={'email-address'} style={auth_style.input} placeholder={'Email'} />
        <TextInput style={auth_style.input} placeholder={'Password'} secureTextEntry={true} />
        </View>
        <KeyboardAvoidingView 
    ref={'keyboardView'}
    style={{flex:1}}

>

        <View style ={auth_style.btn_view}>
        <TouchableOpacity>
            <Text style={auth_style.btn}>Login</Text> 
             </TouchableOpacity>
            
            <View style ={auth_style.text_view}>
            <TouchableOpacity>
            <Text style={auth_style.forget}>Forget Password?</Text>
            </TouchableOpacity>
         
           
           </View>
        
        </View>
        </KeyboardAvoidingView>
       
       
      
      </View>
    );
  }
}
