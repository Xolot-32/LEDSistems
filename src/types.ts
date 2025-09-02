// FIX: Import `ReactNode` to resolve the "Cannot find namespace 'React'" error.
import type { ReactNode } from 'react';

export interface Section {
  id: string;
  title: string;
  icon: string;
  badge?: string;
  content: ReactNode;
}

export interface MaintenanceReport {
  id: string;
  date: string;
  technician: string;
  activity: string;
  observations: string;
  evaluation: number; // 0 to 5 stars
  system: string;
}