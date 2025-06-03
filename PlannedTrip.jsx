import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PlannedTrip({ details }) {
  // Function to open Google Maps
  const openGoogleMaps = (geo_coordinates) => {
    const [lat, lng] = geo_coordinates.split(", ");
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    Linking.openURL(googleMapsUrl);
  };

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
      >
        🏕️ Plan Details
      </Text>
      {Object.entries(details).map(([day, details]) => (
        <View key={day}>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Day {day.charAt(0).toUpperCase() + day.slice(1)}
          </Text>
          {details.schedule.map((place, index) => (
            <View
              key={index}
              style={{
                backgroundColor: Colors.lblue,
                padding: 10,
                borderRadius: 15,
                borderColor: Colors.LIGHT_GRAY,
                marginTop: 20,
              }}
            >
              <Image
                source={require("./../../assets/images/2.jpeg")}
                style={{
                  width: "100%",
                  height: 120,
                  borderRadius: 15,
                }}
              />
              <View
                style={{
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "outfit-bold",
                    fontSize: 20,
                  }}
                >
                  {place?.location}
                </Text>
                <Text
                  style={{
                    fontFamily: "outfit",
                    fontSize: 17,
                    color: Colors.GRAY,
                  }}
                >
                  {place?.details}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontFamily: "outfit",
                        fontSize: 15,
                        marginTop: 5,
                      }}
                    >
                      🎟️ Ticket Price:{" "}
                      <Text
                        style={{
                          fontFamily: "outfit-medium",
                        }}
                      >
                        {place?.ticket_pricing}
                      </Text>
                    </Text>
                    <Text
                      style={{
                        fontFamily: "outfit",
                        fontSize: 15,
                        marginTop: 5,
                      }}
                    >
                      ⏱️ Time to travel:{" "}
                      <Text
                        style={{
                          fontFamily: "outfit-medium",
                        }}
                      >
                        {place?.time_travel}
                      </Text>
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.PRIMARY,
                      padding: 8,
                      borderRadius: 7,
                    }}
                    onPress={() => openGoogleMaps(place?.geo_coordinates)} // Trigger the maps redirect
                  >
                    <Ionicons name="navigate" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
