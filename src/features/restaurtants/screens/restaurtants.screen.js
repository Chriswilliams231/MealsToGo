import React from 'react'
import { FlatList, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'

import { RestaurantInfo } from '../compontents/restaurtants-info.compontents'
import { theme } from '../../../infrastructure/theme';
import { Spacer } from '../../../components/spacer/spacer.component';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]}
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``


export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar
                placeholder='Search'
            />
        </SearchContainer>
        <RestaurantList
            data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
            renderItem={() => (
                <Spacer position="bottom" size="medium">
                    <RestaurantInfo />
                </Spacer>
            )}
            keyExtractor={(item) => item.name}
        />

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
