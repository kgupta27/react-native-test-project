import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
} from "react-native";


class HomeComponent extends React.Component {

    data = {
        "criteria": "",
        "gpsLatitude": 28.5103,
        "gpsLongitude": 77.0921,
        "size": "4",
        "page": "0",
        "distance": "",
        "homeVisit": "",
        "appointmentDate": "",
        "appointmentTime": "",
        "minFee": "",
        "maxFee": "",
        "onlineConsultation": "",
        "gender": [

        ],
        "amenities": [
            ""
        ],
        "minExperience": "",
        "maxExperience": "",
        "language": [

        ],
        "paymentOption": [
            ""
        ],
        "rating": "",
        "sortBy": ""
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'HomeScreen',
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentWillMount() {
        // this.apiCall();
    }

    async apiCall() {
        console.warn("Api call");
        await this.props.getforceUpdate(this.data);
        // setTimeout(() => {
        //     console.warn(this.props);
        // }, 5000)
        console.warn('1', this.props)
        this.props.forceUpdateReply.then((res) => {
            console.warn("res");
            if (res.status == 200) {
                res.json().then((resp) => {
                    if (resp.data) {
                        console.warn("data: ", resp.data);
                        this.state.data = resp.data;
                        console.log("this.state.data: ", this.state.data)
                    }
                });
            }
        })
            .catch((error) => {
                console.warn('error', error)
            })
    }

    changeUiState() {
        this.props.toggleUiState();
        console.warn("this.props.uiState:", this.props);
    }

    nextPage() {
        this.apiCall();
        // this.props.navigation.navigate('List', { data: this.state.data });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen!</Text>
                <Button
                    onPress={() => { this.nextPage() }}
                    title="Fetch Request"
                    style={styles.button} />

                {/* <Button onPress={() => { this.changeUiState() }} title="Change UI State" />
                {(this.props.uiState) ?
                    <Text>UI State is True</Text> :
                    <Text>UI State is False</Text>
                } */}
            </View>
        );
    }
}

export default HomeComponent;

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