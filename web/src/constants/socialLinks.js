import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export const socialLinks = [
  {
    name: 'youtube',
    url: 'https://www.youtube.com/channel/UCrp3auXbbpWoFE3y4oJwuAg',
    icon: <FaYoutube />,
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/the_speaker_ind?igshid=YmMyMTA2M2Y=',
    icon: <FaInstagram />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/The-Speaker-100100148004919',
    icon: <FaFacebook />,
  },
  {
    name: 'email',
    url: 'mailto:contact@speakerslibrary.in',
    icon: <AiOutlineMail />,
  },
];
