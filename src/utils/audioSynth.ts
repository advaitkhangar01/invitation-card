// High-fidelity romantic harp & acoustic chime synthesizer using Web Audio API
// Completely royalty-free, offline capable, zero external network dependency

class AmbientWeddingAudio {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;
  private gainNode: GainNode | null = null;

  // Gentle pentatonic chord progression in D Major:
  // D - F# - A - C# - E (Dmaj9) -> G - B - D - F# (Gmaj7) -> B - D - F# - A (Bm7) -> A - C# - E - G# (Aadd9)
  private chords = [
    [146.83, 220.00, 277.18, 369.99, 440.00, 554.37, 659.25], // Dmaj9
    [196.00, 246.94, 293.66, 369.99, 440.00, 493.88, 587.33], // Gmaj7
    [123.47, 185.00, 220.00, 293.66, 369.99, 440.00, 587.33], // Bm7
    [110.00, 164.81, 220.00, 277.18, 329.63, 440.00, 554.37], // Aadd9
  ];

  private currentChordIndex = 0;
  private noteIndex = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Plucks a soft acoustic harp note with warm physical decay
  private pluckNote(freq: number, time: number, velocity: number = 0.5) {
    if (!this.ctx || !this.gainNode) return;

    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Warm triangle/sine blend
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(freq * 2, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);
    filter.frequency.exponentialRampToValueAtTime(350, time + 2.5);

    // Natural acoustic harp envelope
    const attack = 0.015;
    const decay = 2.8;
    noteGain.gain.setValueAtTime(0.0001, time);
    noteGain.gain.exponentialRampToValueAtTime(velocity * 0.25, time + attack);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + decay);

    osc.connect(filter);
    subOsc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc.start(time);
    subOsc.start(time);
    osc.stop(time + decay + 0.1);
    subOsc.stop(time + decay + 0.1);
  }

  public play() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;

    const step = () => {
      if (!this.isPlaying || !this.ctx) return;

      const chord = this.chords[this.currentChordIndex];
      const now = this.ctx.currentTime;

      // Play an arpeggiated note from current chord
      const noteFreq = chord[this.noteIndex % chord.length];
      const subtleVelocity = 0.4 + Math.random() * 0.25;
      this.pluckNote(noteFreq, now, subtleVelocity);

      this.noteIndex++;
      if (this.noteIndex >= chord.length) {
        this.noteIndex = 0;
        this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;
      }

      // Calm tempo: note every 450 - 650 ms
      const interval = 480 + Math.random() * 120;
      this.timer = window.setTimeout(step, interval);
    };

    step();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambientAudio = new AmbientWeddingAudio();
