import { StyleSheet, Text, View } from "react-native";

const EventDetailScreen=({route}:any)=>{
    const{eventName}=route.params

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Event Details</Text>
            <View style={styles.card}>
                <Text style={styles.label}>Selected Event</Text>
                <Text style={styles.eventName}>{eventName}</Text>

            </View>
            <Text style={styles.description}>
        Welcome! Here you can view information about this sports event.
      </Text>
        </View>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 25,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 10,
  },
  eventName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#475569',
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default EventDetailScreen
