// src/types/index.ts

// Inspection related types
export interface InspectionItem {
    id: string;
    property: string;
    location: string;
    observation: string;
    imageUri: string;
    timestamp: number;
  }
  
  export interface InspectionItemProps {
    id: string;
    property: string;
    location: string;
    observation: string;
    imageUri: string;
    onDelete: (id: string) => void;
    columnWidth: number;
  }
  
  // Component Props types
  export interface DeleteButtonProps {
    onDelete: () => void;
  }
  
  export interface ImagePreviewProps {
    uri: string | null;
    size?: {
      width: number;
      height: number;
    };
  }
  
  // Form related types
  export interface InspectionFormData {
    property: string;
    location: string;
    observation: string;
    imageUri: string | null;
  }
  
  export interface FormErrors {
    property?: string;
    location?: string;
    observation?: string;
    imageUri?: string;
  }
  
  // Response types
  export interface APIResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }
  
  // Storage types
  export interface StorageKeys {
    INSPECTIONS: 'inspections';
    USER_PREFERENCES: 'userPreferences';
    // Add more storage keys as needed
  }
  
  // Navigation params
  export interface InspectionScreenParams {
    property: string;
    location: string;
    observation: string;
    imageUri: string;
  }
  
  // Theme types
  export interface ThemeColors {
    primary: string;
    background: string;
    text: string;
    error: string;
    placeholder: string;
    border: string;
  }
  
  export interface Dimensions {
    columnWidth: number;
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
  
  // Common status types
  export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
  
  export interface Status {
    loading: boolean;
    error: string | null;
    success: boolean;
  }
  
  // Utility types
  export type Optional<T> = T | undefined | null;
  
  export type ValidationFunction = (value: string) => string | undefined;
  
  export interface ValidationRules {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: ValidationFunction;
  }