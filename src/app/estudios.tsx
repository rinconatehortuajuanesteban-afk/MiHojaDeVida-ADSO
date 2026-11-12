
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const competencies = [
  'Análisis de requerimientos de software',
  'Diseño y desarrollo de aplicaciones',
  'Programación y lógica computacional',
  'Bases de datos y consultas SQL',
  'Desarrollo de interfaces web y móviles',
  'Control de versiones con Git',
  'Pruebas y aseguramiento de calidad',
];

export default function EstudiosScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.headerLabel}>MI FORMACIÓN</Text>
        <Text style={styles.headerTitle}>Estudios</Text>
        <Text style={styles.headerDescription}>
          Mi preparación académica y crecimiento profesional.
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.topRow}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>🎓</Text>
            </View>

            <View style={styles.status}>
              <Text style={styles.statusText}>EN FORMACIÓN</Text>
            </View>
          </View>

          <Text style={styles.institution}>SENA</Text>

          <Text style={styles.program}>
            Tecnólogo en Análisis y Desarrollo de Software
          </Text>

          <View style={styles.divider} />

          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Ficha</Text>
            <Text style={styles.dataValue}>3407187</Text>
          </View>

          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Año de inicio</Text>
            <Text style={styles.dataValue}>2026</Text>
          </View>

          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Estado</Text>
            <Text style={styles.dataValue}>En curso</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>APRENDIZAJE</Text>
          <Text style={styles.sectionTitle}>
            Competencias en desarrollo
          </Text>

          {competencies.map((competency, index) => (
            <View key={competency} style={styles.competencyRow}>
              <View style={styles.numberCircle}>
                <Text style={styles.number}>
                  {String(index + 1).padStart(2, '0')}
                </Text>
              </View>

              <Text style={styles.competencyText}>
                {competency}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>Mi objetivo</Text>
          <Text style={styles.noteText}>
            Fortalecer mis conocimientos en desarrollo de software,
            construir proyectos funcionales y prepararme para
            enfrentar retos reales en el sector tecnológico.
          </Text>
        </View>

        <Text style={styles.footer}>
          Formación académica · SENA · 2026
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
    marginTop: 9,
    lineHeight: 21,
  },
  content: {
    padding: 18,
    paddingTop: 22,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 18,
    marginBottom: 17,
    elevation: 2,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 25,
  },
  status: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 20,
  },
  statusText: {
    color: '#15803D',
    fontSize: 10,
    fontWeight: 'bold',
  },
  institution: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  program: {
    color: '#0F172A',
    fontSize: 21,
    fontWeight: 'bold',
    lineHeight: 29,
    marginTop: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 18,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  dataLabel: {
    color: '#64748B',
    fontSize: 13,
  },
  dataValue: {
    color: '#0F172A',
    fontSize: 13,
    fontWeight: 'bold',
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
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  competencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  numberCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  number: {
    color: '#2563EB',
    fontSize: 11,
    fontWeight: 'bold',
  },
  competencyText: {
    flex: 1,
    color: '#475569',
    fontSize: 13,
    lineHeight: 20,
  },
  noteCard: {
    backgroundColor: '#DBEAFE',
    padding: 20,
    borderRadius: 18,
    marginBottom: 17,
  },
  noteTitle: {
    color: '#1E40AF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 9,
  },
  noteText: {
    color: '#1E3A8A',
    fontSize: 13,
    lineHeight: 22,
  },
  footer: {
    color: '#94A3B8',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 8,
  },
});
