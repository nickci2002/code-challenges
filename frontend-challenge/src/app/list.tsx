import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Court, fetchCourts } from "../api/courtApi";
import { CourtPreview } from "../components/CourtPreview";

export default function List() {
  const [courts, setCourts] = useState<Court[]>([]);
    
  useEffect(() => {
    // Load initial player data
    const loadCourts = async () => {
      const loadedCourts = await fetchCourts();
      setCourts(JSON.parse(loadedCourts));

    };
      
    loadCourts();
  }, []);
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Ratings tab</Text>
      { courts.map((court) => (
        <CourtPreview 
          id={court.id}
          name={court.name}
          location={court.location}
          imageLink={court.imageLink}
          averageRating={court.averageRating}
        />
      )) }
    </View>
  );
}
