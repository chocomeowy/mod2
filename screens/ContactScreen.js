import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { List,Title } from 'react-native-paper';
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 50, 
    },
    list: {
      marginTop: 20,
      marginLeft: 10, 
      marginRight: 10
    },
    icon: {
      height: 50,
      width: 50,
      borderRadius: 50
    }
  })

export default function ContactStack() {
    return (
       

        <View style={styles.container}>
      <Title style={styles.title}> Contacts </Title>
      <View style={styles.list}>
        {contactsData.map((item, i) => {
          return (
            <List.Item
            key = {i}
              title={item.name}
              description={item.company, item.title}
              left={props =>
                <Image {...props} style={styles.icon} source={{ uri: item.pic }} />}
            />)
        })}
      </View>
    </View>
      
    );
  }

  const contactsData = [
    {
      name: "Charlie McCharles",
      title: "CEO",
      company: "Baskets International LLC",
      pic: "https://randomuser.me/portraits/men/1.jpg",
    },
    {
      name: "Desiree Dee",
      title: "CMO",
      company: "Busket Inc",
      pic: "https://randomuser.me/portraits/women/1.jpg",
    },
    {
      name: "Adam ellis",
      title: "CTO",
      company: "Baskets of Biskits",
      pic: "https://randomuser.me/portraits/men/2.jpg",
    },
   
  ];

  

