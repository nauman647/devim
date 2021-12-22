import {View, Text, StyleSheet,StatusBar,SafeAreaView} from 'react-native';


const auth_style = StyleSheet.create({
c1:
{
  flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 5,
},
  container: {
    backgroundColor:'#E63946',
    flex: 1,
  },
  container1:{
   
    backgroundColor:'#F3F3F3',
    flex: 1,
  },
  con: {
    
    flex: 1,
  },
  title: {
    
    fontWeight: 'bold',
    
    color: 'white',
    fontSize:27,
    alignSelf:'center',
    paddingTop:"30%",
  },
  input:{
   
    width:"90%",
    height:'19%',
    backgroundColor:'white',
    borderRadius:9,
    marginBottom:9,
    paddingHorizontal:15

  },
  input_view:
  {
    alignContent:'center',
    alignItems:'center',
    paddingTop:"10%",

    
  },
  btn_view:
  {
     height:40,
     width:190,
     backgroundColor:"black",
     fontcolor:'white',
     alignItems:'center',
     alignSelf:'center',
     borderRadius:5,
      marginBottom:'30%',
     borderWidth:1,
     borderColor:'white'

  },
  btn:
  {
   color:'white',
   fontSize:15,
   alignItems:'center',
   alignSelf:'center',
   paddingTop:8
  },
  forget:
  {
    color:"white",
    alignSelf:'center',
    flexDirection:'row',
    fontSize:13
    
  },
  text_view:
  {
    width:400,
    height:400,
    paddingTop:20,
    
  },



  //################################################################ signup code  below ############################################################################################################

  title_signup: {
    
    fontWeight: 'bold',
    
    color: '#040404',
    fontSize:30,
    alignSelf:'center',
    paddingTop:"30%",
  },
  input_signup:
  {
    alignContent:'center',
    alignItems:'center',
    paddingTop:"7%",

    
  },
  input_signupitem:{
   
    width:"90%",
    height:'11%',
    backgroundColor:'white',
    borderRadius:9,
    marginBottom:9,
    paddingHorizontal:10

  },
  signuptext:{
    color:'white',
    fontSize:15,
    alignItems:'center',
    alignSelf:'center',
    paddingTop:8

  },
  signupbtn:{
    flexDirection:"column",
    position:"relative",
    bottom:"70%",
    height:40,
    width:200,
    backgroundColor:"black",
    fontcolor:'white',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:5,
    borderWidth:1,
    borderColor:'white'
  },
  forget1:{
    color:"#040404",
    paddingTop:10,
    alignSelf:'center',
    flexDirection:'row',
    fontSize:15
    
  },
 
});

export default auth_style;
