
import React, { memo, useState, useCallback } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

interface PasswordInputProps {
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({ password, onChange }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  return (
    <motion.div className="space-y-2" variants={itemVariants}>
      <div className="flex justify-between items-center">
        <Label htmlFor="password" className="text-sm font-medium flex items-center gap-1.5">
          <Lock size={14} className="text-health-primary" />
          Password
        </Label>
        <a href="#" className="text-xs text-health-primary hover:underline transition-colors">
          Forgot password?
        </a>
      </div>
      <div className="relative">
        <Input 
          id="password" 
          type={showPassword ? "text" : "password"}
          placeholder="••••••••" 
          value={password}
          onChange={onChange}
          required
          className="pr-10 transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-health-primary transition-colors"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </motion.div>
  );
};

export default memo(PasswordInput);
