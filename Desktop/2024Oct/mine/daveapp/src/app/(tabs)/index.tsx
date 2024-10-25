import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from 'expo-router';

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  const [property, setProperty] = useState("");
  const [location, setLocation] = useState("");
  const [observation, setObservation] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();

  const resetForm = () => {
    setProperty("");
    setLocation("");
    setObservation("");
    setImage(null);
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const handleSubmit = () => {
    // Validate form
    if (!property.trim()) {
      Alert.alert('Error', 'Please enter property details');
      return;
    }
    if (!location.trim()) {
      Alert.alert('Error', 'Please enter location');
      return;
    }
    if (!observation.trim()) {
      Alert.alert('Error', 'Please enter observation');
      return;
    }
    if (!image) {
      Alert.alert('Error', 'Please select or take an image');
      return;
    }

    // Navigate to Details screen with form data
    router.push({
      pathname: '/inspection',
      params: {
        property: property,
        location: location,
        observation: observation,
        imageUri: image
      }
    });
    resetForm();
  };

  return (
    <View style={styles.container}>
      {/* Form Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Property</Text>
        <TextInput
          style={styles.textInput}
          value={property}
          placeholder="Enter Property"
           placeholderTextColor="gray"
          onChangeText={setProperty}
        />

        <Text style={styles.text}>Location</Text>
        <TextInput
          style={styles.textInput}
          value={location}
          placeholder="Which Location"
        placeholderTextColor="gray"
          onChangeText={setLocation}
        />

        <Text style={styles.text}>Observation</Text>
        <TextInput
          style={styles.textInput}
          value={observation}
          placeholder="Your Observation"
          placeholderTextColor="gray"
          onChangeText={setObservation}
        />
      </View>

      {/* Icons Section - Now above the image */}
      <View style={styles.bottomSection}>
        {/* Camera and Gallery Buttons */}
        <View style={styles.cameraView}>
          <TouchableOpacity style={styles.iconView} onPress={takePhoto}>
            <FontAwesome name="camera" size={30} color="red" />
            <Text style={styles.iconsText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconView} onPress={pickImage}>
            <FontAwesome name="image" size={30} color="red" />
            <Text style={styles.iconsText}>Pick Image</Text>
          </TouchableOpacity>
        </View>

        {/* Image Preview Section */}
        <View style={styles.imagePreviewContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.imagePreview} />
          ) : (
            <View style={styles.placeholderImage}>
              <Text style={styles.placeholderText}>No image selected</Text>
            </View>
          )}
        </View>
         {/* Submit Button */}
         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010101",
  },
  inputContainer: {
    width: screenWidth,
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "semibold",
    paddingVertical: 10,
    marginHorizontal: 5,
    color: "#fff",
  },
  textInput: {
    height: 40,
    marginHorizontal: 5,
    borderColor: "gray",
    borderWidth: 1,
    color: "#fff",
    paddingHorizontal: 10,
    backgroundColor: "#1a1a1a",
  },
  bottomSection: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 20,
  },
  cameraView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: screenWidth,
    padding: 5,
    backgroundColor: "#1a1a1a",
  },
  iconView: {
    alignItems: "center",
    padding: 10,
  },
  iconsText: {
    fontSize: 12,
    marginTop: 5,
    color: "#fff",
  },
  imagePreviewContainer: {
    alignSelf: "center",
    width: 150,
    height: 150,
    backgroundColor: "#1a1a1a",
    marginVertical: 10,
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  placeholderImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "dashed",
  },
  placeholderText: {
    color: "#666",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "red",
    padding: 12,
    marginHorizontal: 5,
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});
