import { useState } from "react";
import { View, StyleSheet, } from "react-native";
import TelaInicio from "./src/screens/TelaInicio";
import Jogo from './src/screens/Jogo';

export default function App() {
	// estado que controla qual "tela" está ativa
	// valores possíveis: 'inicio' | 'jogo' | 'creditos'
	const [tela, setTela] = useState("inicio");

	const irPara = nomeTela => setTela(nomeTela);

	return (
		<View style={styles.container}>
			{/* Renderização condicional das "telas" */}
			{tela === "inicio" && <TelaInicio irPara={irPara} />}
			{tela === "jogo" && <Jogo irPara={irPara} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    marginTop: 30,
	},
});
