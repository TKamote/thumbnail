import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { InspectionItem } from '../types';
import { generateInspectionHTML } from '../utils/htmlGenerator';

interface ExportButtonProps {
  inspections: InspectionItem[];
}

export default function ExportButton({ inspections }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    try {
      if (inspections.length === 0) {
        Alert.alert('Error', 'No inspections to export');
        return;
      }

      setIsExporting(true);

      // Generate HTML content with embedded images
      const htmlContent = await generateInspectionHTML(inspections);

      // Generate a unique filename
      const fileName = `inspections_${Date.now()}.html`;
      const filePath = `${FileSystem.documentDirectory}${fileName}`;

      // Write the file
      await FileSystem.writeAsStringAsync(filePath, htmlContent, {
        encoding: FileSystem.EncodingType.UTF8
      });

      // Share the file
      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        await Sharing.shareAsync(filePath);
      } else {
        Alert.alert('Error', 'Sharing is not available on this device');
      }
    } catch (error) {
      console.error('Error exporting to HTML:', error);
      Alert.alert('Error', 'Failed to export inspections');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.exportButton, isExporting && styles.exportButtonDisabled]}
      onPress={handleExport}
      disabled={isExporting}
    >
      {isExporting ? (
        <ActivityIndicator color="#FFFFFF" size="small" />
      ) : (
        <>
          <FontAwesome name="download" size={20} color="#FFFFFF" />
          <Text style={styles.exportButtonText}>Export</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  exportButtonDisabled: {
    opacity: 0.7,
  },
  exportButtonText: {
    color: '#FFFFFF',
    marginLeft: 8,
    fontSize: 16,
  },
});