import { describe, it, expect, beforeEach } from 'vitest';
import { useQuizStore } from './quiz-store';

describe('useQuizStore', () => {
  beforeEach(() => {
    useQuizStore.getState().reset();
  });

  it('初期状態が正しいこと', () => {
    const state = useQuizStore.getState();
    expect(state.currentStep).toBe('gateway');
    expect(state.answers).toEqual({});
    expect(state.isAuthorized).toBe(false);
  });

  it('ステップを直接変更できること', () => {
    useQuizStore.getState().setStep('trial1');
    expect(useQuizStore.getState().currentStep).toBe('trial1');
  });

  it('正しい回答で次のステップに進むこと', () => {
    // Trial 1: surprise
    const result1 = useQuizStore.getState().submitAnswer('trial1', 'surprise');
    expect(result1).toBe(true);
    expect(useQuizStore.getState().currentStep).toBe('trial2');

    // Trial 2: secret
    const result2 = useQuizStore.getState().submitAnswer('trial2', 'secret');
    expect(result2).toBe(true);
    expect(useQuizStore.getState().currentStep).toBe('trial3');

    // Trial 3: daichi
    const result3 = useQuizStore.getState().submitAnswer('trial3', 'daichi');
    expect(result3).toBe(true);
    expect(useQuizStore.getState().currentStep).toBe('reveal');
    expect(useQuizStore.getState().isAuthorized).toBe(true);
  });

  it('不正解の場合にステップが進まないこと', () => {
    const result = useQuizStore.getState().submitAnswer('trial1', 'wrong');
    expect(result).toBe(false);
    expect(useQuizStore.getState().currentStep).toBe('gateway');
  });

  it('大文字小文字や空白を許容すること', () => {
    const result = useQuizStore.getState().submitAnswer('trial1', ' SURPRISE ');
    expect(result).toBe(true);
    expect(useQuizStore.getState().currentStep).toBe('trial2');
  });

  it('リセットできること', () => {
    useQuizStore.getState().submitAnswer('trial1', 'surprise');
    useQuizStore.getState().reset();
    
    const state = useQuizStore.getState();
    expect(state.currentStep).toBe('gateway');
    expect(state.answers).toEqual({});
    expect(state.isAuthorized).toBe(false);
  });
});
