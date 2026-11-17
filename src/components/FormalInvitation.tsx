import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const FormalInvitation: React.FC = () => {
  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        padding: '20px 0',
      }}
      aria-label="Formal Wedding Invitation"
    >
      <p
        className="reveal delay-1"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.8125rem, 2.2vw, 0.95rem)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--color-gold-deep)',
          fontWeight: 700,
          marginBottom: '18px',
        }}
      >
        Under the Grace of Elders &amp; Ancestors
      </p>

      {/* Bride's Parents Blessing */}
      <div
        className="luxury-paper-card reveal delay-2"
        style={{
          background: 'rgba(33, 59, 48, 0.035)',
          border: '1px solid rgba(179, 145, 85, 0.38)',
          borderRadius: '14px',
          padding: '22px 20px',
          marginBottom: '20px',
          boxShadow: '0 4px 16px rgba(22, 41, 32, 0.05)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.3rem, 3.8vw, 1.85rem)',
            color: 'var(--color-forest-deep)',
            lineHeight: 1.3,
            fontWeight: 700,
          }}
        >
          {WEDDING_DATA.bride.father}
          <br />
          &amp; {WEDDING_DATA.bride.mother}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.875rem, 2.2vw, 1.05rem)',
            color: 'var(--color-ink-muted)',
            marginTop: '8px',
            letterSpacing: '0.04em',
            lineHeight: 1.5,
          }}
        >
          Cordially invite your gracious presence to celebrate the wedding of their daughter
        </p>
      </div>

      {/* Verbatim Invitation Line */}
      <div className="reveal delay-3" style={{ margin: '26px 0' }}>
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.6rem, 4.6vw, 2.4rem)',
            fontStyle: 'italic',
            color: 'var(--color-forest-rich)',
            letterSpacing: '0.02em',
            fontWeight: 700,
            lineHeight: 1.25,
          }}
        >
          “ {WEDDING_DATA.verbatimInvitationLine} ”
        </p>
      </div>

      {/* Groom's Parents Blessing */}
      <div
        className="luxury-paper-card reveal delay-4"
        style={{
          background: 'rgba(33, 59, 48, 0.035)',
          border: '1px solid rgba(179, 145, 85, 0.38)',
          borderRadius: '14px',
          padding: '22px 20px',
          boxShadow: '0 4px 16px rgba(22, 41, 32, 0.05)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.8125rem, 2vw, 0.95rem)',
            color: 'var(--color-ink-muted)',
            letterSpacing: '0.06em',
            marginBottom: '6px',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Together with
        </p>
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.3rem, 3.8vw, 1.85rem)',
            color: 'var(--color-forest-deep)',
            lineHeight: 1.3,
            fontWeight: 700,
          }}
        >
          {WEDDING_DATA.groom.father}
          <br />
          &amp; {WEDDING_DATA.groom.mother}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.875rem, 2.2vw, 1.05rem)',
            color: 'var(--color-ink-muted)',
            marginTop: '6px',
            letterSpacing: '0.04em',
          }}
        >
          Parents of the Groom
        </p>
      </div>
    </section>
  );
};
