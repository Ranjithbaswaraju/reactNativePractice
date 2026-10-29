import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

   const events = [
  { id: '1', name: 'Cricket Tournament' },
  { id: '2', name: 'Football Championship' },
  { id: '3', name: 'Badminton Competition' },
];

const EventScreen=({navigation}:any)=>{
 
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sports Events</Text>
            <FlatList
            data={events}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <Pressable 
                style={styles.eventCard}
                onPress={()=>{
                    navigation.navigate('EventDetails',{
                        eventName:item.name
                    })
                }}
                >
                <Text  style={styles.eventName}>{item.name}</Text>
                <Text style={styles.link}>View Details →</Text>
                </Pressable>
            )}
            
            />

        </View>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 20,
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  eventName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },
  link: {
    fontSize: 14,
    color: '#2563EB',
  },
});

export default EventScreen
