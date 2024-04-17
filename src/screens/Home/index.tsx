import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components";
import { useState } from "react";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [name,setName]= useState('')

    const handleParticipantAdd = () => {
        if(participants.includes(name)){
            return Alert.alert("Participante Existe", "Esse participante ja consta na lista")
        }
    setParticipants(prevState =>[...prevState, name])
    setName('')
    }

    function handleParticipantRemove(name:string){
      
        
        Alert.alert("Remover", `Voce tem certeza que deseja remover ${name} da lista?`,[
            {
                text: "Sim",
                onPress: () =>   setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: "Não",
                style:"cancel"
            }
        ])
    }
     const date = new Date()
     const formatedDate = Intl.DateTimeFormat('pt-BR',{
        dateStyle: 'long',
     }).format(date)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Evento</Text>
            <Text style={styles.text}>{formatedDate}</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setName}
                    value={name}
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
                ListEmptyComponent={()=>(
                    <Text>Ninguém chegou no evento chegou ainda? Adicione participants a sua lista de presença.</Text>
                )}
                />
        </View>
    )
}