import * as React from 'react';
import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CourtPreviewProps {
  id: number;
  name: string; 
  location: string;
  imageLink: string;
  averageRating: number;
}

export const CourtPreview: React.FC<CourtPreviewProps> = ({ name, location, imageLink, averageRating }) => {
  const source = '../../assets/' + imageLink;
  return (
    <TouchableOpacity
      style={style.courtEntry}
    >
      <Image 
        source={{ uri: require('../../assets/court1.jpg') }}
        style={{ width: 100, height: 100, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      />
      <Text style={ style.text }>
        {name}
      </Text>
      <Text style={ style.text }>
        {location}
      </Text>
      <Text style={ style.text }>
        {averageRating}
      </Text>
      <Text style={ style.text }>
        {'../../assets/' + imageLink}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  courtEntry: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16, // 1em is roughly 16px in React Native
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'var(--color-black)', // Using CSS variable for text color
  },
});