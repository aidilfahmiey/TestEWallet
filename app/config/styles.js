import { StyleSheet, StatusBar, Platform, Button } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    topInfo: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40
  
    },
    botInfo: {
      flex: 2,
      alignItems: "center",
      width: "100%"
  
  },
  botInput:{
      flexDirection: "row",

      padding:10
      

  },
  
  botDisplay:{
    flexDirection: "row",
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 7,
    width: "110%",
    padding: 10,
    paddingLeft: 35

},

    topBalance: {
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "bold",
        color: "black",
        paddingBottom: 20
    },
    topAmount: {
        fontSize: 25,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "grey",
        paddingBottom: 20
    },
    buttonView: {
        flexDirection: "row",
        
    },
    topButton: {
        alignItems: "center",
        backgroundColor: "#4CAF50",
        padding: 15,
        width: 90,
        height: 55,
        borderRadius: 50,
        marginRight: 10,
        marginLeft: 10
    },
    textInputStyle: {
 
        textAlign: 'center',
        height: 40,
        width: 130,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 7,
        
        
      },
      spacerInput:{
        width: "30%",
        alignItems: "center",
       
      },
      date:{
        textAlign: "center"
      },
      spacerInfo:{
        width: "65%"
      },
      textStyle: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
      },
   
  })
export {styles}