import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./UserTripCard";
import moment from "moment";
import { useRouter } from "expo-router";

export default function UserTripList({ userTrips }) {
  const { setTripData } = useContext(CreateTripContext);
  const [selectedTrip, setSelectedTrip] = useState(userTrips[0]); // Initialize with the first trip
  const router = useRouter();

  // Extracting the latest trip for displaying the selected details
  const LatestTrip = selectedTrip ? JSON.parse(selectedTrip.tripData) : {};

  return (
    userTrips && (
      <View>
        <View style={{ marginTop: 15 }}>
          {/* Display Main Photo for the Selected Trip */}
          {LatestTrip.locationInfo?.photoRef ? (
            <Image
              source={{
                uri:
                  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                  LatestTrip.locationInfo.photoRef +
                  "&key=" +
                  process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
              }}
              style={{
                width: "100%",
                height: 280,
                objectFit: "cover",
                borderRadius: 15,
              }}
            />
          ) : (
            <Image
              source={require("./../../assets/images/2.jpeg")}
              style={{
                width: "100%",
                height: 280,
                objectFit: "cover",
                borderRadius: 15,
              }}
            />
          )}

          {/* Display Selected Trip Details */}
          <View>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 24,
              }}
            >
              {LatestTrip.tripPlan?.trip?.destination}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 17,
                  color: Colors.GRAY,
                
                }}
              >
                {moment(LatestTrip.startDate).format("DD MMM YYYY")}
              </Text>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 17,
                  color: Colors.GRAY,
               
                }}
              >
                🚌 {LatestTrip.traveler?.title || "Traveler Unavailable"}
              </Text>
            </View>

            {/* Continue Button */}
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/trip-details",
                  params: {
                    trip: JSON.stringify(selectedTrip),
                  },
                })
              }
              style={{
                backgroundColor: Colors.PRIMARY,
                padding: 15,
                borderRadius: 15,
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  color: Colors.WHITE,
                  textAlign: "center",
                  fontFamily: "outfit-medium",
                  fontSize: 15,
                }}
              >
                See Your Plan
              </Text>
            </TouchableOpacity>
          </View>

          {/* Trip List */}
          <View>
            {userTrips.map((trip, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedTrip(trip)} // Update selected trip on press
                style={{
                  marginVertical: 8,
                  borderWidth: selectedTrip === trip ? 2 : 1, // Highlight selected trip
                  borderColor: Colors.LIGHT_GRAY,
                  borderRadius: 10,
                }}
              >
                <UserTripCard trip={trip} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    )
  );
}
