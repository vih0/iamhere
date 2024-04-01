import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
     backgroundColor:'#131016',
      flex:1,
      padding:24
},
title:{
      color: '#fdfcfe',
      fontSize:24,
      fontWeight:'bold'
},
text:{
      color:'#6b6b6b',
      fontSize:16,
},
input:{
   backgroundColor: '#1f1e25',
   height:56,
   flex: 1,
   borderRadius:5,
   color:'#fff',
   padding:16,
   fontSize:22,
   marginRight:22 
},
buttonText:{
    color:'#fff',
    fontSize:24
},
button: {
    width:56,
    height:56,
    borderRadius:5,
    backgroundColor:'#31Cf67',
    alignItems:'center',
    justifyContent:'center'
},
form: {
    width:'100%',
    flexDirection:'row',
    marginBottom:42,
    marginTop:26
}
})