import React,{useState,useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View,FlatList} from 'react-native'
import Card from '../Components/Card'
import CustomHeader from '../Components/CustomHeader'
import Search from '../Components/Search'
import storage,{firebase} from '@react-native-firebase/storage';
import images from '../utility/ImageConst'

const FavoriteScreen = ({route,navigation}) => {
//    const  {data}= route.params.data;
//     console.log(data);
    const [like, setLike] = useState([]);
    const [serach, setSerach] = useState('');
    const [passengersList, setPassengersList] = useState([]);
    const [lists, setLists] = useState([])

  
    useEffect(() => {
      firebase
      .firestore()
      .collection("UserEvent")
      .onSnapshot(snapshot => {
        const lists = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setLists(lists)
      })
    }, [])

    const onlike = (item) => {
      const d=item
      
    };
    
    return (
        <SafeAreaView style={styles.contioner}>
        <CustomHeader title='Favorit' lefticons={images.menu} navigation={()=>{navigation.openDrawer()}} />
        <Search  
          placeholder='Serach'
          value={serach}
          onChangeText={event =>{setSerach(event)}}/>
        <FlatList 
        data={lists.filter((e)=>{
                        if(serach==""){
                            return e;
                           }else if( e.date.toString().includes(serach.toString()) ||
                           e.description.includes(serach) ||
                           e.title.includes(serach) ||
                           e.place.includes(serach) ){
                               return item;
                       }})
        }
        keyExtractor={item=>item.id}
        renderItem={({item})=>{
          return(
            <Card
            like={like}
            image={item.image}
            title={item.Title}
            description={item.Description}
            onPress={()=>setLike(!like)}
            date={item.date}
            place={item.Place}
        />)}}
      />
        </SafeAreaView>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    contioner:{
        flex: 1,
    }
})
