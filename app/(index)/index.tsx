
import React from "react";
import { 
  ScrollView, 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Pressable,
  Dimensions 
} from "react-native";
import { Stack, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { IconSymbol } from "@/components/IconSymbol";
import { Button } from "@/components/button";

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  console.log("HomeScreen rendered");

  const navigateToServices = () => {
    console.log("Navigating to services");
    router.push("/services");
  };

  const navigateToContact = () => {
    console.log("Navigating to contact");
    router.push("/contact");
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <LinearGradient
          colors={['#2563eb', '#1d4ed8', '#1e40af']}
          style={styles.heroSection}
        >
          <View style={styles.heroContent}>
            {/* Logo */}
            <View style={styles.logoContainer}>
              <View style={styles.logoCircle}>
                <IconSymbol name="drop.fill" color="#ffffff" size={40} />
              </View>
              <Text style={styles.companyName}>HydroSolve Consulting</Text>
            </View>
            
            <Text style={styles.heroTitle}>
              Professional Hydrological Consulting Services
            </Text>
            <Text style={styles.heroSubtitle}>
              Expert technical assessments, water permits, and comprehensive hydrological solutions for your projects
            </Text>
            
            <View style={styles.heroButtons}>
              <Button 
                onPress={navigateToServices}
                style={styles.primaryButton}
                textStyle={styles.primaryButtonText}
              >
                Our Services
              </Button>
              <Button 
                onPress={navigateToContact}
                variant="outline"
                style={styles.secondaryButton}
                textStyle={styles.secondaryButtonText}
              >
                Contact Us
              </Button>
            </View>
          </View>
        </LinearGradient>

        {/* Hero Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop' }}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* Services Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Expertise</Text>
          <View style={styles.servicesGrid}>
            <View style={styles.serviceCard}>
              <View style={styles.serviceIcon}>
                <IconSymbol name="doc.text.fill" color="#2563eb" size={24} />
              </View>
              <Text style={styles.serviceTitle}>Technical Reports</Text>
              <Text style={styles.serviceDescription}>
                Hydrological assessments, surveys, and dam design reports
              </Text>
            </View>
            
            <View style={styles.serviceCard}>
              <View style={styles.serviceIcon}>
                <IconSymbol name="checkmark.seal.fill" color="#059669" size={24} />
              </View>
              <Text style={styles.serviceTitle}>Water Permits</Text>
              <Text style={styles.serviceDescription}>
                Applications and authorizations for water abstractions and allocations
              </Text>
            </View>
            
            <View style={styles.serviceCard}>
              <View style={styles.serviceIcon}>
                <IconSymbol name="map.fill" color="#dc2626" size={24} />
              </View>
              <Text style={styles.serviceTitle}>Catchment Analysis</Text>
              <Text style={styles.serviceDescription}>
                Hydrological factsheets and comprehensive catchment reports
              </Text>
            </View>
            
            <View style={styles.serviceCard}>
              <View style={styles.serviceIcon}>
                <IconSymbol name="location.fill" color="#7c3aed" size={24} />
              </View>
              <Text style={styles.serviceTitle}>Topographical Surveys</Text>
              <Text style={styles.serviceDescription}>
                Precise land surveying and topographical mapping services
              </Text>
            </View>
          </View>
        </View>

        {/* Testimonial Section */}
        <View style={styles.testimonialSection}>
          <Text style={styles.sectionTitle}>Client Testimonial</Text>
          <View style={styles.testimonialCard}>
            <View style={styles.quoteIcon}>
              <Text style={styles.quoteText}>"</Text>
            </View>
            <Text style={styles.testimonialText}>
              HydroSolve Consulting has provided exceptional hydrological services to our association. 
              Their expertise in water resource management and compliance with Water Act 2016 has been invaluable 
              to our operations at Lake Naivasha Basin.
            </Text>
            <View style={styles.testimonialAuthor}>
              <Text style={styles.authorName}>Mr. Daniel Nyoro</Text>
              <Text style={styles.authorTitle}>
                Chairman, Lake Naivasha Basin Umbrella Water Resources User Association (LANABWRUA)
              </Text>
            </View>
          </View>
        </View>

        {/* Company Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About HydroSolve Consulting</Text>
          <Text style={styles.aboutText}>
            Led by our team lead hydrologist, HydroSolve Consulting specializes in comprehensive 
            hydrological solutions. We ensure full compliance with the Water Act 2016 and Water 
            Resources Authority (WRA) regulations, providing expert consultancy for all your 
            water resource needs.
          </Text>
          
          <View style={styles.complianceInfo}>
            <Text style={styles.complianceTitle}>Regulatory Compliance</Text>
            <Text style={styles.complianceText}>
              • Water Act, 2016 & Cap. 372{'\n'}
              • Water (Resources) Regulations, 2025{'\n'}
              • Water Resources Authority (WRA) Standards
            </Text>
          </View>
        </View>

        {/* Contact CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Start Your Project?</Text>
          <Text style={styles.ctaSubtitle}>
            Get in touch with our expert team for professional hydrological consulting services
          </Text>
          <Button 
            onPress={navigateToContact}
            style={styles.ctaButton}
            textStyle={styles.ctaButtonText}
          >
            Contact Our Team
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heroSection: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  companyName: {
    fontSize: 28,
    fontFamily: 'Montserrat_700Bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 32,
  },
  heroSubtitle: {
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 15,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  primaryButtonText: {
    color: '#2563eb',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  secondaryButton: {
    borderColor: '#ffffff',
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: 'transparent',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  imageContainer: {
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Montserrat_700Bold',
    color: '#1f2937',
    marginBottom: 20,
    textAlign: 'center',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  serviceCard: {
    width: (width - 55) / 2,
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  serviceIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  serviceTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 14,
    fontFamily: 'OpenSans_400Regular',
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  testimonialSection: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  testimonialCard: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  quoteIcon: {
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  quoteText: {
    fontSize: 48,
    color: '#2563eb',
    fontFamily: 'Montserrat_700Bold',
    lineHeight: 48,
  },
  testimonialText: {
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
    color: '#374151',
    lineHeight: 24,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 15,
  },
  authorName: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#1f2937',
    marginBottom: 5,
  },
  authorTitle: {
    fontSize: 14,
    fontFamily: 'OpenSans_400Regular',
    color: '#6b7280',
    lineHeight: 20,
  },
  aboutText: {
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
    color: '#374151',
    lineHeight: 24,
    marginBottom: 25,
  },
  complianceInfo: {
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2563eb',
  },
  complianceTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#1f2937',
    marginBottom: 10,
  },
  complianceText: {
    fontSize: 14,
    fontFamily: 'OpenSans_400Regular',
    color: '#374151',
    lineHeight: 22,
  },
  ctaSection: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontFamily: 'Montserrat_700Bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
  },
  ctaSubtitle: {
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },
  ctaButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: '#2563eb',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
});
