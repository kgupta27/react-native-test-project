import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';


class ListComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        }
    }

    static navigationOptions = ({ navigation }) => {

        return {
            headerStyle: { backgroundColor: '#800080' },
            headerTintColor: '#fff',
            headerTitle: 'Dental',
            headerRight: (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={styles.header}
                        activeOpacity={0.8}
                     >
                    </TouchableOpacity>
                </View>),
        }
    };

    componentWillMount(){
      console.warn("Props: ",this.props.data);
    }

    onBook() {
        this.props.navigation.navigate('Detail');
    }

    render() {
        var list;
        (this.state.data.length > 0) ?
            list = this.state.data.doctorListing.map((data, key) => {
                return (
                    <View style={styles.container} key={key}>
                        <Text>{data}</Text>
                    </View>
                );
            }) : null
        return (
            <View style={styles.container}>
                <View style={styles.docComponent}>
                    <View style={styles.docImage}>
                    </View>
                    <View style={styles.Name}><Text>Dr. Niharika</Text><Text style={styles.docSubName}>
                        Dental</Text>
                        <Text>19 yr of Exp</Text></View></View>
                <View style={styles.docLocation}><Text>Hyderabad</Text></View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.onBook()}
                        style={styles.bookButton}
                    >
                        <Text>BOOK
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>{this.doctorList}</Text>
                </View>
            </View>
        )
    }
}

export default ListComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderBottomColor: '#808080',
        borderBottomWidth: 2,
    },
    header: {
        padding: 10,
        marginTop: 6,
        flexDirection: 'row'
    },
    docImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: '#bbb',
    },
    docComponent: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 15,
        flexDirection: "row",
    },
    Name: {
        // fontSize: 20,
        // color: '#8A2BE2',
        height: 200,
        width: 200,
        marginLeft: 20,
        marginTop: 25,
    },
    docSubName: {
        // fontSize: 15,
        // color: '#000000'
    },
    docLocation: {
        // fontSize: 18,
        // color: '#808080',
        marginTop: 100,
        marginLeft: 40,
    },
    buttonContainer: {
        backgroundColor: '#ffa500',
        margin: 20,
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookButton: {
        // position: 'absolute',
        // right: 0
    }
})