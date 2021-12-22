import React, { Component } from 'react';
import { View, Text, TextInput,TouchableOpacity,KeyboardAvoidingView, } from 'react-native';
import auth_style from'../stylesheet/auth_style';


export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
       
      
        <View style={auth_style.container1}  >
        <View >
        <Text  style={auth_style.title_signup}>Sign Up   </Text>
        </View>
        <View style ={auth_style.input_signup}>
        <TextInput keyboardType={'email-address'} style={auth_style.input_signupitem} placeholder={'First Name'} />
        <TextInput style={auth_style.input_signupitem} placeholder={'Last Name'} />
        <TextInput style={auth_style.input_signupitem} placeholder={'Email'} />
        <TextInput style={auth_style.input_signupitem} placeholder={'Password'} />
        <TextInput style={auth_style.input_signupitem} placeholder={'Confirm Password'} />
        
        
    
        
        </View>
        <KeyboardAvoidingView 
    ref={'keyboardView'}
    style={{flex:1}}

>

        <View style ={auth_style.signupbtn}>
        <TouchableOpacity>
            <Text style={auth_style.btn}>Signup</Text> 
             </TouchableOpacity>
            
            <View style ={auth_style.signuptext}>
            <TouchableOpacity>
            <Text style={auth_style.forget1}>Have an account? Login Here</Text>
            </TouchableOpacity>
         
           
           </View>
        
        </View>
        </KeyboardAvoidingView>
       
       
      
      </View>


    );
  }
}
