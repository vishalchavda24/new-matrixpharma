import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Store CSV in the public directory for direct access
const CSV_FILE_PATH = path.join(process.cwd(), 'public', 'data', 'supplier_submissions.csv');

// Ensure the data directory exists
const ensureDirectoryExists = () => {
  const dir = path.join(process.cwd(), 'public', 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Ensure the CSV file exists with headers
const initializeCSV = () => {
  ensureDirectoryExists();
  if (!fs.existsSync(CSV_FILE_PATH)) {
    const headers = 'Timestamp,Representative Name,Company Name,Designation,Contact Number,Email\n';
    fs.writeFileSync(CSV_FILE_PATH, headers);
  }
};

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Initialize CSV if it doesn't exist
    initializeCSV();
    
    // Format the data for CSV
    const timestamp = new Date().toISOString();
    const csvRow = `"${timestamp}","${data.representativeName}","${data.companyName}","${data.designation}","${data.contactNumber}","${data.email}"\n`;
    
    // Append to CSV file
    fs.appendFileSync(CSV_FILE_PATH, csvRow);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Initialize CSV if it doesn't exist
    initializeCSV();
    
    // Read the CSV file
    const csvData = fs.readFileSync(CSV_FILE_PATH, 'utf-8');
    
    return new NextResponse(csvData, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="supplier_submissions.csv"'
      }
    });
  } catch (error) {
    console.error('Error reading CSV:', error);
    return NextResponse.json({ error: 'Failed to read CSV file' }, { status: 500 });
  }
} 