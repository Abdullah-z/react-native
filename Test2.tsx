import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '../components';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';


// const openCamera = async () => {

//   const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

//   if (permissionResult.granted === false) {
//     alert("You've refused to allow this appp to access your camera!");
//     return;
//   }

//   const result = await ImagePicker.launchImageLibraryAsync({
//     base64: true,
//     quality: 1,
//   });


//   console.log(result.base64);

//   if (!result.cancelled) {
//   }
// };

let pdf = async () => {
  let file = await DocumentPicker.getDocumentAsync({ type: "application/pdf", copyToCacheDirectory: true, multiple: true });

  console.log(file?.uri)

  let fileBase64 = await FileSystem.readAsStringAsync(file?.uri, { encoding: 'base64' });

  console.log(fileBase64)
}

const Test2 = () => {
  return (
    <View>
      <Text>Test2</Text>
      <Button onPress={pdf}>
        <Text>Camera</Text>
      </Button>
    </View>
  );
};

export default Test2;
