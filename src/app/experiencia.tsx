
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const projectTechnologies = [
  'React Native',
  'Expo',
  'TypeScript',
  'Git',
  'GitHub',
];

const projectFeatures = [
  'Navegación entre diferentes secciones.',
  'Presentación de información personal y académica.',
  'Diseño adaptable para dispositivos móviles.',
  'Organización de componentes y pantallas.',
];

export default function ExperienciaScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.headerLabel}>MI TRABAJO</Text>
        <Text style={styles.headerTitle}>Experiencia</Text>
        <Text style={styles.headerDescription}>
          Proyectos académicos y personales que fortalecen
          mis habilidades como desarrollador.
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>
            Mi trayectoria profesional
          </Text>
          <Text style={styles.noticeText}>
            Actualmente no cuento con experiencia laboral formal.
            Estoy desarrollando mis habilidades mediante mi
            formación en el SENA y la creación de proyectos.
          </Text>
        </View>

        <Text style={styles.sectionLabel}>PORTAFOLIO</Text>
        <Text style={styles.sectionTitle}>Proyecto destacado</Text>

        <View style={styles.projectCard}>
          <View style={styles.projectTop}>
            <View style={styles.projectIcon}>
              <Text style={styles.projectEmoji}>📱</Text>
            </View>

            <View style={styles.projectStatus}>
              <Text style={styles.projectStatusText}>
                EN DESARROLLO
              </Text>
            </View>
          </View>

          <Text style={styles.projectTitle}>
            Mi Hoja de Vida
          </Text>

          <Text style={styles.projectSubtitle}>
            Aplicación móvil de presentación profesional
          </Text>

          <Text style={styles.projectDescription}>
            Aplicación móvil creada para presentar mi perfil
            profesional, formación académica, habilidades,
            intereses y proyectos. Este desarrollo forma parte
            de mi proceso de aprendizaje en Análisis y Desarrollo
            de Software.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.featureTitle}>
            Funcionalidades implementadas
          </Text>

          {projectFeatures.map((feature) => (
            <View key={feature} style={styles.featureRow}>
              <Text style={styles.check}>✓</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}

          <View style={styles.divider} />

          <Text style={styles.featureTitle}>
            Tecnologías utilizadas
          </Text>

          <View style={styles.chipContainer}>
            {projectTechnologies.map((technology) => (
              <View key={technology} style={styles.chip}>
                <Text style={styles.chipText}>{technology}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.projectType}>
            Tipo: Proyecto personal de aprendizaje
          </Text>
        </View>

        <View style={styles.goalCard}>
          <Text style={styles.goalTitle}>
            Próximos objetivos
          </Text>
          <Text style={styles.goalText}>
            Seguir construyendo aplicaciones, mejorar mis
            conocimientos de programación y desarrollar
            soluciones que respondan a necesidades reales.
          </Text>
        </View>

        <Text style={styles.footer}>
          Portafolio personal · 2026
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
  notice: {
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 4,
    borderLeftColor: '#2563EB',
    borderRadius: 12,
    padding: 17,
    marginBottom: 25,
  },
  noticeTitle: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noticeText: {
    color: '#475569',
    fontSize: 13,
    lineHeight: 21,
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
    marginBottom: 15,
  },
  projectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    elevation: 2,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  projectTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
  },
  projectIcon: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectEmoji: {
    fontSize: 25,
  },
  projectStatus: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
  },
  projectStatusText: {
    color: '#92400E',
    fontSize: 10,
    fontWeight: 'bold',
  },
  projectTitle: {
    color: '#0F172A',
    fontSize: 23,
    fontWeight: 'bold',
  },
  projectSubtitle: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 6,
    marginBottom: 13,
  },
  projectDescription: {
    color: '#475569',
    fontSize: 13,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 19,
  },
  featureTitle: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  check: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  featureText: {
    flex: 1,
    color: '#475569',
    fontSize: 13,
    lineHeight: 20,
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
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  chipText: {
    color: '#1D4ED8',
    fontSize: 11,
    fontWeight: '600',
  },
  projectType: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 18,
  },
  goalCard: {
    backgroundColor: '#DBEAFE',
    borderRadius: 18,
    padding: 20,
    marginBottom: 17,
  },
  goalTitle: {
    color: '#1E40AF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 9,
  },
  goalText: {
    color: '#1E3A8A',
    fontSize: 13,
    lineHeight: 22,
  },
  footer: {
    color: '#94A3B8',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 8,
  },
});
