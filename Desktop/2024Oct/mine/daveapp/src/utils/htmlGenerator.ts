import { InspectionItem } from '../types';
import * as FileSystem from 'expo-file-system';

async function getBase64Image(uri: string): Promise<string> {
  try {
    // Read the file content
    const fileContent = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    // Determine the mime type (you might want to make this more robust)
    const mimeType = uri.endsWith('.png') ? 'image/png' : 'image/jpeg';
    return `data:${mimeType};base64,${fileContent}`;
  } catch (error) {
    console.error('Error converting image to base64:', error);
    return ''; // Return empty string if failed
  }
}

export const generateInspectionHTML = async (inspections: InspectionItem[]) => {
  // Convert all images to base64
  const processedInspections = await Promise.all(
    inspections.map(async (item) => ({
      ...item,
      imageUri: await getBase64Image(item.imageUri)
    }))
  );

  const tableRows = processedInspections.map(item => `
    <tr>
      <td class="property-cell">${item.property}</td>
      <td class="location-cell">${item.location}</td>
      <td class="observation-cell">${item.observation}</td>
      <td class="photo-cell">
        ${item.imageUri ? `<img src="${item.imageUri}" alt="Inspection photo" />` : 'No image'}
      </td>
      <td class="timestamp-cell">${new Date(item.timestamp).toLocaleString()}</td>
    </tr>
  `).join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Inspection List Report</title>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            table-layout: fixed;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
            word-wrap: break-word;
          }
          th {
            background-color: #f8f9fa;
            font-weight: bold;
          }
          .property-cell { width: 15%; }
          .location-cell { width: 15%; }
          .observation-cell { width: 25%; }
          .photo-cell { 
            width: 25%;
            text-align: center;
          }
          .timestamp-cell { width: 20%; }
          .photo-cell img {
            max-width: 200px;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          h1 {
            color: #333;
            margin-bottom: 5px;
          }
          .timestamp {
            color: #666;
            font-size: 0.9em;
            margin-bottom: 20px;
          }
          tr:nth-child(even) {
            background-color: #f9f9f9;
          }
          @media print {
            .photo-cell img {
              max-width: 150px;
            }
          }
        </style>
      </head>
      <body>
        <h1>Inspection List Report</h1>
        <p class="timestamp">Generated on: ${new Date().toLocaleString()}</p>
        <table>
          <thead>
            <tr>
              <th class="property-cell">Property</th>
              <th class="location-cell">Location</th>
              <th class="observation-cell">Observation</th>
              <th class="photo-cell">Photo</th>
              <th class="timestamp-cell">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </body>
    </html>
  `;
};