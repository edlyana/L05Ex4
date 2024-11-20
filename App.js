import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, SectionList, StatusBar, Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
  opacityStyle: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor:'#2274A5',
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#BFD7EA',
  },
  textStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerText:{
    textAlign: 'center',
    fontSize: 22,
    marginLeft: 15,
    marginRight: 15,
    // margin: 5,
    fontWeight: 'bold',
    borderWidth: 1,
    margin: 10,
  },
  imgCard:{
    width: 180,
    height: 250,
  },
  buttonContainer:{
    borderWidth: 1,
    margin: 10,
  },
  btnStyle:{
      backgroundColor: 'orange',
      boarderWidth: 1,
      color: 'blue',
      alignItems: 'center',
      padding: 10,
  },
  headerS:{
      textAlign: 'center',
      paddingTop: 15,
      paddingBottom: 15,
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: '#2274A5',
      color: '#F1FAF9',
  }
})

const dataSource = [
  {data:[
      {key:"Reef Knot", imageLink:"https://i.pinimg.com/736x/f8/84/40/f88440a5380d2da2ef2932bae582f80b.jpg"},
      {key:"Figure 8", imageLink:"https://static.wixstatic.com/media/6366ab_80192746927e46a6b677e00dfa00d63f~mv2.jpg/v1/fill/w_775,h_867,al_c,q_85,enc_auto/6366ab_80192746927e46a6b677e00dfa00d63f~mv2.jpg"}
    ],
    title:"Knots", bkColor:"#6693E7", nameIcon:"ribbon", txColor:"black"},
  {data:[
      {key:"Clove Hitch", imageLink:"https://i.pinimg.com/originals/f1/ec/38/f1ec3882fe78fcd37e32d9115a75d288.jpg"},
      {key:"Round Lashing", imageLink:"https://cdn.shopify.com/s/files/1/0092/7173/8464/files/Round_Lashing.jpg?v=1704965902"},
    ],
    title:"Lashings", bkColor:"#6693E7", nameIcon:"tree"},
];

const renderItem = ({item}) => {
  return(
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image style={styles.imgCard} source={{uri: item.imageLink}} />
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={[styles.container, { marginBottom: 290, backgroundColor: '#F1FAF9'}]}>
        <StatusBar hidden={true}/>
        <Text style={styles.headerS}>NPCC Campcraft Notes</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnStyle}>
                <Text style={{fontSize:20}}>Add New Material</Text>
            </TouchableOpacity>
        </View>
        <View>
          <SectionList sections={dataSource} renderItem={renderItem}
                       renderSectionHeader={({section:{title, bkColor, nameIcon}})=>(
                           <Text style={[styles.headerText, {backgroundColor:bkColor}]}><Icon name={nameIcon} size={20} color={"black"}/>  {title}</Text>
                       )}
          />
        </View>
      </View>
  );
};

export default App;
