import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function TelaInicial({ irPara, sair }) {
	return (
		<View style={styles.container}>
			<View style={styles.esquerda}>
				<Image style={styles.logo} source={require("../assets/logo.jpg")} />
			</View>

			<View style={styles.meio}>
				<Text style={styles.paragraph}>Quiz Legal</Text>
				<TouchableOpacity style={styles.butaoInicial} onPress={() => irPara("fase1")}>
					<Text style={styles.butaoInicialTexto}>Jogar</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.butaoInicial}>
					<Text style={styles.butaoInicialTexto}>Créditos</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.butaoInicial}>
					<Text style={styles.butaoInicialTexto}>Sair</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.direita}>
				<Image style={styles.logo2} source={require("../assets/logo2.jpg")} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
	},
	esquerda: { flex: 1 },
	meio: { flex: 1, justifyContent: "center", alignItems: "center" },
	direita: { flex: 1, justifyContent: "flex-end" },
	paragraph: {
		marginLeft: 10,
		fontSize: 50,
		fontWeight: "bold",
		color: "black",
	},
	logo: {
		height: 128,
		width: 128,
		borderWidth: 0,
		alignSelf: "flex-end",
		margin: 16,
	},
	logo2: {
		height: 128,
		width: 128,
		borderWidth: 0,
    margin: 26,
    marginBottom: 50,
	},
	butaoInicial: {
		paddingVertical: 12,
		paddingHorizontal: "10%",
		borderRadius: 20,
		marginVertical: 10,
		backgroundColor: "#FFD700",
		boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",width:'70%'
	},
	butaoInicialTexto: {
		color: "black",
		fontSize: 29,
		fontWeight: "bold",
		textAlign: "center",
	},
	banner: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: "15%",
	},
});
