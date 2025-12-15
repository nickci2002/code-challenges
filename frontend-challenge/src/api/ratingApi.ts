import { Court, updateCourts } from './courtApi';
import { getStorageItem, setStorageItem} from './storageApi';

// Store a new rating
export const storeRating = async (courtId: number, rating: number) => {
  const ratingsStr = await getStorageItem('ratings') || '{}';
  const ratings = JSON.parse(ratingsStr);
  
  if (!ratings[courtId]) {
    ratings[courtId] = [];
  }

  ratings[courtId].push(rating);
  await setStorageItem('ratings', JSON.stringify(ratings));
  
  return ratings[courtId];
};

// Calculate average rating
export const calculateAverageRating = async (courtId: number) => {
  const ratingsStr = await getStorageItem('ratings') || '{}';
  const ratings = JSON.parse(ratingsStr);
  const courtRatings = ratings[courtId] || [];
  
  await new Promise(resolve => setTimeout(resolve, 10000));
  
  if (courtRatings.length === 0) return 0;
  
  const sum = courtRatings.reduce((acc: number, rating: number) => acc + rating, 0);
  return sum / courtRatings.length;
};

// Submit a rating and update court's average
export const submitRating = async (courtId: number, rating: number, allCourts: Court[]) => {
  await storeRating(courtId, rating);
  
  const newAverage = await calculateAverageRating(courtId);

  const updatedCourts = allCourts.map(court => 
    court.id === courtId 
      ? { ...court, averageRating: newAverage }
      : court
  );

  return await updateCourts(updatedCourts);
}; 