import {StyleSheet} from 'react-native';

const checkout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F2',
  },
  scrollview: {
    marginHorizontal: 3,
  },
  header: {
    width: '100%',
    height: 70,

    backgroundColor: '#FFFFFF',
  },
  title: {
    paddingTop: 27,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3E4462',
  },
  midcontainer: {
    width: '91%',
    height: 100,
    backgroundColor: '#FFFFFF',
    marginBottom: '1%',
    marginTop: '3%',
    marginLeft: '4.5%',
    paddingRight: '4%',
    borderRadius: 9,
  },
  deliverycontainer:{

    width: '91%',
    height: 130,
    backgroundColor: '#FFFFFF',
    marginBottom: '1%',
    marginTop: '3%',
    marginLeft: '4.5%',
    paddingRight: '4%',
    borderRadius: 9,
  },

  subtitle: {
    paddingTop: 19,
    fontSize: 20,
    paddingHorizontal: '5%',
    fontWeight: 'bold',

    color: '#3E4462',
  },
  des: {
    fontSize: 15,
    marginLeft: '5%',
    marginTop: 7,
    color: '#7E7E7E',
  },
  delivery: {
    paddingTop: 19,
    fontSize: 16,
    paddingHorizontal: '5%',
    color: '#3E4462',
    fontWeight:'bold'
    
  },
  place: {
    fontSize: 19,
    marginLeft: '5%',
    marginTop: 7,
    color: '#7E7E7E',
  },
  input:{
  height:40,
  width:'90%',
  backgroundColor:"#F2F5F8",
  marginLeft: '5%',
  marginTop: 7,
  borderRadius:3,
  fontSize:15

  },
  bucketcontainer: {
    width: '91%',
    height: 250,
    backgroundColor: '#FFFFFF',
    marginBottom: '1%',
    marginTop: '3%',
    marginLeft: '4.5%',
    paddingRight: '4%',
    borderRadius: 9,
  },
  paymentcontainer: {
    width: '91%',
    height: 160,
    backgroundColor: '#FFFFFF',
    marginBottom: '1%',
    marginTop: '3%',
    marginLeft: '4.5%',
    paddingRight: '4%',
    borderRadius: 9,
  },
  imagedesc: {
    marginLeft: 130,
    marginTop: 10,
  },
  name: {
    fontSize: 19,
    paddingBottom: 7,
    color:'#3E4462'
  },
  price: {
    fontSize: 15,
    paddingBottom: 7,
    color:'#3E4462'
  },
  Delivery: {
    fontSize: 13,
    paddingBottom: 7,
    color:'#3E4462'
  },
  itemview:
  {
    
    flexDirection:'row'
  },
  additem:{
      fontSize:17,
      color:"#E84C4F",
     
      alignSelf:'center',
      marginLeft:100,
      marginTop:21

  },
  addview: {
    marginLeft: 260,
    flexDirection: 'row',
    height: 35,
    width: 35,
    
    borderRadius: 3,
  },
  
  addTextbox:{
    
    height: 35,
    width: 35,
    backgroundColor: '#F8F5F2',
   
    
  },
  add: {
    fontSize: 17,
    backgroundColor:'#E84C4F',
    paddingTop: 5,
    color: 'white',
    fontWeight: 'bold',
    padding:7,
    borderRadius:5
  },
  min: {
     
    fontSize: 17,
    backgroundColor:'#E1E1E1',
    paddingTop: 5,
    color: 'white',
    fontWeight: 'bold',
    padding:7,
    borderRadius:5
    
  },
  paymentcon:
  {
    flexDirection:'row',
    marginRight:"5%",
    marginLeft:"5%",
  },
  feecon:{
    flexDirection:'row',
    marginRight:7,
    
  },
  payitem:{
 
 marginRight:7,
 marginTop:20,
 fontSize:18,
 color:"#3E4462"
  },
  payfee:{
  
    marginLeft:150,
    color:'#3E4462',
    fontSize:18, 
 marginTop:20,
 
     },

  checkcontainer: {
    width: '100%',
    height:60,
    backgroundColor:'white',
    alignSelf:'center',
    padding:9
  },
  order_container: {
    width: 330,
    height: 40,
    backgroundColor: '#E84C4F',
    alignSelf: 'center',
    borderRadius: 5,
    
  },
  order: {
    fontSize: 20,

    color: 'white',
    alignSelf: 'center',
    paddingVertical: 6,
  },
});

export default checkout;
