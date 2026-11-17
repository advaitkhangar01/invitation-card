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
      style={{
        textAlign: 'center',
        padding: '16px 0',
      }}
      aria-label="Wedding Venue and Directions"
    >
      <div className="section-title-wrap">
        <p className="section-eyebrow">The Destination</p>
        <h2 className="section-main-title">Sacred Sanctuary</h2>
      </div>

      <div
        style={{
          background: 'rgba(35, 59, 50, 0.03)',
          border: '1px solid rgba(185, 154, 98, 0.32)',
          borderRadius: '14px',
          padding: '24px 20px',
          marginTop: '12px',
        }}
      >
        {/* Destination Pin Icon */}
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(185, 154, 98, 0.15)',
            border: '1px solid rgba(185, 154, 98, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px',
          }}
        >
          <img
            src="/assets/icons/map-marker.svg"
            alt="Venue Pin"
            style={{ width: '20px', height: '20px', filter: 'invert(19%) sepia(23%) saturate(1200%) hue-rotate(110deg)' }}
          />
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.75rem',
            color: 'var(--color-forest-deep)',
            fontWeight: 700,
            marginBottom: '8px',
          }}
        >
          {WEDDING_DATA.venue.name}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.5,
            color: 'var(--color-ink-charcoal)',
            fontWeight: 500,
          }}
        >
          {WEDDING_DATA.venue.address}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--color-ink-muted)',
            marginTop: '4px',
            marginBottom: '22px',
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
