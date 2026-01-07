"use client";

import React, { createContext, useContext, useState } from 'react';
import AuditPopup from '@/components/ui/AuditPopup';

interface AuditPopupContextType {
  openAuditPopup: () => void;
  closeAuditPopup: () => void;
}

const AuditPopupContext = createContext<AuditPopupContextType | undefined>(undefined);

export const AuditPopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAuditPopup = () => setIsOpen(true);
  const closeAuditPopup = () => setIsOpen(false);

  return (
    <AuditPopupContext.Provider value={{ openAuditPopup, closeAuditPopup }}>
      {children}
      <AuditPopup isOpen={isOpen} onClose={closeAuditPopup} />
    </AuditPopupContext.Provider>
  );
};

export const useAuditPopup = () => {
  const context = useContext(AuditPopupContext);
  if (context === undefined) {
    throw new Error('useAuditPopup must be used within an AuditPopupProvider');
  }
  return context;
};
