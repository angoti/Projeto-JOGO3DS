import { StyleSheet, View, Image, TextInput, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import { useFonts } from "@expo-google-fonts/poppins/useFonts";
import { Poppins_700Bold } from "@expo-google-fonts/poppins/700Bold";
import { Poppins_900Black } from "@expo-google-fonts/poppins/900Black";

export default function Jogo() {
	const [fontsLoaded] = useFonts({
		Poppins_700Bold,
		Poppins_900Black,
	});
	const [estado, setEstado] = useState("");
	const mapa = require("../../assets/pernam.png");

	const handleSubmit = () => {
		console.log("Estado enviado:", estado);
		// Adicione aqui a lógica para verificar a resposta
	};

	return fontsLoaded ? (
		<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
				<View style={styles.cima} />
				<View style={styles.meio}>
					<Image source={mapa} resizeMode="contain" style={{ height: "75%" }} />
					
					<View style={styles.inputContainer}>
						<TextInput 
							style={styles.input} 
							onChangeText={setEstado} 
							value={estado} 
							placeholder="Informe o nome do estado que aparece em verde no mapa" 
							keyboardType="default" 
							multiline 
						/>
						<TouchableOpacity style={styles.buttonInsideInput} onPress={handleSubmit}>
							<Text style={styles.buttonText}>✓</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.baixo} />
			</ScrollView>
		</KeyboardAvoidingView>
	) : null;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#b0c498",
	},
	scrollContainer: {
		flexGrow: 1,
		justifyContent: "space-between",
	},
	cima: {
		backgroundColor: "#0d3528",
		flex: 1,
		minHeight: 100,
	},
	meio: {
		flex: 7,
		alignItems: "center",
		padding: 12,
		minHeight: 400,
	},
	baixo: {
		backgroundColor: "#0d3528",
		flex: 2,
		minHeight: 100,
	},
	insiraNome: { margin: 8, backgroundColor: "#134c28", borderRadius: 10, padding: 20, width: "100%" },
	textos: {
		color: "white",
		fontFamily: "Poppins_700Bold",
		fontStyle: "bold",
	},
	input: {
		minHeight: 40,
		minWidth: "100%",
		padding: 8,marginTop: 20,
		paddingRight: 50, // Espaço para o botão
		backgroundColor: "white",
		color: "black",
		borderRadius: 10,
		fontFamily: "Poppins_700Bold",
		color: "#339c38",
	},
	inputContainer: {
		position: 'relative',
		width: '100%',
	},
	buttonInsideInput: {
		position: 'absolute',
		right: 10,
		top: '65%',
		transform: [{ translateY: -15 }],
		backgroundColor: '#339c38',
		borderRadius: 15,
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
