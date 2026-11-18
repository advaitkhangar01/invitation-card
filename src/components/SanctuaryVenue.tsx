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
        padding: '18px 0',
      }}
      aria-label="Wedding Venue and Directions"
    >
      <div className="section-title-wrap reveal delay-1">
        <p className="section-eyebrow">Venue Details</p>
        <h2 className="section-main-title">The Wedding Venue</h2>
      </div>

      <div
        className="luxury-paper-card reveal delay-2"
        style={{
          padding: '28px 22px',
          marginTop: '12px',
        }}
      >
        {/* Destination Pin Icon */}
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'rgba(197, 160, 89, 0.14)',
            border: '1px solid rgba(197, 160, 89, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
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
            fontSize: 'clamp(2rem, 5.4vw, 3.1rem)',
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
            fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
            lineHeight: 1.5,
            color: 'var(--color-ink-primary)',
            fontWeight: 600,
          }}
        >
          {WEDDING_DATA.venue.address}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.82rem, 2.1vw, 0.95rem)',
            color: 'var(--color-ink-muted)',
            marginTop: '6px',
            marginBottom: '24px',
          }}
        >
          ({WEDDING_DATA.venue.landmark})
        </p>

        {/* Action Button Group */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '340px', margin: '0 auto' }}>
          <a
            href={WEDDING_DATA.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal-primary"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Open in Google Maps
          </a>

          <button
            onClick={handleCopyAddress}
            className="btn-royal-secondary"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            {copied ? 'Address Copied to Clipboard!' : 'Copy Address for Cab'}
          </button>
        </div>
      </div>
    </section>
  );
};
