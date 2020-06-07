import * as React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import Styled from 'styled-components/native';
import AsyncImage from './AsyncImage';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const ViewCarrousel = Styled.View`
    width:${DEVICE_WIDTH}px;
    height:${DEVICE_HEIGHT*0.43}px;
`

const ImageItem = Styled(AsyncImage)`
    width:${DEVICE_WIDTH}px;
    height:${DEVICE_HEIGHT*0.43}px;
`

const ViewIndexContain = Styled.View`
    position:absolute;
    left:2%;
    bottom:4%;
    height:2%;
    width:100%;
    display:flex;
    flexDirection:row;
    justifyContent:flex-start;
    alignItems:flex-start;
`

const ViewIndexItem = Styled.View`
    width:8px;
    height:8px;
    borderRadius:4px;
    margin:5px;
    backgroundColor:#bbb;
`


export default class ClassImagesContent extends React.Component {
    scrollRef = React.createRef();

    constructor(props){
        super(props)

        this.state = {
            selectedIndex:0
        };
    }

    componentDidMount = () => {
        this.scrollRef.current.scrollTo({
            animated: true,
            y: 0,
            x: DEVICE_WIDTH * this.state.selectedIndex
        });
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