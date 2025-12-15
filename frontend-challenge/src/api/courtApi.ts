import { getStorageItem, setStorageItem } from './storageApi';

// Defines the Court type, matching the Player type in the example
export type Court = {
  id: number;
  name: string;
  location: string;
  imageLink: string;
  averageRating: number;
};

// Mock data for initial courts
const initialCourts: Court[] = [
  { 
    id: 1,
    name: 'Central Court',
    location: '123 Main St, Miami, FL',
    imageLink: 'court1.jpg',
    averageRating: 4.5
  },
  { 
    id: 2,
    name: 'Grand Arena',
    location: '456 Oak Ave, Miami, FL',
    imageLink: 'court2.jpg',
    averageRating: 4.2
  },
  { 
    id: 3,
    name: 'Sunset Avenue',
    location: '789 Sunset Ave, Miami, FL',
    imageLink: 'court3.jpg',
    averageRating: 3.8
  },
  { 
    id: 4,
    name: 'Ocean View Court',
    location: '101 Beach Blvd, Miami, FL',
    imageLink: 'court1.jpg',
    averageRating: 4.7
  },
  { 
    id: 5,
    name: 'Beachside Country Club',
    location: '202 Ocean Dr, Miami, FL',
    imageLink: 'court2.jpg',
    averageRating: 4.0
  },
];

// Fetch all courts
export const fetchCourts = async () => {
  let courtData = await getStorageItem('courts');
  if (!courtData) {
    courtData = JSON.stringify(initialCourts);
    setStorageItem('courts', JSON.stringify(initialCourts));
    
  }
  
  getStorageItem('ratings').then((data) => {
    if (!data) {
      setStorageItem('ratings', JSON.stringify([]));
    }
  });
  
  return courtData || '[]';
};

// Update courts in storage
export const updateCourts = async (courts: Court[]) => {
  await setStorageItem('courts', JSON.stringify(courts));
  return courts;
};
