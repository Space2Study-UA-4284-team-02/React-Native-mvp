import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

import { PaperText } from '~/containers'

import { styles } from './ButtonsGeneral.style'

const ButtonsGeneral = () => {
  return (
    <>
      <View style={styles.buttonsRow}>
        <Button
          contentStyle={styles.buttonContent}
          icon={() => (
            <AntDesign
              color='#fff'
              name='arrowright'
              size={20}
            />
          )}
          labelStyle={styles.buttonText}
          mode='contained'
          onPress={() => router.replace('public/signup')}
          style={styles.button}
        >
          Get Started
        </Button>
      </View>
      <PaperText
        onPress={() => router.replace('public/login')}
        style={styles.loginText}
      >
        Log in
      </PaperText>
    </>
  )
}

export default ButtonsGeneral
