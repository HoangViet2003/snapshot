'use client';

import { Facebook, Globe, Instagram } from 'lucide-react';
import { usePublicSiteSettings } from '@/hooks/useSiteSettings';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');
  const locale = useLocale();
  const { data: siteSettings } = usePublicSiteSettings();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'vi', label: 'VI' },
    { code: 'zh', label: 'ZH' },
  ];

  const switchLocale = (code: string) => {
    const segments = window.location.pathname.split('/');
    if (['en', 'vi', 'zh'].includes(segments[1])) {
      segments[1] = code;
      window.location.assign(segments.join('/'));
    } else {
      window.location.assign(`/${code}${window.location.pathname}`);
    }
  };

  const facebookUrl = siteSettings?.socialLinks.facebookUrl || 'https://www.facebook.com/';
  const pinterestUrl = siteSettings?.socialLinks.pinterestUrl || 'https://www.pinterest.com/Snaphanoi/';
  const instagramUrl = siteSettings?.socialLinks.instagramUrl || 'https://www.instagram.com/snaphanoi.photo/';
  const whatsappUrl = siteSettings?.socialLinks.whatsappUrl || 'https://wa.me/84944659659';
  const contactEmail = siteSettings?.contactInfo.contactEmail || 'fixteamstudio@mail.com';
  const officeAddress = siteSettings?.contactInfo.officeAddress || '59/381 Nguyen Khang, Yen Hoa, Cau Giay, Ha Noi, Viet Nam';

  return (
    <footer className="bg-[#f5f3ef] text-[#2c2c2c]">

      {/* ── Main grid ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.4fr]">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href={`/${locale}`}>
              <span className="inline-flex items-center justify-center border border-gray-200 p-1 bg-white">
                <Image
                  src="/logo-snapshot.svg"
                  alt="Logo"
                  width={220}
                  height={60}
                  unoptimized
                  className="h-14 w-auto"
                />
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#2c2c2c]/55 max-w-xs">
              {t('tagline')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[#2c2c2c] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#444] max-w-max"
            >
              {t('bookToday')}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-2 text-[#2c2c2c]/40">
              {facebookUrl && (
                <a href={facebookUrl} aria-label="Facebook" className="hover:text-[#2c2c2c] transition-colors" target="_blank" rel="noopener noreferrer">
                  <Facebook size={16} strokeWidth={1.8} />
                </a>
              )}
              {instagramUrl && (
                <a href={instagramUrl} aria-label="Instagram" className="hover:text-[#2c2c2c] transition-colors" target="_blank" rel="noopener noreferrer">
                  <Instagram size={16} strokeWidth={1.8} />
                </a>
              )}
              {whatsappUrl && (
                <a href="https://api.whatsapp.com/send?phone=84944659659" aria-label="WhatsApp" className="hover:text-[#2c2c2c] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor"><path d="M16.001 3.2c-7.064 0-12.8 5.736-12.8 12.8 0 2.264.6 4.472 1.736 6.408l-1.832 6.696a1.6 1.6 0 0 0 1.96 1.96l6.696-1.832a12.74 12.74 0 0 0 6.24 1.624h.008c7.064 0 12.8-5.736 12.8-12.8s-5.736-12.8-12.8-12.8zm0 23.2a10.4 10.4 0 0 1-5.36-1.504l-.384-.224-5.008 1.368 1.368-5.008-.224-.384a10.4 10.4 0 1 1 9.608 5.752zm5.68-7.36c-.312-.156-1.848-.912-2.136-1.016-.288-.104-.496-.156-.704.156-.208.312-.808 1.016-.992 1.224-.184.208-.368.232-.68.08-.312-.156-1.32-.488-2.512-1.552-.928-.824-1.552-1.84-1.736-2.152-.184-.312-.02-.48.136-.632.14-.14.312-.368.468-.552.156-.184.208-.312.312-.52.104-.208.052-.392-.024-.552-.08-.156-.704-1.704-.968-2.336-.256-.616-.52-.528-.704-.536-.184-.008-.392-.008-.6-.008-.208 0-.552.08-.84.392-.288.312-1.104 1.08-1.104 2.632 0 1.552 1.128 3.048 1.288 3.256.156.208 2.224 3.4 5.392 4.632.756.324 1.344.52 1.808.664.76.24 1.456.208 2.008.128.616-.092 1.848-.752 2.112-1.48.264-.728.264-1.352.184-1.48-.08-.128-.288-.208-.6-.36z"/></svg>
                </a>
              )}
              {pinterestUrl && (
                <a href={pinterestUrl} aria-label="Pinterest" className="hover:text-[#2c2c2c] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.19-2.4.04-3.43.21-.93 1.34-5.69 1.34-5.69s-.34-.69-.34-1.7c0-1.59.92-2.79 2.08-2.79 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.56-.99 3.98-.28 1.18.59 2.15 1.76 2.15 2.11 0 3.73-2.23 3.73-5.44 0-2.84-2.04-4.83-4.96-4.83-3.38 0-5.36 2.54-5.36 5.15 0 1.02.39 2.11.89 2.71.1.12.11.23.08.35-.1.4-.31 1.25-.35 1.41-.05.21-.17.26-.4.15-1.48-.69-2.4-2.86-2.4-4.6 0-3.75 2.72-7.19 7.85-7.19 4.12 0 7.33 2.94 7.33 6.87 0 4.1-2.58 7.4-6.17 7.4-1.2 0-2.34-.63-2.73-1.37l-.74 2.82c-.27 1.03-1 2.32-1.49 3.12 1.13.35 2.33.54 3.58.54 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#2c2c2c]/35">
              {t('pagesLabel')}
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href={`/${locale}`} className="text-[#2c2c2c]/60 hover:text-[#2c2c2c] transition-colors">{tNav('home')}</Link></li>
              <li><Link href={`/${locale}/about`} className="text-[#2c2c2c]/60 hover:text-[#2c2c2c] transition-colors">{tNav('about')}</Link></li>
              <li><Link href={`/${locale}/galleries`} className="text-[#2c2c2c]/60 hover:text-[#2c2c2c] transition-colors">{tNav('galleries')}</Link></li>
              <li><Link href={`/${locale}/packages`} className="text-[#2c2c2c]/60 hover:text-[#2c2c2c] transition-colors">{tNav('packages')}</Link></li>
              <li><Link href={`/${locale}/blogs`} className="text-[#2c2c2c]/60 hover:text-[#2c2c2c] transition-colors">{tNav('blogs')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-[#2c2c2c]/60 hover:text-[#2c2c2c] transition-colors">{tNav('contact')}</Link></li>
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <h3 className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#2c2c2c]/35">
              {t('findUsLabel')}
            </h3>
            <ul className="flex flex-col gap-5 text-sm text-[#2c2c2c]/60">
              {officeAddress && (
                <li>
                  <p className="text-[0.6rem] uppercase tracking-widest text-[#2c2c2c]/35 mb-1">{t('officeLabel')}</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#2c2c2c] transition-colors leading-relaxed block">{officeAddress}</a>
                </li>
              )}
              {contactEmail && (
                <li>
                  <p className="text-[0.6rem] uppercase tracking-widest text-[#2c2c2c]/35 mb-1">{t('mailLabel')}</p>
                  <a href={`mailto:${contactEmail}`} className="hover:text-[#2c2c2c] transition-colors">{contactEmail}</a>
                </li>
              )}
              {whatsappUrl && (
                <li>
                  <p className="text-[0.6rem] uppercase tracking-widest text-[#2c2c2c]/35 mb-1">WhatsApp</p>
                  <a href="https://api.whatsapp.com/send?phone=84944659659" target="_blank" rel="noopener noreferrer" className="hover:text-[#2c2c2c] transition-colors">+84 944 659 659</a>
                </li>
              )}
              {instagramUrl && (
                <li>
                  <p className="text-[0.6rem] uppercase tracking-widest text-[#2c2c2c]/35 mb-1">Instagram</p>
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#2c2c2c] transition-colors">
                    {instagramUrl.replace('https://www.instagram.com/', '@').replace(/\/$/, '')}
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────── */}
      <div className="border-t border-[#2c2c2c]/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-8 py-4">
          {/* Left: copyright */}
          <span className="text-xs text-[#2c2c2c]/35">
            ©{new Date().getFullYear()} {t('copyright')}
          </span>
          {/* Center: language */}
          <div className="flex items-center gap-1 text-xs text-[#2c2c2c]/35">
            <Globe size={12} className="mr-1" />
            {languages.map((lang, i) => (
              <span key={lang.code} className="flex items-center">
                {i > 0 && <span className="mx-1.5 opacity-40">·</span>}
                <button
                  onClick={() => switchLocale(lang.code)}
                  className={`transition-colors hover:text-[#2c2c2c] cursor-pointer ${locale === lang.code ? 'text-[#2c2c2c] font-semibold' : ''}`}
                >
                  {lang.label}
                </button>
              </span>
            ))}
          </div>
          {/* Right: social icons */}
          <div className="flex items-center gap-4 text-[#2c2c2c]/35">
            {facebookUrl && (
              <a href={facebookUrl} aria-label="Facebook" className="hover:text-[#2c2c2c] transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={15} strokeWidth={1.8} />
              </a>
            )}
            {instagramUrl && (
              <a href={instagramUrl} aria-label="Instagram" className="hover:text-[#2c2c2c] transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={15} strokeWidth={1.8} />
              </a>
            )}
            {whatsappUrl && (
              <a href="https://api.whatsapp.com/send?phone=84944659659" aria-label="WhatsApp" className="hover:text-[#2c2c2c] transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" viewBox="0 0 32 32" fill="currentColor"><path d="M16.001 3.2c-7.064 0-12.8 5.736-12.8 12.8 0 2.264.6 4.472 1.736 6.408l-1.832 6.696a1.6 1.6 0 0 0 1.96 1.96l6.696-1.832a12.74 12.74 0 0 0 6.24 1.624h.008c7.064 0 12.8-5.736 12.8-12.8s-5.736-12.8-12.8-12.8zm0 23.2a10.4 10.4 0 0 1-5.36-1.504l-.384-.224-5.008 1.368 1.368-5.008-.224-.384a10.4 10.4 0 1 1 9.608 5.752zm5.68-7.36c-.312-.156-1.848-.912-2.136-1.016-.288-.104-.496-.156-.704.156-.208.312-.808 1.016-.992 1.224-.184.208-.368.232-.68.08-.312-.156-1.32-.488-2.512-1.552-.928-.824-1.552-1.84-1.736-2.152-.184-.312-.02-.48.136-.632.14-.14.312-.368.468-.552.156-.184.208-.312.312-.52.104-.208.052-.392-.024-.552-.08-.156-.704-1.704-.968-2.336-.256-.616-.52-.528-.704-.536-.184-.008-.392-.008-.6-.008-.208 0-.552.08-.84.392-.288.312-1.104 1.08-1.104 2.632 0 1.552 1.128 3.048 1.288 3.256.156.208 2.224 3.4 5.392 4.632.756.324 1.344.52 1.808.664.76.24 1.456.208 2.008.128.616-.092 1.848-.752 2.112-1.48.264-.728.264-1.352.184-1.48-.08-.128-.288-.208-.6-.36z"/></svg>
              </a>
            )}
            {pinterestUrl && (
              <a href={pinterestUrl} aria-label="Pinterest" className="hover:text-[#2c2c2c] transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.19-2.4.04-3.43.21-.93 1.34-5.69 1.34-5.69s-.34-.69-.34-1.7c0-1.59.92-2.79 2.08-2.79 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.56-.99 3.98-.28 1.18.59 2.15 1.76 2.15 2.11 0 3.73-2.23 3.73-5.44 0-2.84-2.04-4.83-4.96-4.83-3.38 0-5.36 2.54-5.36 5.15 0 1.02.39 2.11.89 2.71.1.12.11.23.08.35-.1.4-.31 1.25-.35 1.41-.05.21-.17.26-.4.15-1.48-.69-2.4-2.86-2.4-4.6 0-3.75 2.72-7.19 7.85-7.19 4.12 0 7.33 2.94 7.33 6.87 0 4.1-2.58 7.4-6.17 7.4-1.2 0-2.34-.63-2.73-1.37l-.74 2.82c-.27 1.03-1 2.32-1.49 3.12 1.13.35 2.33.54 3.58.54 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>
              </a>
            )}
          </div>
        </div>
      </div>

    </footer>
  );
}
