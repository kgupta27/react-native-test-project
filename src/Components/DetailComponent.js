import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
} from "react-native";


class DetailComponent extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Doctor Details',
        };
    };

    constructor(props) {
        super(props);
        this.state = {
          data: ''
      }
    }

    render() {
       return (
            <View style={styles.container}>
                <Text>DetailScreen!</Text>
                {/* <Button
                 onPress={() => { this.nextPage() }}
                 title="Fetch Request"
                 style={styles.button} /> */}
            </View>
        );
    }
}

export default DetailComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DCDCDC"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
});