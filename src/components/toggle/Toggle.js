import React from 'react'
import { Text, View, Dimensions} from 'react-native'
import EStyleSheet, { value } from 'react-native-extended-stylesheet';
import ToggleSwitch from 'toggle-switch-react-native';
import CommonColors from '../../utils/constants/colors/CommonColors';

let entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const Toggle = (props) => {
    return (
        <View>
            <ToggleSwitch
                isOn={props.isEnabled}
                offColor={CommonColors.Woodland}
                onColor={CommonColors.Woodland}
                thumbOffStyle={styles.thumbOnStyle}
                thumbOnStyle={styles.thumbOnStyle}
                size="small"
                onToggle={(value) => {props.onToggle(value)}}
                style={styles.toggleStyle}
                trackOffStyle={styles.trackOffStyle}
                trackOnStyle={styles.trackOffStyle}
            />
        </View>
    )
}
const styles = EStyleSheet.create({
    thumbOnStyle: {
        backgroundColor: CommonColors.Crusta,
    
      },
      trackOffStyle: {
        borderColor: CommonColors.Avocado,
        borderWidth: 0.5,
      },
     
});
export default Toggle;