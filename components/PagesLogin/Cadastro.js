import { Button, Text, TextInput, View } from "react-native";

export default function Cadastro({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) {
    return (
      <View style={styles.authContainer}>
         <Text style={styles.title}>{isLogin ? 'Meu diário' : 'Meu diário'}</Text>
  
         <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button title={isLogin ? 'Entrar' : 'Cadastre-se'} onPress={handleAuthentication} color="#3498db" />
        </View>
  
        <View style={styles.bottomContainer}>
          <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Precisa de uma conta? Cadastre-se' : 'Já possui uma conta? Entrar'}
          </Text>
        </View>
      </View>
    );
  }