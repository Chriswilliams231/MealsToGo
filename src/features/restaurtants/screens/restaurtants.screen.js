import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper'

import { RestaurantInfo } from '../compontents/restaurtants-info.compontents'


export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
            <Searchbar
                placeholder='Search'
            />
        </View>
        <View style={styles.list}>
            <RestaurantInfo />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    search: {
        // flex: 1,
        padding: 16,
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: "blue"
    }
});
