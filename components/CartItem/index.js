import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faToolbox, faFan, faKey, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import styles from './styles'
import Menu from '../Menu'


const CartItem = () => {
    const [locked, setLocked] = useState(true);

    const clickLock = () => {
        if (locked) {
            setLocked(false)
        } else {
            setLocked(true)
        }
    }
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require("../../assets/background.png")} style={styles.backgroundImage} />
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={faCog} size={28} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>ML-Mobile</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={28} />
                </TouchableOpacity>
            </View>
            <View style={styles.batterySection}>
                <Image source={require("../../assets/battery.png")} style={styles.batteryImage} />
                <Text style={styles.batteryText}>150 Mi/p/hr</Text>
            </View>
            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
            </View>
            <ScrollView>
                <View style={styles.controls}>
                    <View style={styles.controlButton}>
                        <TouchableOpacity>
                            <FontAwesomeIcon style={styles.icon} size={45} icon={faFan} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlButton}>
                        <TouchableOpacity>
                            <FontAwesomeIcon style={styles.icon} onPress={() => clickLock()} size={45} icon={faKey} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlButton}>
                        <TouchableOpacity>
                            <FontAwesomeIcon style={styles.icon} size={45} icon={locked ? faLock : faUnlock} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Menu />
            </ScrollView>
        </View>
    )
}

export default CartItem
