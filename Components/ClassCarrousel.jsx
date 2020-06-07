import * as React from 'react';
import { ScrollView,Dimensions  } from 'react-native';
import Styled from 'styled-components/native';
import { AsyncImage } from './AsyncImage';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

const ViewCarrousel = Styled.View`
    width:100%;
    height:${DEVICE_HEIGHT*0.3}px;
    marginBottom:10px;
`

const ImageItem = Styled(AsyncImage)`
    width:${DEVICE_WIDTH}px;
    height:100%;
`

const ViewIndexContain = Styled.View`
    position:absolute;
    bottom:4%;
    height:2%;
    width:100%;
    display:flex;
    flexDirection:row;
    justifyContent:center;
    alignItems:center;
`

const ViewIndexItem = Styled.View`
    width:6px;
    height:6px;
    borderRadius:4px;
    margin:5px;
    backgroundColor:#fff;
`

export default class ClassCarrousel extends React.Component {
    scrollRef = React.createRef();

    constructor(props){
        super(props);

        this.state = {
            selectedIndex:0
        };
    }


    componentDidMount = () => {
        setInterval(() =>{
            this.setState(prev => ({
                selectedIndex: 
                    prev.selectedIndex === this.props.images.length - 1 
                    ? 0 : prev.selectedIndex + 1
                }),() => {
                this.scrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: DEVICE_WIDTH * this.state.selectedIndex
                });
            });
        }, 3000);
    };


    setSelectedIndex = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contenOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contenOffset / viewSize);
        this.setState({selectedIndex});
    }

    render(){

        const { images } = this.props;
        const { selectedIndex } = this.state;

        return (
            <ViewCarrousel>
             <ScrollView
                showsVerticalScrollIndicator={false}
                horizontal 
                pagingEnabled 
                onMomentumScrollEnd={this.setSelectedIndex}
                ref={this.scrollRef}>
              {images.map(image =>(
                  <ImageItem
                    key={image}
                    source={{uri: image}}
                    placeholderColor='#ccc'
                  />
              )) }
             </ScrollView>
             <ViewIndexContain>
                 {images.map((image,i) =>(
                     <ViewIndexItem key={image}
                       style={{opacity:i === selectedIndex ? 0.5 : 1 }}
                     />
                 ))}
             </ViewIndexContain>
            </ViewCarrousel>
        );
    }
}