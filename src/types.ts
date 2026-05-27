/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Protocol {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  clinicalRigor: string;
  duration: string;
  benefits: string[];
  imageUrl: string;
  accentColor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  protocolId: string;
  duration: string;
  recoveryMetric: string;
  radianceScore: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
}

export interface Booking {
  id: string;
  protocolId: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientEmail: string;
  notes?: string;
  createdAt: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}
