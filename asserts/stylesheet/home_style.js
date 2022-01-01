import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';

const home = StyleSheet.create({
  container: {
    backgroundColor: '#F9F5F2',
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 3,
  },
  search: {
    marginTop: '5%',

    paddingBottom: '3%',
  },
  input:
   {
    width: 270,
    height:42,
    paddingTop:'3%',

    left: '3%',
    backgroundColor: '#E84C4F14',
    
    marginTop: '10%',

    paddingBottom: '4%',
    borderColor: 'blue',
    borderRadius: 17,
   
  },
  
  title: {
    color: '#3E4462',
    marginTop: '5%',
    left: '3%',
    fontSize: 39,
    fontWeight: 'bold',
  },
  subt: {
    color: '#7E7E7E',
    left: '3%',
    paddingTop: '2%',
    fontSize: 20,
    paddingBottom: '5%',
  },
  title2: {
    color: '#3E4462',
    marginTop: '5%',
    left: '3%',
    fontSize: 25,
    fontWeight: 'bold',
  },
  imageview: {
   
    marginTop: '7%',
    width: '90%',
    height: '30%',
    left: '3%',
    borderRadius:12,
  },
  desview: {
    backgroundColor: 'white',
    marginTop: '30%',
    width: '90%',
    height: '40%',
    left: '5%',
    borderRadius: 12,
    paddingBottom: '10%',
  },
  product: {
    paddingTop: '2%',
    fontSize: 20,
    left: '5%',
  },
  pdes: {
    fontSize: 18,
    left: '5%',
  },
});

export default home;
