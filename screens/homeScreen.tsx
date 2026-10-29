import { Text, View,StyleSheet, Pressable } from "react-native"

const HomeScreen=({navigation}:any)=>{
    return(
        <View>
<Text style={styles.title}>Welcome to Sports App 🏆</Text>

      <Text style={styles.subtitle}>
        Discover exciting sports events!
      </Text>

      <Pressable style={styles.button}
      onPress={()=>navigation.navigate('Events')}
      ><Text>View Events</Text></Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#1E293B',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 13,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  buttonText: {
    color: '#df2121',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;