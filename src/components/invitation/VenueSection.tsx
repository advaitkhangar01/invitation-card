import React from 'react';
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';
import { weddingData } from '../../data/wedding';
import { Reveal } from '../motion/Reveal';
import { Button } from '../ui/Button';

export const VenueSection: React.FC = () => {
  return (
    <section
      className="section-padding section-ivory text-center relative"
      aria-label="Wedding Venue & Location"
    >
      <Reveal delay={0.1}>
        <span className="text-micro-label" style={{ display: 'block', marginBottom: '8px' }}>
          {weddingData.venue.smallLabel}
        </span>
        <h2
          className="font-serif-cormorant text-hero-heading"
          style={{
            color: 'var(--color-deep-sage)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {weddingData.venue.heading}
        </h2>
      </Reveal>

      {/* Decorative Location Icon Badge */}
      <Reveal delay={0.2}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'var(--color-pale-cream)',
            border: '1px solid rgba(182, 154, 105, 0.45)',
            boxShadow: '0 8px 20px rgba(38, 61, 53, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            color: 'var(--color-antique-gold)',
          }}
          aria-hidden="true"
        >
          <MapPin size={28} strokeWidth={1.5} />
        </div>
      </Reveal>

      {/* Large Venue Name */}
      <Reveal delay={0.3}>
        <h3
          className="font-serif-playfair"
          style={{
            fontSize: 'clamp(2rem, 6vw, 2.6rem)',
            fontWeight: 600,
            color: 'var(--color-deep-sage)',
            letterSpacing: '0.04em',
            marginBottom: '12px',
          }}
        >
          {weddingData.venue.name}
        </h3>
      </Reveal>

      {/* Address & Supporting Area Detail */}
      <Reveal delay={0.4}>
        <div style={{ maxWidth: '300px', margin: '0 auto 24px' }}>
          <p
            className="font-sans-dm"
            style={{
              fontSize: '1.05rem',
              fontWeight: 500,
              color: 'var(--color-soft-ink)',
              lineHeight: 1.5,
            }}
          >
            {weddingData.venue.address}
          </p>
          <p
            className="font-sans-dm"
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-ink-muted)',
              marginTop: '4px',
            }}
          >
            ({weddingData.venue.addressArea})
          </p>
        </div>
      </Reveal>

      {/* Date & Time Confirmation Pill */}
      <Reveal delay={0.45}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 20px',
            background: 'var(--color-pale-cream)',
            border: '1px solid rgba(182, 154, 105, 0.3)',
            borderRadius: '30px',
            fontSize: '0.86rem',
            color: 'var(--color-deep-sage)',
            marginBottom: 'var(--space-3xl)',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Calendar size={15} color="#B69A69" /> 17 Dec 2026
          </span>
          <span style={{ color: 'rgba(182, 154, 105, 0.5)' }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Clock size={15} color="#B69A69" /> 5:40 PM
          </span>
        </div>
      </Reveal>

      {/* Prominent Touch-Friendly Directions Button */}
      <Reveal delay={0.5}>
        <div>
          <Button
            href={weddingData.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google Maps directions to Amrit Farms, Gumthala, Nagpur"
          >
            <Navigation size={16} />
            {weddingData.venue.buttonLabel}
          </Button>
        </div>
      </Reveal>
    </section>
  );
};
