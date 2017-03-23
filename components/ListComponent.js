// need react and component
import React, { Component } from 'react';
// text from native
import { Text, ScrollView, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

//
import Image from 'react-native-scalable-image';

// card, list and button from react native element
import { Card, ListItem, Button, Tile } from 'react-native-elements'

import colors from 'HSColors';

import Icon from 'react-native-vector-icons/MaterialIcons';

import axios from 'axios';

// empty style
let styles = {};

// export my component
class ListComponent extends Component {
  // constructor with props
  constructor(props) {
    // parent props
    super(props);

    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    let url = 'http://seekback.shopshop.space/job/list?limit=10';
    axios
      .get(url)
      .then(res => {
        // It uses data
        this.setState({ jobs: res.data });
      });
  }

  render() {
    //const myCard

    return (
      <ScrollView style={{backgroundColor: 'white'}}>

        <View style={styles.headingContainer}>
          <Image
            width={Dimensions.get('window').width}
            source={ {uri: 'http://www.free-logodesign.com/wp-content/uploads/2011/07/Super-King-Logo1-596x260.png'} }
          />
        </View>

        <View style={styles.container}>
          <Card containerStyle={{padding: 0}} >
          {
            this.state.jobs.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.title}
                />

              );
            })
          }
          </Card>
        </View>
      </ScrollView>
    );
  }
}

styles = StyleSheet.create({
  container: {
    margin: 15
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey2
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  }
})

export default ListComponent;
