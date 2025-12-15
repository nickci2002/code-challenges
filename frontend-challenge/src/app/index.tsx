
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { fetchCourts } from '../api/courtApi';
import { ActivityIndicator } from 'react-native';

// Simple redirection to /list tab
export default function StartPage() {
  return (<Redirect href="/list"/>);
}
