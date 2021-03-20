import React from 'react';
import { View, Text,SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { List, Card, Paragraph, Title } from 'react-native-paper';
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  card: {
    marginTop: 20, 
    marginLeft: 15, 
    marginRight: 15,
  }
})

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Welcome Home" component ={HomeScreen} />
        </Stack.Navigator>
      
    );
  }
  function HomeScreen(){
    return(
      <SafeAreaView>
      <ScrollView>
      <Text style={styles.title}>
      Thank you for downloading this app.
        </Text>


        <Card style={styles.card}>
          <Card.Content>
            <Title>International π Day</Title>
            <Paragraph>14 March</Paragraph>
          </Card.Content>
          <Card.Cover style={{marginTop: 10, height: 200}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pi_pie2.jpg/240px-Pi_pie2.jpg' }} />
        </Card>
        
         <Card style={styles.card}>
    <Card.Content>
      <Title>International Day of Peace</Title>
      <Paragraph>21 September</Paragraph>
    </Card.Content>
    <Card.Cover source={{ marginTop: 10, height: 200}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/c/ce/International_Peace_Day_logo.jpg' }} />
  
  </Card>
  <List.Section title="Frequently Asked Questions">
          <List.Accordion
            title="What is this for?">
            <List.Item title="We celebrate world international day." />
          </List.Accordion>
          <List.Accordion
            title="When will this be?">
            <List.Item title="Whenever this pandemic is over." />
          </List.Accordion>
        </List.Section>
        </ScrollView>
    </SafeAreaView>



    );

    }
