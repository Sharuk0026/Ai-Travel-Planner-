import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Colors } from "./../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";
export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams(); // Assuming this provides `trip`
  const [tripDetails, setTripDetails] = useState(null); // Initialize with null to handle loading state

  // Function to safely parse data if it's a JSON string
  const formatData = (data) => {
    try {
      return typeof data === "string" ? JSON.parse(data) : data;
    } catch (error) {
      console.error("Data parsing error:", error);
      return null;
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });

    try {
      const parsedTrip = formatData(trip);
      setTripDetails(parsedTrip);
    } catch (error) {
      console.error("Error in parsing trip data:", error);
    }
  }, [trip]);

  if (!tripDetails) {
    return <Text>Loading...</Text>; // Fallback if tripDetails is still loading
  }

  const photoReference = formatData(tripDetails?.tripData)?.locationInfo
    ?.photoRef;
  // const travelerTitle = formatData(tripDetails?.tripData)?.traveler?.title;
  // const startDate = formatData(tripDetails?.tripData)?.startDate;

  return (
    tripDetails && (
      <ScrollView>
        <Image
          source={{
            uri: photoReference
              ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
              : null, // Fallback if photoRef is unavailable
          }}
          style={{
            width: "100%",
            height: 360,
          }}
        />

        {/* <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Traveler: {travelerTitle || "N/A"} 
      </Text>

      <Text style={{ fontSize: 16 }}>
        Start Date: {startDate ? new Date(startDate).toLocaleDateString() : "N/A"} 
      </Text> */}
        <View
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            height: "100%",
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "outfit-bold",
            }}
          >
            {tripDetails?.tripPlan.trip.destination}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: Colors.GRAY,
                fontFamily: "outfit",
                fontSize: 18,
              }}
            >
              {moment(formatData(tripDetails.tripData).startDate).format(
                "DD MMM YYYY"
              )}
            </Text>

            <Text
              style={{
                color: Colors.GRAY,
                fontFamily: "outfit",
                fontSize: 18,
              }}
            >
              -{" "}
              {moment(formatData(tripDetails.tripData).endDate).format(
                "DD MMM YYYY"
              )}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 17,
              color: Colors.GRAY,
              marginTop: 5,
            }}
          >
            🚌{formatData(tripDetails.tripData)?.traveler.title}
          </Text>
          {/* Flight Info */}
          <FlightInfo flightData={tripDetails?.tripPlan?.trip?.flight} />
          {/* Hotels List */}
          <HotelList hotelList={tripDetails?.tripPlan?.trip?.hotel} />
          {/* Trip Day Planner Info */}
          <PlannedTrip details={tripDetails?.tripPlan?.trip?.day_plan}/>
        </View>
        </ScrollView>
    )
  );
}
