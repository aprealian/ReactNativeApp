import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
// import { TabBar, SearchBar, Button } from '@ant-design/react-native';
import { Button } from '@ui-kitten/components';

const HomeHeader = () => (
    <View style={styles.header}>
      <Text style={styles.sectionTitle}>Good Morning Aprilian!</Text>
      <Text style={styles.sectionSubTitle}>You have 4 tasks to complete</Text>
      <Button type="primary" size="large" appearance="filled" style={styles.button}>Add New Task</Button>
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
        fontSize: 20,
        fontWeight: '600',
        color: '#ACB2BE',
    },
    button: {
        alignItems: "center",
        // width: 200,
        marginHorizontal: 70, 
        marginTop: 20,
        fontSize: 20,
        fontWeight: '600',
        color:'#fff',
        backgroundColor: '#6320DC',
        borderRadius: 24,
        //borderWidth: 1,
        borderColor: '#fff'
    }
  });

export default HomeHeader;