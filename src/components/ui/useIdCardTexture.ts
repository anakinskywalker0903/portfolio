/**
 * useIdCardTexture — ID card canvas texture generator
 * Layout: ENGINEERING PASS header pill · circular photo · full name ·
 *         title · STATUS tags (Learning / Building / Shipping)
 */
import { useEffect, useState } from 'react';

interface IdCardOptions {
  photoSrc?:    string;
  name?:        string;
  title?:       string;
  company?:     string;
  website?:     string;
  accentColor?: string;
  bgTop?:       string;
  bgBottom?:    string;
}

export function useIdCardTexture(opts: IdCardOptions = {}): string | null {
  const {
    photoSrc    = '',
    name        = 'Rohit Dubey',
    title       = 'AI & Full-Stack Developer',
    company     = 'ENGINEERING PASS',
    website     = 'rohitdubey.dev',
    accentColor = '#CCFF00',
    bgTop       = '#0020A8',
    bgBottom    = '#00083A',
  } = opts;

  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const draw = (photo: HTMLImageElement | null) => {
      if (cancelled) return;

      const W = 600, H = 920;
      const canvas = document.createElement('canvas');
      canvas.width  = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // ── Background ───────────────────────────────────────────────────
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, bgTop);
      grad.addColorStop(1, bgBottom);
      ctx.fillStyle = grad;
      ctx.roundRect(0, 0, W, H, 32);
      ctx.fill();

      // Subtle dot grid
      ctx.fillStyle = 'rgba(255,255,255,0.045)';
      for (let x = 20; x < W; x += 30) {
        for (let y = 20; y < H; y += 30) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── Top strip ─────────────────────────────────────────────────────
      ctx.fillStyle = 'rgba(255,255,255,0.07)';
      ctx.beginPath();
      ctx.roundRect(0, 0, W, 80, [32, 32, 0, 0]);
      ctx.fill();

      // Thin accent top border line
      ctx.strokeStyle = accentColor + '99';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(32, 0); ctx.lineTo(W - 32, 0);
      ctx.stroke();

      // ── ENGINEERING PASS pill ─────────────────────────────────────────
      const pillW = 220, pillH = 36;
      const pillX = (W - pillW) / 2, pillY = 22;
      // pill outline only — no fill — so it looks like a stamp
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(pillX, pillY, pillW, pillH, 18);
      ctx.stroke();
      ctx.fillStyle = accentColor + '18';
      ctx.beginPath();
      ctx.roundRect(pillX, pillY, pillW, pillH, 18);
      ctx.fill();

      ctx.fillStyle = accentColor;
      ctx.font = 'bold 12px "Arial Black", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '0.22em';
      ctx.fillText(company.toUpperCase(), W / 2, pillY + pillH / 2);

      // ── Circular photo ────────────────────────────────────────────────
      const cx = W / 2;
      const cy = 290;
      const r  = 105;

      // Outer accent ring
      ctx.strokeStyle = accentColor + '66';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(cx, cy, r + 10, 0, Math.PI * 2);
      ctx.stroke();

      // White inner ring
      ctx.strokeStyle = 'rgba(255,255,255,0.85)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, r + 4, 0, Math.PI * 2);
      ctx.stroke();

      // Photo clip
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.clip();

      if (photo) {
        const side  = r * 2;
        const scale = Math.max(side / photo.width, side / photo.height);
        const dw = photo.width  * scale;
        const dh = photo.height * scale;
        ctx.drawImage(photo, cx - dw / 2, cy - dh / 2, dw, dh);
        // Tone down photo brightness to prevent overexposure under Three.js lighting
        ctx.fillStyle = 'rgba(0, 0, 0, 0.18)';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = 'rgba(255,255,255,0.12)';
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.beginPath(); ctx.arc(cx, cy - 20, 36, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx, cy + 95, 65, Math.PI, 0); ctx.fill();
      }
      ctx.restore();

      // ── Accent divider ────────────────────────────────────────────────
      const divY = cy + r + 28;
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(W * 0.22, divY);
      ctx.lineTo(W * 0.78, divY);
      ctx.stroke();

      // ── Name ──────────────────────────────────────────────────────────
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 54px "Arial Black", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      ctx.letterSpacing = '0.01em';
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur  = 10;
      ctx.fillText(name, W / 2, divY + 68);
      ctx.shadowBlur = 0;

      // ── Title ─────────────────────────────────────────────────────────
      ctx.fillStyle = accentColor;
      ctx.font = 'bold 22px Arial, sans-serif';
      ctx.letterSpacing = '0.08em';
      ctx.fillText(title.toUpperCase(), W / 2, divY + 106);

      // ── Thin separator ────────────────────────────────────────────────
      const sep2Y = divY + 132;
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(W * 0.25, sep2Y); ctx.lineTo(W * 0.75, sep2Y);
      ctx.stroke();

      // ── STATUS label ──────────────────────────────────────────────────
      ctx.fillStyle = 'rgba(255,255,255,0.42)';
      ctx.font = 'bold 15px Arial, sans-serif';
      ctx.letterSpacing = '0.25em';
      ctx.fillText('STATUS', W / 2, sep2Y + 28);

      // ── Status tags: Learning · Building · Shipping ───────────────────
      const tags  = ['Learning', 'Building', 'Shipping'];
      const tagY  = sep2Y + 54;
      const tagH  = 38;
      const tagGap = 14;

      // Measure total width first
      ctx.font = 'bold 16px Arial, sans-serif';
      ctx.letterSpacing = '0.06em';
      const tagPadX = 20;
      const tagWidths = tags.map(t => ctx.measureText(t.toUpperCase()).width + tagPadX * 2);
      const totalW = tagWidths.reduce((a, b) => a + b, 0) + tagGap * (tags.length - 1);
      let tx = (W - totalW) / 2;

      tags.forEach((tag, i) => {
        const tw = tagWidths[i];
        // tag background
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        ctx.beginPath();
        ctx.roundRect(tx, tagY - tagH + 4, tw, tagH, 18);
        ctx.fill();
        // tag border
        ctx.strokeStyle = accentColor + '66';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(tx, tagY - tagH + 4, tw, tagH, 18);
        ctx.stroke();
        // tag text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px Arial, sans-serif';
        ctx.letterSpacing = '0.08em';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(tag.toUpperCase(), tx + tw / 2, tagY - tagH / 2 + 4);
        tx += tw + tagGap;
      });

      // ── Website ───────────────────────────────────────────────────────
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.font = 'bold 20px Arial, sans-serif';
      ctx.letterSpacing = '0.05em';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(website, W / 2, tagY + 54);

      // ── Bottom accent bar ─────────────────────────────────────────────
      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.roundRect(0, H - 14, W, 14, [0, 0, 32, 32]);
      ctx.fill();

      setDataUrl(canvas.toDataURL('image/png'));
    };

    if (photoSrc) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload  = () => draw(img);
      img.onerror = () => draw(null);
      img.src = photoSrc;
    } else {
      draw(null);
    }

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoSrc, name, title, company, website, accentColor, bgTop, bgBottom]);

  return dataUrl;
}
