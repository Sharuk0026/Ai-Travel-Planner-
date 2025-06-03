import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "./../../context/CreateTripContext";
import moment from "moment";

export default function Reviewtrip() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router=useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  //📍📆🚌💰🗓️
  return (
    <View
      style={{
        paddding: 25,
        paddingTop: 100,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 39,
          marginTop: 20,
        }}
      >   Review Your trip
      </Text>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 25,
          }}
        >     Before generating your trip , please 
        </Text>
        <Text style={{
            fontFamily: "outfit-bold",
            fontSize: 25,
          }}>     review your destination</Text>
        {/* Destination Info */}
        <View
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            {" "}
            📍
          </Text>
         
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

         {/* Date Seleccted Info */}
         <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            {" "}
            🗓️
          </Text>
         
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {moment(tripData?.startDate).format('DD MMM')
               +" To "+
              moment(tripData?.endDate).format('DD MMM')+"  "}
                ({tripData.totalNoOfDays} days)
            </Text>
          </View>
        </View>

         
         
         {/* Traveler Info */}
         <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            {" "}
            🚌
          </Text>
         
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Who's Traveling
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.traveler?.title}
            </Text>
          </View>
        </View>


        {/* Budget Info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            {" "}
            💰
          </Text>
         
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
         onPress={() =>router.replace('/create-trip/generate-trip')}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 80,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Build My Trip 
        </Text>
      </TouchableOpacity>
    </View>
  );
}
