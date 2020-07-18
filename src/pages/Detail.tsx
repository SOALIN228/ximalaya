/**
 * User: soalin
 * Date: 2020/7/18
 * Time: 11:38
 * Desc:
 */
import React from 'react';
import {Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@/navigator/index';

interface IProps {
  route: RouteProp<RootStackParamList, 'Detail'>;
}

class Detail extends React.Component<IProps, any> {
  render() {
    const {route} = this.props;
    return (
      <View>
        <Text>detail</Text>
        <Text>{route.params.id}</Text>
      </View>
    );
  }
}

export default Detail;
