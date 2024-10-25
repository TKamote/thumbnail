import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import InspectionItem from "../../components/InspectionItem";
import ExportButton from "../../components/ExportButton";
import { InspectionItem as IInspectionItem } from '../../types';

const { width } = Dimensions.get('window');
const columnWidth = (width - 30) / 2;

export default function InspectionList() {
  const params = useLocalSearchParams();
  const [inspections, setInspections] = useState<IInspectionItem[]>([]);


  const placeholderInspections: IInspectionItem[] = [  // Use the imported type
    {
      id: 'placeholder1',
      property: 'No Property',
      location: 'No Location',
      observation: 'No Observation',
      imageUri: '',
      timestamp: Date.now()
    },
    // ... other placeholders
  ];

  useEffect(() => {
    loadInspections();
  }, []);

  useEffect(() => {
    if (params.property && params.location && params.observation && params.imageUri) {
      addNewInspection();
    }
  }, [params.property, params.location, params.observation, params.imageUri]);

  const loadInspections = async () => {
    try {
      const savedInspections = await AsyncStorage.getItem('inspections');
      if (savedInspections) {
        setInspections(JSON.parse(savedInspections));
      }
    } catch (error) {
      console.error('Error loading inspections:', error);
    }
  };

  const addNewInspection = async () => {
    const newInspection: IInspectionItem = {  // Use the imported type
      id: Date.now().toString(),
      property: params.property as string,
      location: params.location as string,
      observation: params.observation as string,
      imageUri: params.imageUri as string,
      timestamp: Date.now()
    };

    try {
      const updatedInspections = [...inspections, newInspection];
      setInspections(updatedInspections);
      await AsyncStorage.setItem('inspections', JSON.stringify(updatedInspections));
    } catch (error) {
      console.error('Error saving inspection:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const updatedInspections = inspections.filter(item => item.id !== id);
      setInspections(updatedInspections);
      await AsyncStorage.setItem('inspections', JSON.stringify(updatedInspections));
    } catch (error) {
      console.error('Error deleting inspection:', error);
    }
  };

  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Inspection List</Text>
        <ExportButton inspections={inspections} />
      </View>
      
      <View style={styles.grid}>
        {inspections.length > 0
          ? inspections.map(item => (
              <InspectionItem
                key={item.id}
                {...item}
                onDelete={handleDelete}
                columnWidth={columnWidth}
              />
            ))
          : placeholderInspections.map(item => (
              <InspectionItem
                key={item.id}
                {...item}
                onDelete={handleDelete}
                columnWidth={columnWidth}
              />
            ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
});