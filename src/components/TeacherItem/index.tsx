import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

export default function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://github.com/wellperez.png' }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Wellington Perez</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>
      <Text style={styles.bio}>I'm a 27 years old brazilian who loves music, movies, game and programing.</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 100</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon}></Image>
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}></Image>
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}
