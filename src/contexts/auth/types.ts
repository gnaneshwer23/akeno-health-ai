
import { User, Session } from '@supabase/supabase-js';

export type UserRole = 'patient' | 'doctor' | 'researcher' | 'hospital' | null;

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileImage?: string;
}

export interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;  // Added this property
  isLoading: boolean;        // Added this property
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string, role: UserRole, name: string) => Promise<void>;
  logout: () => Promise<void>;
}
