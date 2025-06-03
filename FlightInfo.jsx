import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";

export default function FlightInfo({ flightData }) {
  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          🛩️ Flights
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 5,
            width: 100,
            borderRadius: 8,
            marginTop: 7,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 17,
          marginTop: 7,
        }}
      >
        Airline: Delta
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 17,
        }}
      >
        Price: {flightData?.price}
      </Text>
    </View>
  );
}
