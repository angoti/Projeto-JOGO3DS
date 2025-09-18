import { View, Text, Pressable, StyleSheet, Alert, Platform, BackHandler } from "react-native";
import TelaEntrada from './src/screens/TelaEntrada';
import TelaJogo from './src/screens/TelaJogo';
import { useState } from "react";

export default function App() {
	// estado que controla qual "tela" está ativa
	// valores possíveis: 'inicio' | 'jogo' | 'creditos'
	const [tela, setTela] = useState("inicio");

	const irPara = nomeTela => setTela(nomeTela);

	const sair = () => {
		if (Platform.OS === "android") {
			BackHandler.exitApp();
		} else {
			Alert.alert("Sair", "Em iOS os apps não devem ser encerrados programaticamente.", [{ text: "OK" }]);
		}
	};

	return (
		<View style={styles.container}>
			{/* Renderização condicional das "telas" */}
			{tela === "inicio" && <TelaEntrada irPara={irPara} sair={sair} />}
			{tela === "jogo" && <TelaJogo irPara={irPara} sair={sair} />}
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#10131a",
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
	},
	box: {
		width: "100%",
		maxWidth: 420,
		alignItems: "stretch",
		gap: 12,
	},
	header: {
		color: "#fff",
		fontSize: 24,
		fontWeight: "700",
		textAlign: "center",
		marginBottom: 8,
	},
	texto: {
		color: "#c9d1d9",
		fontSize: 16,
		textAlign: "center",
		marginVertical: 8,
	},
	btn: {
		backgroundColor: "#2f81f7",
		paddingVertical: 14,
		borderRadius: 10,
		alignItems: "center",
	},
	btnPressed: {
		opacity: 0.85,
		transform: [{ scale: 0.98 }],
	},
	btnText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
		letterSpacing: 0.5,
	},
});
