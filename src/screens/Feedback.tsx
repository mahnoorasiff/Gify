import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Input} from 'react-native-elements';

const FeedbackForm = ({navigation}:any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ratingError, setRatingError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setEmailError('Enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }


    if (!rating.trim()) {
      setRatingError('Rating is required');
      isValid = false;
    } else if (!Number(rating) || Number(rating) < 1 || Number(rating) > 5) {
      setRatingError('Rating must be between 1 and 5');
      isValid = false;
    } else {
      setRatingError('');
    }

    return isValid;
  };
  
  const handleSubmit = async () => {
    if (validateForm()) {
      const feedbackdata = {
        name,
        email,
        rating,
        feedback,
      };
      await AsyncStorage.setItem('feedbackData', JSON.stringify(feedbackdata));

      Alert.alert('Form submitted', 'Success', [{text: 'OK',
      onPress: () => navigation.navigate("Home"),
    }])
  }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Feedback Form</Text>
      <Input
        label="Name*"
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
        errorMessage={nameError}
        style={styles.input}

      />
      <Input
        label="Email*"
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
        errorMessage={emailError}
        style={styles.input}

      />
      <Input
        label="Rating*"
        placeholder="Enter your rating (1-5)"
        keyboardType="numeric"
        onChangeText={text => setRating(text)}
        errorMessage={ratingError}
        style={styles.input}

      />
      <Input
        label="Feeback"
        placeholder="Enter Feedback"
        value={feedback}
        onChangeText={text => setFeedback(text)}
        style={styles.input}

      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    margin: 25,
    padding: 20,
    height:"90%",
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 35,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default FeedbackForm;
