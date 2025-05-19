import { useTranslation } from 'react-i18next';
import badgePlayFr from '@/assets/store-badges/GetItOnGooglePlay_Badge_Web_color_French.png';
import badgePlayEn from '@/assets/store-badges/GetItOnGooglePlay_Badge_Web_color_English.png';
import badgeAppFr from '@/assets/store-badges/Download_on_the_App_Store_Badge_FR_RGB_blk_100517.svg';
import badgeAppEn from '@/assets/store-badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

interface StoreBadgesProps {
  className?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  logoSize?: 'small' | 'large';
  onPlayClick?: () => void;
  onAppClick?: () => void;
}

const StoreBadges = ({
  className = '',
  playStoreUrl = 'https://play.google.com/store/apps/details?id=com.bvic.sporttrackmerger',
  appStoreUrl = 'https://apps.apple.com/app/sport-track-merger/id6736858288',
  logoSize = 'large',
  onPlayClick,
  onAppClick,
}: StoreBadgesProps) => {
  const { i18n } = useTranslation();
  const isFr = i18n.language === 'fr';
  const badgePlay = isFr ? badgePlayFr : badgePlayEn;
  const badgeApp = isFr ? badgeAppFr : badgeAppEn;
  const logoWidth = logoSize === 'small' ? 'w-37' : 'w-52';
  const logoHeight = logoSize === 'small' ? 'h-10' : 'h-14';

  return (
    <div className={`gap-4 ${className}`}>
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onPlayClick}
        className={`${logoWidth} ${logoHeight} flex items-center justify-center hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
      >
        <img
          src={badgePlay}
          alt={isFr ? 'Disponible sur Google Play' : 'Get it on Google Play'}
          className="h-full w-auto"
        />
      </a>
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onAppClick}
        className={`${logoWidth} ${logoHeight} flex items-center justify-center hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
      >
        <img
          src={badgeApp}
          alt={isFr ? "Télécharger dans l'App Store" : 'Download on the App Store'}
          className="h-full w-auto"
        />
      </a>
    </div>
  );
};

export default StoreBadges; 