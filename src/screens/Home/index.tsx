import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {
    const handleParticipantAdd = () => {
        console.log('adicoinou')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nome do Evento</Text>
            <Text style={styles.text}>falo</Text>
            <View>

                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}