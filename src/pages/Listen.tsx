/**
 * User: soalin
 * Date: 2020/7/18
 * Time: 11:35
 * Desc:
 */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

class Listen extends React.Component<IProps, any> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 100,
    });
  };
  render() {
    return (
      <View>
        <Text>listen</Text>
        <Button title={'跳转到详情页'} onPress={this.onPress} />
      </View>
    );
  }
}

export default Listen;
