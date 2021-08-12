import React, { Component } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import { Button, List, ListItem, Card, Icon } from '@ui-kitten/components';
import { Dimensions } from "react-native";


//Get screen dimension
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

//It will generate rando color
getRandomColor = data => {
    let colorValues = ["red", "blue", "green", "yellow"];
    return colorValues[Math.floor(Math.random() * colorValues.length)];
}

const data = new Array(4).fill({
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
});

getDataSize = input => {
    return data.length
}


//To get the Current Hours
var hours = new Date().getHours(); 

//Get greetings by hour input
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


const image = { uri: "https://wacohippodrometheatre.com/wp-content/uploads/2020/04/Bloodshot-Movie.jpg" };
const logo = { uri: "https://cdn.clipart.email/d9e378be0e64d3cc143bf2823852b40e_netflix-logo-png-circle_256-255.png" };


const Movie = () => (
    <View style={styles.main}>
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.banner}>
                    <ImageBackground source={image} style={styles.bannerImage}>
                        <View style={styles.bannerConatiner}>
                            <View style={styles.menu}>
                                <ImageBackground source={logo} style={{height: 30, width: 30}}>
                                </ImageBackground>
                                {/* <Icon
                                    //style={styles.icon}
                                    fill='#8F9BB3'
                                    name='star'
                                /> */}
                                <Text style={styles.menuText}>TV Shows</Text>
                                <Text style={styles.menuText}>Movies</Text>
                                <Text style={styles.menuText}>My List</Text>
                            </View>
                            <Text style={styles.bannerTitle}>Blood Shoot!</Text>
                        </View>
                    </ImageBackground>
                </View>
                
                <Text style={styles.sectionSubTitle}>You have {this.getDataSize()} tasks to complete</Text>
                <List
                    style={styles.container}
                    data={data}
                    renderItem={renderItem}
                    />
            </View>
        </ScrollView>

        <View style={{position: 'absolute', bottom: 20, width: width}}>
            <Button type="primary" size="large" appearance="filled" style={styles.button}>Add New Task</Button>
        </View>
    </View>
  );


const styles = StyleSheet.create({
    main: {
        height: height
    },
    header: {
      //marginTop: 32,
      //padding: 24,
    },
    banner: {
        marginTop: 0,
        padding: 0,
        minHeight: 350,
        //backgroundImage: 'url(https://wacohippodrometheatre.com/wp-content/uploads/2020/04/Bloodshot-Movie.jpg)'
    },
    bannerImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    bannerConatiner: {
        padding: 20,
        paddingTop: 50,
        height: '100%',
        width: '100%',
        backgroundColor: '#10011F3B',
        position: 'absolute',
        bottom: 0,
        //alignItems: 'bottom'
    },
    bannerTitle: {
        width: '100%',
        fontSize: 42,
        fontWeight: '800',
        padding: 20,
        color: '#FD6C35',
        position: 'absolute',
        bottom: 0,
        textAlign: "center",
    },
    menu: {
        //flex: 1,
        flexDirection: 'row',
        width: '100%',
        //height: 10,
        //fontSize: 16,
        //justifyContent: 'center'
        alignSelf: 'center',
        alignItems: 'center',
    },
    menuText: {
        width: 'auto',
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff'
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
        marginTop: 16, //margin dot
        fontSize: 16,
        fontWeight: '400',
        color:'#57577D',
    },
    container: {
        backgroundColor: '#FFFFFF',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
    },
    dot: {
        width: 10,
        height: 10,
        //backgroundColor: `${this.getRandomColor()}`,
        borderRadius: 24,
        margin: 20,
        marginBottom: 50,
        position: 'absolute',
        right: 0, 
    }
  });


export default Movie;