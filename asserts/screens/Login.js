import React, { Component } from 'react';
import { View, Text, TextInput,TouchableOpacity,KeyboardAvoidingView,ImageBackground } from 'react-native';
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
           <ImageBackground 
          source={{uri: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'}}
          style={{ flex: 1,
            width: null,
            height: null,
            }}
        >
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
       </View>


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
       
       
       </ImageBackground >
      </View>
    );
  }
}
