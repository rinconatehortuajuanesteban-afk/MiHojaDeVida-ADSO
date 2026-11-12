
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const interests = [
  {
    icon: '💻',
    title: 'Programación',
    description:
      'Crear proyectos, escribir código y desarrollar soluciones tecnológicas.',
    category: 'TECNOLOGÍA',
  },
  {
    icon: '🚀',
    title: 'Nuevas tecnologías',
    description:
      'Explorar herramientas, lenguajes y tendencias del desarrollo de software.',
    category: 'APRENDIZAJE',
  },
  {
    icon: '📚',
    title: 'Lectura',
    description:
      'Adquirir conocimientos y fortalecer el aprendizaje personal.',
    category: 'APRENDIZAJE',
  },
  {
    icon: '🏋️',
    title: 'Ejercicio y deportes',
    description:
      'Mantener la disciplina, la actividad física y el bienestar.',
    category: 'ACTIVIDAD FÍSICA',
  },
  {
    icon: '🎵',
    title: 'Música',
    description:
      'Disfrutar diferentes géneros musicales en el tiempo libre.',
    category: 'ENTRETENIMIENTO',
  },
  {
    icon: '🎮',
    title: 'Videojuegos',
    description:
      'Disfrutar los videojuegos como actividad de entretenimiento.',
    category: 'ENTRETENIMIENTO',
  },
  {
    icon: '🛠️',
    title: 'Proyectos personales',
    description:
      'Experimentar, construir ideas y poner en práctica nuevos conocimientos.',
    category: 'CREATIVIDAD',
  },
];

export default function HobbiesScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.headerLabel}>MÁS SOBRE MÍ</Text>
        <Text style={styles.headerTitle}>Mis intereses</Text>
        <Text style={styles.headerDescription}>
          Actividades y pasiones que hacen parte de mi
          crecimiento personal y profesional.
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.introCard}>
          <Text style={styles.introTitle}>
            Aprender, crear y mejorar
          </Text>
          <Text style={styles.introText}>
            Considero que el crecimiento personal también
            se construye fuera del entorno académico. Mis
            intereses me permiten desarrollar disciplina,
            creatividad y curiosidad.
          </Text>
        </View>

        <Text style={styles.sectionLabel}>TIEMPO LIBRE</Text>
        <Text style={styles.sectionTitle}>
          Lo que me gusta hacer
        </Text>

        {interests.map((interest) => (
          <View key={interest.title} style={styles.interestCard}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{interest.icon}</Text>
            </View>

            <View style={styles.interestContent}>
              <Text style={styles.category}>
                {interest.category}
              </Text>
              <Text style={styles.interestTitle}>
                {interest.title}
              </Text>
              <Text style={styles.description}>
                {interest.description}
              </Text>
            </View>
          </View>
        ))}

        <View style={styles.quoteCard}>
          <Text style={styles.quote}>
            "La disciplina convierte los objetivos en resultados."
          </Text>
          <Text style={styles.quoteFooter}>
            MI FILOSOFÍA DE CRECIMIENTO
          </Text>
        </View>

        <Text style={styles.footer}>
          Juan Esteban Rincon Atehortua · 2026
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
    paddingHorizontal: 22,
    paddingTop: 42,
    paddingBottom: 32,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerLabel: {
    color: '#93C5FD',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerDescription: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 9,
  },
  content: {
    padding: 18,
    paddingTop: 22,
  },
  introCard: {
    backgroundColor: '#DBEAFE',
    padding: 20,
    borderRadius: 18,
    marginBottom: 25,
  },
  introTitle: {
    color: '#1E40AF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 9,
  },
  introText: {
    color: '#1E3A8A',
    fontSize: 13,
    lineHeight: 22,
  },
  sectionLabel: {
    color: '#2563EB',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 7,
  },
  sectionTitle: {
    color: '#0F172A',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  interestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 17,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 7,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 15,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  icon: {
    fontSize: 25,
  },
  interestContent: {
    flex: 1,
  },
  category: {
    color: '#2563EB',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 5,
  },
  interestTitle: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: '#64748B',
    fontSize: 12,
    lineHeight: 19,
  },
  quoteCard: {
    backgroundColor: '#0F172A',
    borderRadius: 18,
    padding: 23,
    marginTop: 10,
    marginBottom: 17,
  },
  quote: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 26,
    textAlign: 'center',
  },
  quoteFooter: {
    color: '#93C5FD',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textAlign: 'center',
    marginTop: 15,
  },
  footer: {
    color: '#94A3B8',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 8,
  },
});
