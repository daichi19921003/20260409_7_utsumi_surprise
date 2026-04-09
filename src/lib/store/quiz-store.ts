import { create } from 'zustand';
import { hashString } from '@/lib/utils/crypto';
import { QUIZ_ANSWERS } from '@/lib/constants/quiz-data';

export type QuizStep = 'gateway' | 'trial1' | 'trial2' | 'trial3' | 'reveal';

interface QuizState {
  currentStep: QuizStep;
  answers: {
    trial1?: string;
    trial2?: string;
    trial3?: string;
  };
  isAuthorized: boolean;
  
  // Actions
  setStep: (step: QuizStep) => void;
  submitAnswer: (trial: 'trial1' | 'trial2' | 'trial3', answer: string) => boolean;
  reset: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  currentStep: 'gateway',
  answers: {},
  isAuthorized: false,

  setStep: (step: QuizStep) => set({ currentStep: step }),

  submitAnswer: (trial, answer) => {
    const hashedInput = hashString(answer);
    const correctHash = QUIZ_ANSWERS[trial];

    if (hashedInput === correctHash) {
      set((state) => ({
        answers: { ...state.answers, [trial]: answer },
        currentStep: 
          trial === 'trial1' ? 'trial2' :
          trial === 'trial2' ? 'trial3' :
          'reveal',
        isAuthorized: trial === 'trial3' ? true : state.isAuthorized,
      }));
      return true;
    }

    return false;
  },

  reset: () => set({
    currentStep: 'gateway',
    answers: {},
    isAuthorized: false,
  }),
}));
