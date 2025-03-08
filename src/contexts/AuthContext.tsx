
// This file re-exports from the new modular auth structure
// to maintain backward compatibility with existing imports
export { AuthProvider, AuthContext } from './auth/AuthContext';
export { useAuth } from './auth/useAuth';
export type { AuthUser, UserRole, AuthContextType } from './auth/types';
