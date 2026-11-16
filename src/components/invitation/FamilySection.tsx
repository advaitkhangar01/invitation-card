import React from 'react';
import { weddingData } from '../../data/wedding';
import { Reveal } from '../motion/Reveal';
import { Divider } from '../ui/Divider';

export const FamilySection: React.FC = () => {
  return (
    <section
      className="section-padding section-ivory text-center"
      aria-label="Family Acknowledgements"
    >
      <Reveal delay={0.1}>
        <span className="text-micro-label" style={{ display: 'block', marginBottom: '8px' }}>
          OUR FAMILIES
        </span>
        <h2
          className="font-serif-playfair text-section-title"
          style={{
            fontSize: 'clamp(1.2rem, 3.8vw, 1.45rem)',
            color: 'var(--color-deep-sage)',
            marginBottom: 'var(--space-2xl)',
            letterSpacing: '0.08em',
          }}
        >
          {weddingData.familySection.heading}
        </h2>
      </Reveal>

      <div className="family-container">
        {/* Bride's Family */}
        <Reveal delay={0.2}>
          <div className="family-column">
            <h3 className="family-title">{weddingData.bride.fullName}</h3>
            <div className="family-relation">Daughter of</div>
            <div className="family-parents">
              <div>{weddingData.bride.parents.father}</div>
              <div
                className="font-script-allura"
                style={{
                  fontSize: '1.4rem',
                  lineHeight: '1.2',
                  color: 'var(--color-antique-gold)',
                  margin: '2px 0',
                }}
              >
                &amp;
              </div>
              <div>{weddingData.bride.parents.mother}</div>
            </div>
          </div>
        </Reveal>

        {/* Delicate Center Gold Divider */}
        <Reveal delay={0.3}>
          <Divider className="my-6" />
        </Reveal>

        {/* Groom's Family */}
        <Reveal delay={0.4}>
          <div className="family-column">
            <h3 className="family-title">{weddingData.groom.fullName}</h3>
            <div className="family-relation">Son of</div>
            <div className="family-parents">
              <div>{weddingData.groom.parents.father}</div>
              <div
                className="font-script-allura"
                style={{
                  fontSize: '1.4rem',
                  lineHeight: '1.2',
                  color: 'var(--color-antique-gold)',
                  margin: '2px 0',
                }}
              >
                &amp;
              </div>
              <div>{weddingData.groom.parents.mother}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
