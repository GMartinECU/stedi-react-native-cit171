import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder = "###-###-####"
        placeholderTextColor="#000000"
        keyboardType="default"

      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="####"
        placeholderTextColor="#000000"
        keyboardType="numeric"
        secureTextEntry={true}
      />

      
      {/* button begins here */}
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}>

          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 1,
    backgroundColor: "#FFFFFF",
    
  },
  margin:{
    marginTop: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },

  // buttons begins here
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    height: 100,
    width: 100,
    justifyContent: "center"
    
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});


const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Login;