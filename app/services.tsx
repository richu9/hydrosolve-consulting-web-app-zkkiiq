
import React from "react";
import { 
  ScrollView, 
  View, 
  Text, 
  StyleSheet,
  Pressable 
} from "react-native";
import { Stack, router } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { Button } from "@/components/button";

export default function ServicesScreen() {
  console.log("ServicesScreen rendered");

  const navigateToContact = () => {
    console.log("Navigating to contact from services");
    router.push("/contact");
  };

  const services = [
    {
      id: 1,
      title: "Hydrological Assessment Reports",
      description: "Comprehensive analysis of water resources, flow patterns, and hydrological conditions for your project site.",
      icon: "chart.bar.fill",
      color: "#2563eb",
      details: [
        "Surface water assessment",
        "Groundwater evaluation", 
        "Flood risk analysis",
        "Water availability studies"
      ]
    },
    {
      id: 2,
      title: "Hydrological Survey Reports",
      description: "Detailed field surveys and data collection to support water resource planning and management.",
      icon: "location.magnifyingglass",
      color: "#059669",
      details: [
        "Field data collection",
        "Stream flow measurements",
        "Water quality assessment",
        "Meteorological data analysis"
      ]
    },
    {
      id: 3,
      title: "Dam Designs and Reports",
      description: "Professional dam design services with comprehensive engineering reports and safety assessments.",
      icon: "building.2.fill",
      color: "#dc2626",
      details: [
        "Dam feasibility studies",
        "Structural design",
        "Safety assessments",
        "Environmental impact analysis"
      ]
    },
    {
      id: 4,
      title: "Topographical Surveys",
      description: "Accurate land surveying and mapping services for hydrological and engineering projects.",
      icon: "map.fill",
      color: "#7c3aed",
      details: [
        "Land surveying",
        "Contour mapping",
        "Digital elevation models",
        "GIS mapping services"
      ]
    },
    {
      id: 5,
      title: "Water Permits & Authorizations",
      description: "Expert assistance with water permit applications and regulatory compliance.",
      icon: "checkmark.seal.fill",
      color: "#ea580c",
      details: [
        "Water abstraction permits",
        "Water allocation applications",
        "Threshold apportionment",
        "WRA compliance support"
      ]
    },
    {
      id: 6,
      title: "Catchment Hydrological Factsheets",
      description: "Detailed catchment analysis and reporting for water resource management.",
      icon: "doc.text.fill",
      color: "#0891b2",
      details: [
        "Catchment characterization",
        "Water balance studies",
        "Resource availability assessment",
        "Management recommendations"
      ]
    }
  ];

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Our Services",
          headerStyle: { backgroundColor: "#2563eb" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontFamily: "Montserrat_600SemiBold" },
        }}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>Professional Hydrological Services</Text>
          <Text style={styles.headerSubtitle}>
            Comprehensive water resource solutions in compliance with Water Act 2016 
            and Water Resources Authority regulations
          </Text>
        </View>

        {/* Services List */}
        <View style={styles.servicesContainer}>
          {services.map((service) => (
            <View key={service.id} style={styles.serviceCard}>
              <View style={styles.serviceHeader}>
                <View style={[styles.serviceIcon, { backgroundColor: service.color }]}>
                  <IconSymbol name={service.icon as any} color="#ffffff" size={24} />
                </View>
                <View style={styles.serviceTitleContainer}>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                </View>
              </View>
              
              <Text style={styles.serviceDescription}>{service.description}</Text>
              
              <View style={styles.serviceDetails}>
                <Text style={styles.detailsTitle}>Key Features:</Text>
                {service.details.map((detail, index) => (
                  <View key={index} style={styles.detailItem}>
                    <View style={styles.bulletPoint} />
                    <Text style={styles.detailText}>{detail}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Regulatory Compliance Section */}
        <View style={styles.complianceSection}>
          <Text style={styles.complianceTitle}>Regulatory Compliance</Text>
          <Text style={styles.complianceDescription}>
            All our services are delivered in strict accordance with:
          </Text>
          
          <View style={styles.regulationsList}>
            <View style={styles.regulationItem}>
              <IconSymbol name="checkmark.circle.fill" color="#059669" size={20} />
              <Text style={styles.regulationText}>Water Act, 2016 & Cap. 372</Text>
            </View>
            <View style={styles.regulationItem}>
              <IconSymbol name="checkmark.circle.fill" color="#059669" size={20} />
              <Text style={styles.regulationText}>Water (Resources) Regulations, 2025</Text>
            </View>
            <View style={styles.regulationItem}>
              <IconSymbol name="checkmark.circle.fill" color="#059669" size={20} />
              <Text style={styles.regulationText}>Water Resources Authority (WRA) Standards</Text>
            </View>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Need Professional Hydrological Services?</Text>
          <Text style={styles.ctaSubtitle}>
            Contact our expert team to discuss your project requirements
          </Text>
          <Button 
            onPress={navigateToContact}
            style={styles.ctaButton}
            textStyle={styles.ctaButtonText}
          >
            Get a Consultation
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
  headerSection: {
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Montserrat_700Bold',
    color: '#1f2937',
    marginBottom: 15,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  servicesContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  serviceTitleContainer: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#1f2937',
    lineHeight: 24,
  },
  serviceDescription: {
    fontSize: 15,
    fontFamily: 'OpenSans_400Regular',
    color: '#374151',
    lineHeight: 22,
    marginBottom: 20,
  },
  serviceDetails: {
    backgroundColor: '#f8fafc',
    padding: 15,
    borderRadius: 10,
  },
  detailsTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#1f2937',
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2563eb',
    marginRight: 10,
  },
  detailText: {
    fontSize: 14,
    fontFamily: 'OpenSans_400Regular',
    color: '#374151',
    flex: 1,
  },
  complianceSection: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  complianceTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
    color: '#1f2937',
    marginBottom: 15,
    textAlign: 'center',
  },
  complianceDescription: {
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },
  regulationsList: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
  },
  regulationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  regulationText: {
    fontSize: 15,
    fontFamily: 'OpenSans_400Regular',
    color: '#374151',
    marginLeft: 12,
    flex: 1,
  },
  ctaSection: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 22,
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
