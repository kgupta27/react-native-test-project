import { FORCE_UPDATE, TOGGLE_UI_STATE } from './constant';

export const forceUpdate = (data) => (dispatch: any) => {
    console.warn('here action',JSON.stringify(data));
    const fetchData = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };

    var url = 'https://uat-gateway.zoylo.com/zoylogateway-0.0.1-SNAPSHOT/zoyloadmin/zoyloadmin-0.0.1-SNAPSHOT/api/doctor-details/search-info?doctorId=5a26e79bca07621fcc69ee4c&gpsLatitude=28.653458&gpsLongitude=77.123767'
    let check = fetch(url,fetchData)
    dispatch({
        type: FORCE_UPDATE,
        forceUpdateReply: check
    })
}

export const toggleUiState = () => ({ type: TOGGLE_UI_STATE });



