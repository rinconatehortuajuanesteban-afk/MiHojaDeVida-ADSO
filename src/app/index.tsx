
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const technologies = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'HTML',
  'CSS',
  'React',
  'React Native',
  'Bootstrap',
  'Tailwind CSS',
  'MySQL',
  'SQL',
  'Git',
];

const skills = [
  'Trabajo en equipo',
  'Responsabilidad',
  'Comunicación',
  'Pensamiento lógico',
  'Resolución de problemas',
  'Adaptabilidad',
  'Aprendizaje autónomo',
];

export default function HomeScreen() {
  const openLink = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch {
      console.warn('No fue posible abrir el enlace.');
    }
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
       <Text style={styles.headerLabel}>MI PERFIL PROFESIONAL</Text>
        <Image
          source={require('@/assets/images/perfil.jpg')}
          style={styles.photo}
          accessible
          accessibilityLabel="Fotografía de perfil de Juan Esteban Rincon Atehortua"
        />

        <Text style={styles.name}>Juan Esteban</Text>
        <Text style={styles.lastName}>Rincon Atehortua</Text>

        <Text style={styles.profession}>
          Aprendiz de Análisis y Desarrollo de Software
        </Text>

        <View style={styles.tag}>
          <Text style={styles.tagText}>SENA · Ficha 3407187</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.sectionLabel}>PERFIL</Text>
          <Text style={styles.cardTitle}>Sobre mí</Text>
          <Text style={styles.description}>
            Soy aprendiz del programa Tecnólogo en Análisis y
            Desarrollo de Software del SENA. Me interesa crear
            soluciones mediante aplicaciones web y móviles,
            fortalecer mis habilidades de programación y aprender
            nuevas tecnologías.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>TECNOLOGÍA</Text>
          <Text style={styles.cardTitle}>Mis tecnologías</Text>

          <View style={styles.chipContainer}>
            {technologies.map((technology) => (
              <View key={technology} style={styles.chip}>
                <Text style={styles.chipText}>{technology}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>COMPETENCIAS</Text>
          <Text style={styles.cardTitle}>Habilidades personales</Text>

          {skills.map((skill) => (
            <View key={skill} style={styles.skillRow}>
              <Text style={styles.skillBullet}>✓</Text>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>CONTACTO</Text>
          <Text style={styles.cardTitle}>Conectemos</Text>

          <Text style={styles.contactLabel}>Correo electrónico</Text>
          <Text style={styles.contactValue}>
            rinconatehortuajuanesteban@gmail.com
          </Text>

          <Text style={styles.contactLabel}>Teléfono</Text>
          <Text style={styles.contactValue}>322 725 4072</Text>

          <Pressable
            style={styles.primaryButton}
            onPress={() =>
              openLink('mailto:rinconatehortuajuanesteban@gmail.com')
            }
          >
            <Text style={styles.primaryButtonText}>Enviar correo</Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() =>
              openLink(
                'https://github.com/rinconatehortuajuanesteban-afk'
              )
            }
          >
            <Text style={styles.secondaryButtonText}>Visitar GitHub</Text>
          </Pressable>
        </View>

        <Text style={styles.footer}>
          © 2026 Juan Esteban Rincon Atehortua
        </Text>
        <Text style={styles.footerSub}>
          Desarrollado con React Native y Expo
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  container: {
    paddingBottom: 35,
  },
  header: {
    backgroundColor: '#0F172A',
    alignItems: 'center',
    paddingTop: 45,
    paddingBottom: 35,
    paddingHorizontal: 22,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerLabel: {
    color: '#93C5FD',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 22,
  },
  photo: {
    width: 145,
    height: 145,
    borderRadius: 73,
    borderWidth: 4,
    borderColor: '#60A5FA',
    marginBottom: 18,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: 'bold',
  },
  lastName: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 2,
  },
  profession: {
    color: '#CBD5E1',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 13,
    lineHeight: 21,
  },
  tag: {
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 17,
  },
  tagText: {
    color: '#DBEAFE',
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 22,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 17,
    elevation: 2,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  sectionLabel: {
    color: '#2563EB',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 7,
  },
  cardTitle: {
    color: '#0F172A',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 13,
  },
  description: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 23,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#EFF6FF',
    borderColor: '#BFDBFE',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  chipText: {
    color: '#1D4ED8',
    fontSize: 12,
    fontWeight: '600',
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
  },
  skillBullet: {
    color: '#2563EB',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 10,
  },
  skillText: {
    color: '#475569',
    fontSize: 14,
  },
  contactLabel: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 9,
  },
  contactValue: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 11,
    alignItems: 'center',
    marginTop: 20,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  secondaryButton: {
    backgroundColor: '#EFF6FF',
    padding: 14,
    borderRadius: 11,
    alignItems: 'center',
    marginTop: 10,
  },
  secondaryButtonText: {
    color: '#1D4ED8',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    color: '#64748B',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 8,
  },
  footerSub: {
    color: '#94A3B8',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 5,
  },
});
