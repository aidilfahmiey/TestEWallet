import React, {Component,useEffect} from 'react';
import { Button, StyleSheet, Text, TextInput, View, StatusBar, SafeAreaView, TouchableOpacity, FlatList, Alert } from 'react-native';
import {styles} from '../config/styles';

export default class App extends Component {
  constructor(){
    super();
    var initDate = new Date(),
    dateInit = initDate.getDate() + '/' + initDate.getMonth() + '/' + initDate.getFullYear();
   
    this.state = {
      balance: 3980,
      amount: [100, 20, 900],
      details: ["Lazada", "Shopee", "Nike"],
      initDate: ["20/9/2021", "25/10/2021", "29/11/2021" ],
      valueInput: '',
      textInput: '',
      currentDate: dateInit,
      totalSpend: 1020,
      
    }
     
  }

  addDetails = () => {
        this.setState(prevState =>{
            return{
                valueInput: '',
                amount: [...prevState.amount,prevState.valueInput]
            }
        })
        this.setState(prevState =>{
            return{
                textInput: '',
                details: [...prevState.details,prevState.textInput]
            }
        })
        this.setState(prevState =>{
            return{
                initDate: [...prevState.initDate, this.state.currentDate]
            }
        })
        Alert.alert("You have paid RM" + this.state.valueInput + " for " + this.state.textInput);
        this.state.balance -= this.state.valueInput;
        let numB = Number(this.state.totalSpend);
        let numV = Number(this.state.valueInput);
        this.state.totalSpend = numB+numV;
        
}

   

  render() {
    
    return (
        

      <View style={styles.container}>
        <View style={styles.topInfo}>
          <Text style={styles.topBalance}>My Balance</Text>
        
          <Text style={styles.topAmount}>RM {this.state.balance}</Text>
          <View style={styles.buttonView}>
          <TouchableOpacity onPress={this.countTotal} style={styles.topButton}>
              <Text>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addDetails} style={styles.topButton}>
              <Text>Pay</Text>
          </TouchableOpacity>
          </View>

        <View style={styles.botInfo}>
            <View style={styles.botInput}>
            
                <TextInput
                    placeholder="Enter Details Here"
                    onChangeText={(textInput) => this.setState({textInput})}
                    style={styles.textInputStyle}
                    underlineColorAndroid='transparent'
                />
                <View style={styles.spacerInput}></View>

                    <TextInput
                        placeholder="Enter Value Here"
                        onChangeText={(valueInput) => this.setState({valueInput})}
                        style={styles.textInputStyle}
                        underlineColorAndroid='transparent'
                        keyboardType='numeric'
                        
                    />
           
                </View>
            <View style={styles.botDisplay}>
                <View>
            
                    {
                        this.state.details.map(item => (
                        <Text key={item}>{item}</Text>
                        ))
                    }
                </View>
                <View style={styles.spacerInfo}>
                    {
                        this.state.initDate.map(item => (
                        <Text style={styles.date} key={item}>{item}</Text>
                        ))
                    }
                </View>
                <View>
                    {
                        this.state.amount.map(item => (
                        <Text key={item}>RM {item}</Text>
                        ))
                    }
                </View>
                
            </View>
            <Text>{this.state.totalSpend}</Text>
        </View>
        
      </View>
  </View>

    );
  }
}