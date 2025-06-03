import { View, Text, Image, FlatList } from "react-native";
import React from "react";

export default function HotelList({ hotelList }) {
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
        }}
      >
        🏤Hotel Recommendation
      </Text>
      <FlatList
        style={{
          marginTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={hotelList}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginRight: 20,
              width: 180,
            }}
          >
            <Image
              source={require("./../../assets/images/2.jpeg")}
              style={{
                width: 180,
                height: 120,
                borderRadius: 15,
              }}
            />
            <View
              style={{
                padding: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 17,
                }}
              >
                {item.name}
              </Text>
              <View>
                <Text
                  style={{
                    fontFamily: "outfit",
                  }}
                >
                  ⭐️{item.rating}
                </Text>
                <Text
                  style={{
                    fontFamily: "outfit",
                  }}
                >
                  💰{item.price}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
