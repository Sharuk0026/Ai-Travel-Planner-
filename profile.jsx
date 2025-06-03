import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./../../components/MyTrips/UserTripList";
import { CreateTripContext } from "./../../context/CreateTripContext";
import { useRouter } from "expo-router";

export default function Profile() {
  const { userTrips } = useContext(CreateTripContext); // Assuming you have userTrips in context
  const [selectedTrip, setSelectedTrip] = useState(null);
  const router = useRouter();

  const handleTripSelect = (trip) => {
    setSelectedTrip(trip);
  };

  return (
    <View style={{ padding: 25, backgroundColor: Colors.WHITE, height: "100%" }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 35, marginTop: 20 }}>
        Profile
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 23 }}>
          My Trips
        </Text>
        
        <FlatList
          data={userTrips}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleTripSelect(item)}>
              <UserTripCard trip={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()} // Assuming each trip has a unique id
        />
      </View>

      {selectedTrip && (
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 24 }}>
            Selected Trip: {selectedTrip.locationInfo.name}
          </Text>
          <Text style={{ fontFamily: "outfit", fontSize: 17, color: Colors.GRAY }}>
            Start Date: {new Date(selectedTrip.startDate).toLocaleDateString()}
          </Text>
          <Text style={{ fontFamily: "outfit", fontSize: 17, color: Colors.GRAY }}>
            End Date: {new Date(selectedTrip.endDate).toLocaleDateString()}
          </Text>
          <Text style={{ fontFamily: "outfit", fontSize: 17, color: Colors.GRAY }}>
            Traveler: {selectedTrip.traveler.title}
          </Text>
          <Text style={{ fontFamily: "outfit", fontSize: 17, color: Colors.GRAY }}>
            Description: {selectedTrip.traveler.desc}
          </Text>
        </View>
      )}

      <TouchableOpacity
        onPress={() => router.push("auth/sign-in")}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 30,
        }}
      >
        <Text style={{ textAlign: "center", color: Colors.WHITE, fontFamily: "outfit-medium", fontSize: 20 }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
