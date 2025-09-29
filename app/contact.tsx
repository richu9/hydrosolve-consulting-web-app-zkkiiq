
import React, { useState } from "react";
import { 
  ScrollView, 
  View, 
  Text, 
  StyleSheet,
  TextInput,
  Alert,
  Linking,
  Pressable
} from "react-native";
import { Stack } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { Button } from "@/components/button";

export default function ContactScreen() {
  console.log("ContactScreen rendered");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    console.log(`Updating ${field}:`, value);
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert("Missing Information", "Please fill in all required fields.");
      return;
    }

    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const emailUrl = `mailto:maryndushh@gmail.com?subject=${encodeURIComponent(formData.subject || 'Inquiry from HydroSolve Website')}&body=${encodeURIComponent(emailBody)}`;
    
    Linking.openURL(emailUrl).catch(() => {
      Alert.alert("Error", "Unable to open email client. Please contact us directly at maryndushh@gmail.com");
    });
  };

  const handleCall = () => {
    console.log("Calling company phone");
    Linking.openURL('tel:0704012247');
  };

  const handleEmail = () => {
    console.log("Opening email client");
    Linking.openURL('mailto:maryndushh@gmail.com');
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Contact Us",
          headerStyle: { backgroundColor: "#2563eb" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontFamily: "Montserrat_600SemiBold" },
        }}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>Get In Touch</Text>
          <Text style={styles.headerSubtitle}>
            Ready to discuss your hydrological project? Contact our expert team today.
          </Text>
        </View>

        {/* Contact Information */}
        <View style={styles.contactInfoSection}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          
          <Pressable style={styles.contactItem} onPress={handleEmail}>
            <View style={styles.contactIcon}>
              <IconSymbol name="envelope.fill" color="#2563eb" size={20} />
            </View>
            <View style={styles.contactDetails}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>maryndushh@gmail.com</Text>
            </View>
          </Pressable>

          <Pressable style={styles.contactItem} onPress={handleCall}>
            <View style={styles.contactIcon}>
              <IconSymbol name="phone.fill" color="#059669" size={20} />
            </View>
            <View style={styles.contactDetails}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactValue}>0704012247</Text>
            </View>
          </Pressable>

          <View style={styles.contactItem}>
            <View style={styles.contactIcon}>
              <IconSymbol name="location.fill" color="#dc2626" size={20} />
            </View>
            <View style={styles.contactDetails}>
              <Text style={styles.contactLabel}>Address</Text>
              <Text style={styles.contactValue}>
                P.O. Box 45250-00100{'\n'}
                Kawangware, Nairobi, Kenya
              </Text>
            </View>
          </View>
        </View>

        {/* Contact Form */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Send Us a Message</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name *</Text>
            <TextInput
              style={styles.textInput}
              value={formData.name}
              onChangeText={(value) => handleInputChange('name', value)}
              placeholder="Enter your full name"
              placeholderTextColor="#9ca3af"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address *</Text>
            <TextInput
              style={styles.textInput}
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              placeholder="Enter your email address"
              placeholderTextColor="#9ca3af"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              value={formData.phone}
              onChangeText={(value) => handleInputChange('phone', value)}
              placeholder="Enter your phone number"
              placeholderTextColor="#9ca3af"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Subject</Text>
            <TextInput
              style={styles.textInput}
              value={formData.subject}
              onChangeText={(value) => handleInputChange('subject', value)}
              placeholder="Enter message subject"
              placeholderTextColor="#9ca3af"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Message *</Text>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              value={formData.message}
              onChangeText={(value) => handleInputChange('message', value)}
              placeholder="Describe your project requirements or inquiry..."
              placeholderTextColor="#9ca3af"
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
          </View>

          <Button 
            onPress={handleSubmit}
            style={styles.submitButton}
            textStyle={styles.submitButtonText}
          >
            Send Message
          </Button>
        </View>

        {/* Team Lead Information */}
        <View style={styles.teamSection}>
          <Text style={styles.sectionTitle}>Our Team Lead</Text>
          <View style={styles.teamCard}>
            <View style={styles.teamIcon}>
              <IconSymbol name="person.fill" color="#ffffff" size={30} />
            </View>
            <View style={styles.teamInfo}>
              <Text style={styles.teamTitle}>Team Lead Hydrologist</Text>
              <Text style={styles.teamDescription}>
                Our experienced team lead hydrologist brings extensive expertise in water resource 
                management, regulatory compliance, and technical assessments to every project.
              </Text>
              <Text style={styles.teamContact}>
                Direct Contact: maryndushh@gmail.com
              </Text>
            </View>
          </View>
        </View>

        {/* Business Hours */}
        <View style={styles.hoursSection}>
          <Text style={styles.sectionTitle}>Business Hours</Text>
          <View style={styles.hoursCard}>
            <View style={styles.hoursItem}>
              <Text style={styles.hoursDay}>Monday - Friday</Text>
              <Text style={styles.hoursTime}>8:00 AM - 6:00 PM</Text>
            </View>
            <View style={styles.hoursItem}>
              <Text style={styles.hoursDay}>Saturday</Text>
              <Text style={styles.hoursTime}>9:00 AM - 2:00 PM</Text>
            </View>
            <View style={styles.hoursItem}>
              <Text style={styles.hoursDay}>Sunday</Text>
              <Text style={styles.hoursTime}>Closed</Text>
            </View>
          </View>
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
  contactInfoSection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
    color: '#1f2937',
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f8fafc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contactDetails: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#374151',
    marginBottom: 5,
  },
  contactValue: {
    fontSize: 15,
    fontFamily: 'OpenSans_400Regular',
    color: '#1f2937',
    lineHeight: 22,
  },
  formSection: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#374151',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
    color: '#1f2937',
  },
  textArea: {
    height: 120,
    paddingTop: 12,
  },
  submitButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  submitButtonText: {
    color: '#ffffff',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
  teamSection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  teamCard: {
    backgroundColor: '#2563eb',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  teamInfo: {
    flex: 1,
  },
  teamTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#ffffff',
    marginBottom: 8,
  },
  teamDescription: {
    fontSize: 14,
    fontFamily: 'OpenSans_400Regular',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
    marginBottom: 10,
  },
  teamContact: {
    fontSize: 13,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#ffffff',
  },
  hoursSection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f8fafc',
  },
  hoursCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
  },
  hoursItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  hoursDay: {
    fontSize: 15,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#374151',
  },
  hoursTime: {
    fontSize: 15,
    fontFamily: 'OpenSans_400Regular',
    color: '#6b7280',
  },
});
