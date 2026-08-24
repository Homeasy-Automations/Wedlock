export type EnquiryStepId = 'occasion' | 'details' | 'contact' | 'success';

export interface EnquiryPayload {
  occasion: string;
  subService?: string;
  eventDate?: string;
  city: string;
  guests?: number;
  budget?: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  source?: 'plan' | 'contact';
}

export interface EnquiryResponse {
  ok: boolean;
  reference?: string;
  message?: string;
  errors?: Record<string, string>;
}
