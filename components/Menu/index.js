import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from './styles'
import items from './items'


const Menu = () => {
    return (
        <View style={styles.menuItems}>
                {items.map(item => (
                    <TouchableOpacity key={item.id}>
                        <View style={styles.menuRow}>
                            <FontAwesomeIcon style={styles.icon} size={25} icon={item.icon} />
                            <View style={styles.menuTextBox}>
                                <Text style={styles.menuText}>{item.title}</Text>
                                {item.subTitle && (
                                    <Text style={styles.subtitle}>{item.subTitle}</Text>
                                )}
                            </View>
                            <FontAwesomeIcon style={styles.icon} size={35} icon={faChevronRight} />
                        </View>
                    </TouchableOpacity>
                ))}
        </View>
    )
}

export default Menu
