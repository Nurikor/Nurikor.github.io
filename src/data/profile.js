/**
 * Profile configuration
 * Change avatar, primary action links, and social links here.
 */
export const profileConfig = {
  name: 'Nurikor',
  avatar: 'public/img/NFWS.png',
  avatarAlt: 'Nurikor avatar',
  email: 'c4726069@gmail.com',

  // Primary action buttons below hero section
  primaryLinks: [
    {
      id: 'github',
      title: {
        en: 'GitHub',
        ru: 'GitHub'
      },
      url: 'https://github.com/nurikor',
      icon: 'public/img/github.svg'
    },
    {
      id: 'telegram',
      title: {
        en: 'Telegram Channel',
        ru: 'Telegram-канал'
      },
      url: 'https://t.me/Nurikor_Rondaev',
      icon: 'public/img/telegram.svg'
    }
  ],

  // Footer social media links
  socialLinks: [
    {
      id: 'telegram',
      label: 'Telegram',
      url: 'https://t.me/Nurikor_Rondaev',
      icon: 'public/img/telegram.svg'
    },
    {
      id: 'vk',
      label: 'VK',
      url: 'https://vk.com/Nurikor_Rondaev',
      icon: 'public/img/vk.svg'
    },
    {
      id: 'x',
      label: 'X (Twitter)',
      url: 'https://x.com/Nurikor_Rondaev',
      icon: 'public/img/x.svg'
    },
    {
      id: 'deviantart',
      label: 'DeviantArt',
      url: 'https://www.deviantart.com/Nurikor',
      icon: 'public/img/deviantart.svg'
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:c4726069@gmail.com',
      icon: 'public/img/mail.svg'
    }
  ]
};
