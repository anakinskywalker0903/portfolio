// Pre-synthesized, high-volume emergency klaxon WAV data URI
// Works in all browsers without sample-rate or AudioContext state suspension issues

function createKlaxonWavUri(): string {
  const sampleRate = 22050;
  const duration = 0.9;
  const numSamples = Math.floor(sampleRate * duration);
  const buffer = new Int16Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    let freq = 0;
    let volume = 0;

    if (t < 0.38) {
      // Blast 1: 880Hz down to 480Hz
      const p = t / 0.38;
      freq = 880 - (880 - 480) * p;
      volume = Math.sin(p * Math.PI) * 0.95;
    } else if (t >= 0.46 && t < 0.86) {
      // Blast 2: 980Hz down to 520Hz
      const p = (t - 0.46) / 0.4;
      freq = 980 - (980 - 520) * p;
      volume = Math.sin(p * Math.PI) * 0.95;
    }

    if (freq > 0) {
      // Rich harmonic wave (fundamental + 2nd harmonic) for loud klaxon horn
      const phase1 = (t * freq) % 1;
      const phase2 = (t * freq * 2) % 1;
      const wave1 = phase1 < 0.5 ? 1 : -1;
      const wave2 = phase2 < 0.5 ? 0.4 : -0.4;
      buffer[i] = Math.floor((wave1 + wave2) * volume * 22000);
    } else {
      buffer[i] = 0;
    }
  }

  // WAV Header (44 bytes)
  const header = new ArrayBuffer(44);
  const view = new DataView(header);
  function writeString(offset: number, str: string) {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  }
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // Mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true); // Block align
  view.setUint16(34, 16, true); // 16-bit
  writeString(36, 'data');
  view.setUint32(40, numSamples * 2, true);

  // Combine header and PCM buffer
  const full = new Uint8Array(44 + numSamples * 2);
  full.set(new Uint8Array(header), 0);
  full.set(new Uint8Array(buffer.buffer), 44);

  // Convert binary to base64
  let binary = '';
  const len = full.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(full[i]);
  }
  return 'data:audio/wav;base64,' + btoa(binary);
}

export const KLAXON_WAV_URI = typeof window !== 'undefined' ? createKlaxonWavUri() : '';

// Singleton Web Audio Context for synthesizer fallback
let sharedAudioCtx: AudioContext | null = null;

export function getUnlockedAudioContext(): AudioContext | null {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return null;
    if (!sharedAudioCtx) {
      sharedAudioCtx = new AudioCtx();
    }
    if (sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume();
    }
    return sharedAudioCtx;
  } catch {
    return null;
  }
}

// Automatically prime both HTML5 Audio and Web Audio on any click/touch/keydown
if (typeof window !== 'undefined') {
  const primeAudio = () => {
    try {
      getUnlockedAudioContext();
      // Prime HTML5 Audio with a silent kick
      const dummy = new Audio(KLAXON_WAV_URI);
      dummy.volume = 0.01;
      dummy.play().then(() => {
        dummy.pause();
        dummy.currentTime = 0;
      }).catch(() => {});
    } catch {
      // Ignored
    }
  };

  window.addEventListener('pointerdown', primeAudio, { once: true, passive: true });
  window.addEventListener('keydown', primeAudio, { once: true, passive: true });
}

// Dual-Engine Siren Player: HTML5 Audio + Web Audio fallback
export function playSirenBlast(): void {
  // Engine 1: HTML5 Audio (Direct PCM playback, highest hardware compatibility on Windows)
  try {
    if (KLAXON_WAV_URI) {
      const audio = new Audio(KLAXON_WAV_URI);
      audio.volume = 1.0;
      audio.play().catch(() => {
        // Fallback to Web Audio if blocked
        playWebAudioFallback();
      });
      return;
    }
  } catch {
    // Continue to fallback
  }

  playWebAudioFallback();
}

function playWebAudioFallback(): void {
  try {
    const ctx = getUnlockedAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const playTone = (startFreq: number, endFreq: number, startOffset: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(startFreq, now + startOffset);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + startOffset + duration);

      gain.gain.setValueAtTime(0.01, now + startOffset);
      gain.gain.linearRampToValueAtTime(0.4, now + startOffset + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.01, now + startOffset + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + startOffset);
      osc.stop(now + startOffset + duration);
    };

    playTone(880, 480, 0, 0.32);
    playTone(980, 520, 0.38, 0.36);
  } catch (err) {
    console.warn('Audio fallback error:', err);
  }
}
