import React from 'react';
import { View, Text } from 'react-native';
import { StackActions } from '@react-navigation/native';


const Datastore = {
    ID:"latienda",
    name:"La Tienda",
    slogan:"",
    slider:[
      'https://www.ubika.com.co/wp-content/uploads/2018/08/lks-2.jpg',
      'https://www.point-sport.com/images/fotoalmansa1.jpg',
      'https://medias.fashionnetwork.com/image/upload/v1/medias/5f0c1acd79c38440a0ea85c72cd3bc011522145.jpg'
    ],
    items:[
      {
        id:'sgfgdfgdfgdfgdfg',
        name:"Camiseta",
        price:"2.3",
        valoration:"3.50",
        description:"T shirt Adidas Original - To achieve this, you can use the navigate method, which acts like goBack if the screen already exists. You can pass the params with navigate to pass the data back:",
        image:[
          'https://assets.adidas.com/images/w_600,f_auto,q_auto/c0b5234b4053469285dea83500d56eda_9366/3_Stripes_Tee_White_CW1203_01_laydown.jpg',
          'https://www.costco.com.mx/medias/sys_master/products/h03/ha9/11956945125406.jpg',
          'https://missionsurfshop.com/5589-thickbox_default/3-str-tee.jpg'
        ]
      },{
        id:'sgfgdfghjuygdfgdfg',
        name:"Camiseta",
        price:"2",
        valoration:"5.00",
        description:"T shirt Adidas Original - To achieve this, you can use the navigate method, which acts like goBack if the screen already exists. You can pass the params with navigate to pass the data back:",
        image:[
          'https://assets.adidas.com/images/w_600,f_auto,q_auto/c0b5234b4053469285dea83500d56eda_9366/3_Stripes_Tee_White_CW1203_01_laydown.jpg',
          'https://www.costco.com.mx/medias/sys_master/products/h03/ha9/11956945125406.jpg',
          'https://missionsurfshop.com/5589-thickbox_default/3-str-tee.jpg'
        ]
      },{
        id:'sgfgdfdfffgdfgdfg',
        name:"Camiseta",
        price:"2",
        valoration:"5.00",
        description:"T shirt Adidas Original -To achieve this, you can use the navigate method, which acts like goBack if the screen already exists. You can pass the params with navigate to pass the data back:",
        image:[
          'https://assets.adidas.com/images/w_600,f_auto,q_auto/c0b5234b4053469285dea83500d56eda_9366/3_Stripes_Tee_White_CW1203_01_laydown.jpg',
          'https://www.costco.com.mx/medias/sys_master/products/h03/ha9/11956945125406.jpg',
          'https://missionsurfshop.com/5589-thickbox_default/3-str-tee.jpg'
        ]
      }
    ]
  };


export default class SplashScreen extends React.Component {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.dispatch(StackActions.replace('main', {store:Datastore}));
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
          Descargando datos...
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}