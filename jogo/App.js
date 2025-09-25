import { useState } from "react";
import { View, Text, StyleSheet, Alert, Platform, BackHandler } from "react-native";
import TelaInicial from "./components/TelaInicial";
import Fase1 from './components/Fase1';

export default function App() {
	const [tela, setTela] = useState("inicio");

	const irPara = nomeTela => setTela(nomeTela);

	const sair = () => {
		if (Platform.OS === "android") {
			BackHandler.exitApp();
		} else {
			Alert.alert("Sair", "Em iOS os apps não devem ser encerrados programaticamente.", [
				{ text: "OK" },
			]);
		}
	};

	return (
		<View style={styles.container}>
			{tela === "inicio" && <TelaInicial irPara={irPara} sair={sair} />}
      {tela === "fase1" && <Fase1 irPara={irPara} sair={sair} />}

			{tela === "creditos" && (
				<View style={styles.box}>
					<Header titulo="Créditos" />
					<Text style={styles.texto}>
						• Desenvolvido por Você{"\n"}• Curso: Dispositivos Móveis{"\n"}• Tecnologias: React
						Native + Expo
					</Text>
					<Botao label="Voltar" onPress={() => irPara("inicio")} />
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
