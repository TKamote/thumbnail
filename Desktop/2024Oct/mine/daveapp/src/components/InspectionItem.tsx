// components/InspectionItem.tsx
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { InspectionItemProps } from "../types";

export default function InspectionItem({
  id,
  property,
  location,
  observation,
  imageUri,
  onDelete,
  columnWidth,
}: InspectionItemProps) {
  const handleDelete = () => {
    Alert.alert(
      "Delete Inspection",
      "Are you sure you want to delete this inspection?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => onDelete(id)
        }
      ]
    );
  };

  return (
    <View style={[styles.gridItem, { width: columnWidth }]}>
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={handleDelete}
      >
        <FontAwesome name="trash" size={20} color="red" />
      </TouchableOpacity>
      
      <View style={styles.itemContent}>
        <View style={styles.itemDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Property:</Text>
            <Text style={styles.value} numberOfLines={1}>{property}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.value} numberOfLines={1}>{location}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Observation:</Text>
            <Text style={styles.value} numberOfLines={2}>{observation}</Text>
          </View>
        </View>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.itemImage} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>No Image</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    marginBottom: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 15,
  },
  itemContent: {
    width: '100%',
  },
  itemDetails: {
    padding: 10,
  },
  detailRow: {
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 2,
  },
  value: {
    fontSize: 14,
    color: "#FFFFFF",
    flexWrap: 'wrap',
  },
  itemImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  placeholderImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
    fontSize: 14,
  },
});