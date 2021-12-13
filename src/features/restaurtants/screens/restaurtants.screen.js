import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'

import { RestaurantInfo } from '../compontents/restaurtants-info.compontents'
import { theme } from '../../../infrastructure/theme';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]}
`;

const RestaurantListContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[3]}
    background-color: ${(props) => props.theme.colors.bg.primary}
`

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar
                placeholder='Search'
            />
        </SearchContainer>
        <RestaurantListContainer >
            <RestaurantInfo />
        </RestaurantListContainer>
    </SafeArea>
);

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight
//     },
//     search: {
//         // flex: 1,
//         padding: 16,
//     },
//     list: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: "blue"
//     }
// });
