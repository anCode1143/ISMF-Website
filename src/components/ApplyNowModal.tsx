import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Division {
  id: string;
  name: string;
  isOpen: boolean;
  formUrl?: string;
}

const divisions: Division[] = [
  { 
    id: 'alternative-investments', 
    name: 'Alternative Investments Division', 
    isOpen: true,
    formUrl: 'https://docs.google.com/forms/d/1nMs0WqAzUG1FrnJuA40rRY6K_bjfHai2P0v9N7LuNRg/viewform?pli=1&pli=1&edit_requested=true'
  },
  { 
    id: 'marketing', 
    name: 'Marketing', 
    isOpen: true,
    formUrl: 'https://docs.google.com/forms/d/16iCt1UCpAxS4EviWoWbmxrpmsR4wJVhC2LYTKF6OI7o/edit'
  },
  { 
    id: 'quant-research', 
    name: 'Quant Research', 
    isOpen: true,
    formUrl: 'https://docs.google.com/forms/d/1PvmRULplhAxoBW_S2bFYHVRvP8WTaiZoj8ztlGAhg2E/edit'
  },
  { 
    id: 'macro-research', 
    name: 'Macro Research (Closed)', 
    isOpen: false 
  },
  { 
    id: 'technology', 
    name: 'Technology Division (Closed)', 
    isOpen: false 
  },
];

interface ApplyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyNowModal: React.FC<ApplyNowModalProps> = ({ isOpen, onClose }) => {
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);

  const handleDivisionSelect = (divisionId: string, isOpen: boolean) => {
    if (isOpen) {
      setSelectedDivision(divisionId);
    }
  };

  const handleContinue = () => {
    if (selectedDivision) {
      // Find the selected division and get its form URL
      const division = divisions.find(d => d.id === selectedDivision);
      
      if (division && division.formUrl) {
        // Open the Google Form in a new tab
        window.open(division.formUrl, '_blank', 'noopener,noreferrer');
      }
      
      // Close the modal and reset selection
      onClose();
      setSelectedDivision(null);
    }
  };

  const handleClose = () => {
    onClose();
    setSelectedDivision(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="bg-gradient-to-br from-purple-50 via-white to-purple-50 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-purple-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white p-6 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
                <h2 className="text-2xl font-bold mb-2">Join ISMF</h2>
                <p className="text-purple-100 text-sm">Select a division to apply</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-3">
                  {divisions.map((division) => (
                    <motion.button
                      key={division.id}
                      onClick={() => handleDivisionSelect(division.id, division.isOpen)}
                      disabled={!division.isOpen}
                      whileHover={division.isOpen ? { scale: 1.02 } : {}}
                      whileTap={division.isOpen ? { scale: 0.98 } : {}}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left relative ${
                        division.isOpen
                          ? selectedDivision === division.id
                            ? 'border-purple-500 bg-purple-50 shadow-md'
                            : 'border-purple-200 hover:border-purple-400 hover:bg-purple-50/50 bg-white'
                          : 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p
                            className={`font-semibold ${
                              division.isOpen
                                ? selectedDivision === division.id
                                  ? 'text-purple-700'
                                  : 'text-gray-800'
                                : 'text-gray-400'
                            }`}
                          >
                            {division.name}
                          </p>
                          {!division.isOpen && (
                            <p className="text-xs text-gray-400 mt-1">
                              Applications currently closed
                            </p>
                          )}
                        </div>
                        {division.isOpen && selectedDivision === division.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          >
                            <CheckCircle2 className="h-6 w-6 text-purple-600" />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Info text */}
                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-purple-700">Note:</span> Select an open
                    division to continue with your application. Closed divisions are not currently
                    accepting applications.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 flex gap-3">
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="flex-1 border-purple-200 text-purple-700 hover:bg-purple-50"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleContinue}
                  disabled={!selectedDivision}
                  className={`flex-1 ${
                    selectedDivision
                      ? 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

