import { View, Image, StyleSheet, Pressable, Text } from "react-native";

function TelaInicio({ irPara }) {
	const handlePress = () => {
		irPara("jogo");
	};

	return (
		<View style={styles.container}>
			<View style={styles.cima} />

			<View style={styles.meio}>
				<Image source={require("../../assets/imagem.png")} style={{ width: "100%", height: 400 }} />

				<Pressable style={styles.botao} onPress={handlePress}>
					<Text style={styles.textoBotao}>Começar</Text>
				</Pressable>
			</View>
			<View style={styles.baixo}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f0c098",
		flex: 1,
	},

	imagem: {
		width: 600,
		height: 590,
		resizeMode: "contain",
	},

	botao: {
		backgroundColor: "#0B3D0B",
		paddingVertical: 12,
		paddingHorizontal: 40,
		borderRadius: 10,
		alignItems: "center",
		marginTop: 20,
	},

	textoBotao: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
	container: {
		flex: 1,
		backgroundColor: "#b0c498",
		justifyContent: "space-between",
	},
	cima: {
		backgroundColor: "#0d3528",
		flex: 1,
	},
	meio: {
		flex: 7,
		alignItems: "center",
		padding: 8,
	},
	baixo: {
		backgroundColor: "#0d3528",
		flex: 2,
	},
});

export default TelaInicio;
