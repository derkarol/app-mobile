import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
  petalIcon: {
    display: 'flex',
    width: 20,
    height: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 0,
    backgroundColor: '#F7AB00',
  },
  // petalIcon: {
  //   width: 20,
  //   height: 40,
  //   borderTopLeftRadius: 50,
  //   borderTopRightRadius: 0,
  //   borderBottomRightRadius: 50,
  //   borderBottomLeftRadius: 0,
  //   backgroundColor: 'white',
  // },
  // // planningIcon
  // icon0: {
  //   backgroundColor: '#1A675C',
  // },
  // // designIcon
  // icon1: {
  //   backgroundColor: '#286BB3',
  // },
  // // frontEndIcon
  // icon2: {
  //   backgroundColor: '#910F19',
  // },
  // // backendIcon
  // icon3: {
  //   backgroundColor: '#E50019',
  // },
  // // devOpsIcon
  // icon4: {
  //   backgroundColor: '#F8810A',
  // },
  // // functionalTestingIcon
  // icon5: {
  //   backgroundColor: '#F7AB00',
  // },
});

export default function petalIcon(props) {
  const { id } = props.team;

  return (
    <View
      style={[styles.petalIcon, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text>{ id }</Text>
    </View>
  );
}

petalIcon.propTypes = {
  team: propTypes.object,
  teamId: propTypes.string,
};
