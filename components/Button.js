import React from 'react';
import {TouchableOpacity, Text, View, Image} from "react-native";
import {COLORS, FONTS, SHADOWS, SIZES} from "../constants";

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: 'absolute',
                borderRadius: SIZES.extraLarge,
                justifyContent: 'center',
                alignItems: 'center',
                ...SHADOWS.light,
                ...props
            }}
            onPress={handlePress}
        >
            <Image
                source={imgUrl}
                resizeMode="contain"
                style={{ width:24,height:24}}
            />
        </TouchableOpacity>
    );
};

export const RectButton = ( {minWidth, fontSize, handlePress, ...props}) => {
    return (
        <TouchableOpacity
            style={{
                minWidth: minWidth,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                padding:SIZES.small,
                ...props
            }}
            onPress={handlePress}
        >
            <Text
            style={{
                fontFamily:FONTS.semiBold,
                fontSize:fontSize,
                color:COLORS.white,
                textAlign:"center"
            }}>
                Place a bit
            </Text>
        </TouchableOpacity>
    )
}


