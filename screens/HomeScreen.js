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
            <Stack.Screen name = "Welcome Home" component ={HomeScreen}/>
        </Stack.Navigator>
      
    );
  }
  function HomeScreen(){
    return(
      <SafeAreaView>
      <ScrollView>
      <Text style={styles.title}>
          International π Day
        </Text>


        <Card style={styles.card}>
          <Card.Content>
            <Title>Welcome</Title>
            <Paragraph>Thank you for downloading this app.</Paragraph>
          </Card.Content>
          <Card.Cover style={{marginTop: 10, height: 200}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pi_pie2.jpg/240px-Pi_pie2.jpg' }} />
        </Card>
        </ScrollView>
    </SafeAreaView>
    );
    }
    const Homelist = () => {
      const [expanded, setExpanded] = React.useState(true);
    
      const handlePress = () => setExpanded(!expanded);

      return (
        <List.Section title="Frequently Asked Questions">
          <List.Accordion
            title="What is this for?">
            <List.Item title="We celebrate internation pie day." />
          </List.Accordion>
          <List.Accordion
            title="When will this be?">
            <List.Item title="Whenever this pandemic is over." />
          </List.Accordion>
        </List.Section>
      );
    };
