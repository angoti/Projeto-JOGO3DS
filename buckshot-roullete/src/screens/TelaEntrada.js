import { useFonts } from "@expo-google-fonts/poppins/useFonts";
import { Poppins_100Thin } from "@expo-google-fonts/poppins/100Thin";
import { Poppins_100Thin_Italic } from "@expo-google-fonts/poppins/100Thin_Italic";
import { Poppins_200ExtraLight } from "@expo-google-fonts/poppins/200ExtraLight";
import { Poppins_200ExtraLight_Italic } from "@expo-google-fonts/poppins/200ExtraLight_Italic";
import { Poppins_300Light } from "@expo-google-fonts/poppins/300Light";
import { Poppins_300Light_Italic } from "@expo-google-fonts/poppins/300Light_Italic";
import { Poppins_400Regular } from "@expo-google-fonts/poppins/400Regular";
import { Poppins_400Regular_Italic } from "@expo-google-fonts/poppins/400Regular_Italic";
import { Poppins_500Medium } from "@expo-google-fonts/poppins/500Medium";
import { Poppins_500Medium_Italic } from "@expo-google-fonts/poppins/500Medium_Italic";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins/600SemiBold";
import { Poppins_600SemiBold_Italic } from "@expo-google-fonts/poppins/600SemiBold_Italic";
import { Poppins_700Bold } from "@expo-google-fonts/poppins/700Bold";
import { Poppins_700Bold_Italic } from "@expo-google-fonts/poppins/700Bold_Italic";
import { Poppins_800ExtraBold } from "@expo-google-fonts/poppins/800ExtraBold";
import { Poppins_800ExtraBold_Italic } from "@expo-google-fonts/poppins/800ExtraBold_Italic";
import { Poppins_900Black } from "@expo-google-fonts/poppins/900Black";
import { Poppins_900Black_Italic } from "@expo-google-fonts/poppins/900Black_Italic";

import { View, Text, StyleSheet, Image, Pressable } from "react-native";

function TelaEntrada({ irPara }) {

	const [fontsLoaded] = useFonts({
		Poppins_100Thin,
		Poppins_100Thin_Italic,
		Poppins_200ExtraLight,
		Poppins_200ExtraLight_Italic,
		Poppins_300Light,
		Poppins_300Light_Italic,
		Poppins_400Regular,
		Poppins_400Regular_Italic,
		Poppins_500Medium,
		Poppins_500Medium_Italic,
		Poppins_600SemiBold,
		Poppins_600SemiBold_Italic,
		Poppins_700Bold,
		Poppins_700Bold_Italic,
		Poppins_800ExtraBold,
		Poppins_800ExtraBold_Italic,
		Poppins_900Black,
		Poppins_900Black_Italic,
	});

	if (!fontsLoaded) {
		return null;
	} else {
		return (
			<View style={styles.main}>
				<View style={styles.main1}>
					{/* <Image style={styles.image} source={require("./assets/main.png")} /> */}

					<Text
						style={{
							fontSize: 20,
							paddingVertical: 20,
							// Note the quoting of the value for `fontFamily` here; it expects a string!
							fontFamily: "Poppins_900Black_Italic",
							color: "white",
						}}>
						Poppins Black Italic
					</Text>
				</View>

				<View style={styles.main2}>
					<Pressable style={styles.botao} onPress={() => irPara("jogo")}>
						<Text style={styles.texto}>Novo jogo</Text>
					</Pressable>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "red",
    margin: 12,
    width: "50%",
  },
  texto: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    alignSelf: "center",
  },
  image: {
    width: 450,
    height: 450,
  },
  main: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  main1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TelaEntrada;
