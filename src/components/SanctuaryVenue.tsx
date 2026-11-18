import React, { useState } from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const SanctuaryVenue: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullText = `${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.address} (${WEDDING_DATA.venue.landmark})`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        padding: '20px 0',
      }}
      aria-label="Wedding Venue and Directions"
    >
      <div className="section-title-wrap reveal delay-1">
        <p className="section-eyebrow">Venue Details</p>
        <h2 className="section-main-title">Wedding Venue</h2>
      </div>

      <div
        className="luxury-paper-card reveal delay-2"
        style={{
          background: 'rgba(33, 59, 48, 0.035)',
          border: '1px solid rgba(179, 145, 85, 0.38)',
          borderRadius: '16px',
          padding: '28px 22px',
          marginTop: '14px',
          boxShadow: '0 6px 20px rgba(22, 41, 32, 0.06)',
        }}
      >
        {/* Destination Pin Icon */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(179, 145, 85, 0.16)',
            border: '1px solid rgba(179, 145, 85, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="var(--color-gold-antique)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5.6vw, 3.2rem)',
            color: 'var(--color-forest-deep)',
            fontWeight: 700,
            marginBottom: '10px',
            lineHeight: 1.15,
          }}
        >
          {WEDDING_DATA.venue.name}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.6vw, 1.2rem)',
            lineHeight: 1.5,
            color: 'var(--color-ink-charcoal)',
            fontWeight: 600,
          }}
        >
          {WEDDING_DATA.venue.address}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
            color: 'var(--color-ink-muted)',
            marginTop: '6px',
            marginBottom: '26px',
          }}
        >
          ({WEDDING_DATA.venue.landmark})
        </p>

        {/* Action Button Group */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '360px', margin: '0 auto' }}>
          <a
            href={WEDDING_DATA.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal-primary"
          >
            📍 Open in Google Maps
          </a>

          <button
            onClick={handleCopyAddress}
            className="btn-royal-secondary"
          >
            {copied ? '✓ Address Copied to Clipboard!' : '📋 Copy Address for Uber / Cab'}
          </button>
        </div>
      </div>
    </section>
  );
};
