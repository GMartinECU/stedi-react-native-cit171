import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";


const sendText = async (phoneNumber) => {
  
  // using fetch do a POST to https://dev.stedi.me/twofactorlogin/8056688113
  await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber),{
    method: 'POST',
    headers: {
      'Content-Type': 'application/text'
    }
  }
  console.log("Phone Number:", phoneNumber);
}

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
        placeholder = "Enter your phone number"
        placeholderTextColor="#8e8e8e"
        keyboardType="numeric"

      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="Enter the code we sent you"
        placeholderTextColor="#8e8e8e"
        keyboardType="numeric"
        secureTextEntry={true}
      />

      
      {/* button begins here */}
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{sendText(phoneNumber)}}>
              
          <Text style = {styles.text}>Send Text</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{sendText(phoneNumber)}}>
              
          <Text style = {styles.text}>Login</Text>
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
    backgroundColor: "#2b80b6",
    padding: 10,
    height: 75,
    margin: 10,
    justifyContent: "center",
  },

  text: {
    color: "#FFFFFF",
  },

  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

// No idea what this is but im going to leave it here
// const App = () => {
//   const [count, setCount] = useState(0);
//   const onPress = () => setCount(prevCount => prevCount + 1);

//   return (
//     <View style={styles.container}>
//       <View style={styles.countContainer}>
//         <Text>Count: {count}</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={onPress}
//       >
//         <Text>Press Here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


export default Login;