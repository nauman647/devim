import {Text, View, StyleSheet} from 'react-native';

const promo = StyleSheet.create({
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
  smallview: {
    width: '20%',
    height: 35,
    backgroundColor: '#FFFFFF',
    left: '3%',
    borderRadius: 3,
    padding: 10,
    flexDirection: 'row',
  },
  midcontainer: {
    width: '91%',
    height: 430,
    backgroundColor: '#FFFFFF',
    marginBottom: '1%',
    marginTop: '3%',
    marginLeft: '4%',
    paddingRight: '4%',
    borderRadius: 9,
  },
  hr: {
    borderBottomColor: '#EFEFF2',
    borderBottomWidth: 4,
    width: '90%',
    height: 4,
    borderRadius: 9,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 15,
  },

  subtitle: {
    paddingTop: 19,
    fontSize: 17,
    paddingHorizontal: '5%',
    fontWeight: 'bold',

    color: '#3E4462',
  },
  des: {
    paddingTop: 9,
    fontSize: 15,
    paddingHorizontal: '5%',
    color: '#7E7E7E',
    paddingBottom: 20,
  },
  imagedesc: {
    marginLeft: 130,
    marginTop: 10,
  },
  name: {
    fontSize: 19,
    paddingBottom: 7,
  },
  price: {
    fontSize: 15,
    paddingBottom: 7,
  },
  Delivery: {
    fontSize: 13,
    paddingBottom: 7,
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
  checkcontainer: {
    width: '100%',
    height:60,
    backgroundColor:'white',
    alignSelf:'center',
    padding:9
  },
  checkout_container: {
    width: 330,
    height: 40,
    backgroundColor: '#E84C4F',
    alignSelf: 'center',
    borderRadius: 5,
    
  },
  checkout: {
    fontSize: 20,

    color: 'white',
    alignSelf: 'center',
    paddingVertical: 5,
  },
});

export default promo;
