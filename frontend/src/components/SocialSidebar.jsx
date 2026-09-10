import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';
import './SocialSidebar.css';

const socialLinks = [
  { icon: FaWhatsapp, href: 'https://wa.me/6281121111522?text=Info', label: 'WhatsApp', color: '#25D366' },
  { icon: FaInstagram, href: 'https://www.instagram.com/pa.kotacimahi/', label: 'Instagram', color: '#E4405F' },
  { icon: FaYoutube, href: 'https://www.youtube.com/channel/UCEEumbm787379_CQ9AQblCg', label: 'YouTube', color: '#FF0000' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/share/1CcnHbJVdC/?mibextid=wwXIfr', label: 'Facebook', color: '#1877F2' },
];

function SocialSidebar() {
  return (
    <aside className="social-sidebar">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-sidebar__link"
            aria-label={social.label}
            title={social.label}
            style={{ '--hover-color': social.color }}
          >
            <Icon />
          </a>
        );
      })}
    </aside>
  );
}

export default SocialSidebar;
