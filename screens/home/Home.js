import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import { Button, List, ListItem, Card } from '@ui-kitten/components';
import { Dimensions } from "react-native";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


getRandomColor = data => {
    let colorValues = ["red", "blue", "green", "yellow"];
    return colorValues[Math.floor(Math.random() * colorValues.length)];
}

// getRandomColor(){
//     let colorValues = ["red", "blue", "green", "yellow"];
//     return colorValues[Math.floor(Math.random() * colorValues.length)];
// }

const data = new Array(50).fill({
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
});

const dataSize = data.size

var hours = new Date().getHours(); //To get the Current Hours

getGreeting = data => {
    let greetings = ["Morning", "Aftrenoon", "Evening", "Night"];
    if (data > 21){
        return greetings[3]
    } else if (data > 18){
        return greetings[2]
    } else if (data > 15){
        return greetings[1]
    } else if (data > 4){
        return greetings[0]
    } else {
        return greetings[0]
    }
}

// const renderItem = ({ item, index }) => (
//     <ListItem title={`${item.title} ${index + 1}`}/>
// );

const renderItem = ({ item, index }) => (
    <View
      style={styles.item}
      status='basic'>
        <View style={[styles.dot,{ backgroundColor: `${this.getRandomColor()}`}]}></View>
        <Text style={styles.itemText}>
            {item.title}
        </Text>
    </View>
);

const Home = () => (
    <View>
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Good {this.getGreeting(hours)} Aprilian!</Text>
                <Text style={styles.sectionSubTitle}>You have {data.size} tasks to complete</Text>
                <List
                    style={styles.container}
                    data={data}
                    renderItem={renderItem}
                    />
            </View>
        </ScrollView>

        <View style={{position: 'absolute', bottom: 10, width: width}}>
            <Button type="primary" size="large" appearance="filled" style={styles.button}>Add New Task</Button>
        </View>
    </View>
  );


const styles = StyleSheet.create({
    header: {
      marginTop: 32,
      padding: 24,
    },
    sectionTitle: {
      fontSize: 42,
      fontWeight: '800',
      color: '#3D426C',
    },
    sectionSubTitle: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '600',
        color: '#ACB2BE',
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        // width: 200,
        // marginHorizontal: 70, 
        marginTop: 20,
        fontSize: 20,
        fontWeight: '600',
        color:'#fff',
        backgroundColor: '#6320DC',
        borderRadius: 24,
        //borderWidth: 1,
        borderColor: '#fff',
    },
    item: {
        margin: 10,
        backgroundColor: '#FEFEFE',
        borderRadius: 24,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 5,
    },
    itemText: {
        marginTop: 16,//margin dot
        fontSize: 16,
        fontWeight: '400',
        color:'#57577D',
    },
    container: {
        backgroundColor: '#FFFFFF',
    },
    footer: {
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    dot: {
        width: 10,
        height: 10,
        //backgroundColor: `${this.getRandomColor()}`,
        borderRadius: 24,
        margin: 20,
        marginBottom: 50,
        position: 'absolute', //Here is the trick
        right: 0, //Here is the trick
    }
  });


export default Home;