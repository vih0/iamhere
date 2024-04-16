import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components";

export function Home() {
    const participants = ['vitoria','samir','pedro','vitoria','samir','pedro','vitoria','samir','pedro','vitoria','samir','pedro']
    const handleParticipantAdd = () => {
        if(participants.includes("vitoria")){
            return Alert.alert("Participante Existe", "Esse participante ja consta na lista")
        }
        console.log('adicoinou')
    }
    function handleParticipantRemove(name:string){
        Alert.alert("Remover", `Voce tem certeza que deseja remover ${name} da lista?`,[
            {
                text: "Sim",
                onPress: () => Alert.alert("Deletado")
            },
            {
                text: "Não",
                style:"cancel"
            }
        ])
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nome do Evento</Text>
            <Text style={styles.text}>01 de Abril de 2024</Text>
            <View style={styles.form}>

                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
            data={participants}
            keyExtractor={(i,index)=>index.toString()}
            renderItem={({item})=>(
                <Participant key={item} name={item} onRemove={()=>handleParticipantRemove(item)} />
            )}
            showsVerticalScrollIndicator={false} 
            />
        </View>
    )
}