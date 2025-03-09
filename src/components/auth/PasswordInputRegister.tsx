
import React, { memo } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

interface PasswordInputRegisterProps {
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
}

const PasswordInputRegister = ({ password, onChange, showPassword }: PasswordInputRegisterProps) => {
  return (
    <motion.div className="space-y-2" variants={itemVariants}>
      <Label htmlFor="password" className="text-sm font-medium flex items-center gap-1.5">
        <Lock size={14} className="text-health-primary" />
        Password
      </Label>
      <Input 
        id="password" 
        type={showPassword ? "text" : "password"}
        placeholder="••••••••" 
        value={password}
        onChange={onChange}
        required
        className="pr-10 transition-all duration-300 focus:ring-2 focus:ring-health-primary/30 focus:border-health-primary shadow-sm"
      />
    </motion.div>
  );
};

export default memo(PasswordInputRegister);
