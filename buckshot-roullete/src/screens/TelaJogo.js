import { View, Text, StyleSheet, Pressable } from "react-native";

const TelaJogo = ({ irPara , sair}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tela do Jogo</Text>
			{/* Adicione aqui os componentes e lógica do seu jogo */}
			<Pressable style={styles.botao} onPress={() => irPara("inicio")}>
				<Text style={styles.texto}>Voltar</Text>
			</Pressable>
			<Pressable style={styles.botao} onPress={() => sair()}>
				<Text style={styles.texto}>Sair</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
    marginBottom: 20,
    flex:1
	},
});

export default TelaJogo;
