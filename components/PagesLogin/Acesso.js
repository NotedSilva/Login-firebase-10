import { Button, Text, TextInput, View } from "react-native";

export default function Acesso({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleAuthentication = async () => {
        try {
          if (user) {
       
            console.log('User logged out successfully!');
            await signOut(auth);
          } else {
            if (isLogin) {
              await signInWithEmailAndPassword(auth, email, password);
              alert('Usuário logado com sucesso!');
              () => { navigation.navigate('Diario') }
              
            } else {
              await createUserWithEmailAndPassword(auth, email, password);
              alert('Usuário criado com sucesso!');
              () => { navigation.navigate('Diario') }
            }
          }
        } catch (error) {
          alert('Erro de autenticação');
        }
      };


    return (
      <View style={styles.authContainer}>
         <Text style={styles.title}>Meu diário</Text>
  
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
          <Button title='Entrar' onPress={handleAuthentication} color="#3498db" />
        </View>
  
        <View style={styles.bottomContainer}>
          <Text style={styles.toggleText} onPress={() => {
            setIsLogin(!isLogin)
            navigation.navigate('Cadastro')
            }}>
            Precisa de uma conta? Cadastre-se
          </Text>
        </View>
      </View>
    );
  }