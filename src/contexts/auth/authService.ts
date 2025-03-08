
import { supabase } from "@/integrations/supabase/client";
import { AuthUser, UserRole } from "./types";

export const authService = {
  /**
   * Fetch the user's profile data from Supabase
   */
  async fetchUserProfile(userId: string) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
      return null;
    }
  },

  /**
   * Login with email and password
   */
  async login(email: string, password: string) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) {
      console.error("Login error:", error);
      throw error;
    }
    
    return data;
  },

  /**
   * Sign up with email, password, and additional data
   */
  async signup(email: string, password: string, role: UserRole, name: string) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          role
        }
      }
    });
    
    if (error) {
      console.error("Signup error:", error);
      throw error;
    }
    
    return data;
  },

  /**
   * Logout the current user
   */
  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  /**
   * Get a default profile image URL for a user
   */
  getDefaultProfileImage(name: string) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'User')}&background=0D8ABC&color=fff`;
  },

  /**
   * Map Supabase user and profile data to AuthUser
   */
  mapToAuthUser(userId: string, email: string, profile: any): AuthUser {
    return {
      id: userId,
      email: email || '',
      name: profile?.name || 'User',
      role: profile?.role as UserRole,
      profileImage: profile?.profile_image || this.getDefaultProfileImage(profile?.name || 'User')
    };
  }
};
