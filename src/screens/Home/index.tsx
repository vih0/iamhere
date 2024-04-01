import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components";

export function Home() {
    const participants = ['vitoria','samir','pedro','vitoria','samir','pedro','vitoria','samir','pedro','vitoria','samir','pedro']
    const handleParticipantAdd = () => {
        console.log('adicoinou')
    }
    function handleParticipantRemove(name:string){}
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
            {/* <ScrollView showsVerticalScrollIndicator={false}>
           {participants.map((participant,i)=>(
                
            <Participant key={i} name={participant} onRemove={()=>handleParticipantRemove}/>
           ))}
            </ScrollView> */}
       
        </View>
    )
}