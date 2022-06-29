import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";


const sendText = async (phoneNumber) => {
  
  // using fetch do a POST to https://dev.stedi.me/twofactorlogin/8056688113
  const loginResponse = await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/text'
    }
  });
  const loginResponseText = await loginResponse.text();
  console.log('Login Response',loginResponseText);
  console.log("Phone Number:", phoneNumber);
}

const getToken = async({phoneNumber, oneTimePassword, setUserLoggedIn}) =>{
  const loginResponse = await fetch('https://dev.stedi.me/twofactorlogin',{
    method: 'POST',
    body:JSON.stringify({oneTimePassword, phoneNumber}),
    headers: {
      'Content-Type': 'application/text'
    }, 
  });
   

  const responseCode = loginResponse.status; //200 means logged in successfully

  console.log("Response Status Code", responseCode);
  console.log("oneTimePassword", oneTimePassword)
  console.log("phoneNumber", phoneNumber)

  if(responseCode===200){
    setUserLoggedIn(true);
  }
 

  const token = await loginResponse.text();
  console.log(token)
}

const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

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
          onPress={()=>sendText(phoneNumber)}>
              
          <Text style = {styles.text}>Send Text</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{
            getToken({phoneNumber, oneTimePassword, setUserLoggedIn:props.setUserLoggedIn});
            }}>
              
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


export default Login;