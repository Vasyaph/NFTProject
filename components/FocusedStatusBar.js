import React from 'react';
import {StatusBar, Text, View} from "react-native";
import {useIsFocused} from "@react-navigation/native";

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused()
    return isFocused ? <StatusBar animated={true} {...props}/> : <Text>hello</Text>;
};

export default FocusedStatusBar;
