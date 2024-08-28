import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PokemonCard from './components/PokemonCard';

export default function App() {
  
  const charmanderData = {
    name: "charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "squirtle",
    image: require("./assets/squirtle.jpg"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const balbasaurData = {
    name: "balbasaur",
    image: require("./assets/balbasaur.jpg"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunder Shock", "Spark", "Thunderbolt"],
    weaknesses: ["Water", "Ground"],
  };

 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData}/>
        <PokemonCard {...squirtleData}/>
        <PokemonCard {...balbasaurData}/>
        <PokemonCard {...pikachuData}/>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 30,
    elevation: 5,
  },
});