
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { User, Shield, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

interface RoleSelectorProps {
  role: 'patient' | 'doctor' | 'researcher';
  onRoleSelect: (role: 'patient' | 'doctor' | 'researcher') => void;
}

const RoleSelector = ({ role, onRoleSelect }: RoleSelectorProps) => {
  return (
    <motion.div className="space-y-2" variants={itemVariants}>
      <Label htmlFor="role" className="text-sm font-medium">
        I am a
      </Label>
      <div className="grid grid-cols-3 gap-2">
        <Button
          type="button"
          variant={role === 'patient' ? 'default' : 'outline'}
          onClick={() => onRoleSelect('patient')}
          className="flex items-center justify-center gap-1"
        >
          <User size={16} />
          <span>Patient</span>
        </Button>
        <Button
          type="button"
          variant={role === 'doctor' ? 'default' : 'outline'}
          onClick={() => onRoleSelect('doctor')}
          className="flex items-center justify-center gap-1"
        >
          <Shield size={16} />
          <span>Doctor</span>
        </Button>
        <Button
          type="button"
          variant={role === 'researcher' ? 'default' : 'outline'}
          onClick={() => onRoleSelect('researcher')}
          className="flex items-center justify-center gap-1"
        >
          <Send size={16} />
          <span>Researcher</span>
        </Button>
      </div>
    </motion.div>
  );
};

export default memo(RoleSelector);
