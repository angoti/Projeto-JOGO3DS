import { Alert, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { questoes } from "../questoes";
import { useState } from "react";

export default function Fase1({ irPara }) {
	const [indice, setIndice] = useState(0);

	const resolverQuestao = letra => {
		if (letra === questoes[indice].correta) {
			Alert.alert("Correto!", "Você acertou a questão.");
    } else {
      Alert.alert("Incorreto!", "Você errou a questão. Tente novamente.", [
        { text: "OK", onPress: () => irPara("inicio") }
      ]);
      return;
    }
		if (indice + 1 >= questoes.length) {
			Alert.alert("Parabéns!", "Você completou todas as questões.");
			irPara("inicio");
			return;
		}
		setIndice(indice + 1);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.butaoInicial} onPress={() => irPara("inicio")}>
				<Text style={styles.butaoInicialTexto}>Voltar</Text>
			</TouchableOpacity>
			<View style={styles.questao}>
				<Text style={styles.paragraph}>{questoes[indice].pergunta}</Text>
				<View style={styles.opcoes}>
					{questoes[indice].opções.map(opção => (
						<TouchableOpacity
							key={opção.letra}
							style={styles.opcao}
							onPress={() => resolverQuestao(opção.letra)}>
							{console.log(opção)}
							<Text style={styles.paragraph}>{opção.texto}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 24,
		backgroundColor: "",
	},
	paragraph: {
		marginLeft: 10,
		fontSize: 30,
		fontWeight: "bold",
		color: "red",
	},
	logo: {
		height: 128,
		width: 128,
	},
	butaoInicial: {
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 30,
		marginVertical: 10,
		backgroundColor: "yellow",
	},
	butaoInicialTexto: {
		color: "brown",
		fontSize: 30,
		fontWeight: "bold",
	},
	questao: {
		flex: 1,
		width: "80%",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 0,
		padding: 20,
		borderRadius: 10,
	},
	opcao: {
		marginVertical: 10,
		backgroundColor: "lightgray",
		padding: 10,
		borderRadius: 10,
		minWidth: "40%",
	},
	opcoes: {
		marginTop: 20,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
		gap: 10,
		borderWidth: 0,
	},
});
