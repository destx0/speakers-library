import React from 'react';
import {
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';
import { ShareButtonStyles } from '../styles/buttons/ShareButtonStyles';

const ShareButtons = ({ title, url }) => (
  <ShareButtonStyles>
    <FacebookShareButton url={url} label="facebook">
      <FacebookIcon size={40} borderRadius={19} />
    </FacebookShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon size={40} borderRadius={19} />
    </WhatsappShareButton>
    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={40} borderRadius={19} />
    </TwitterShareButton>
    <TelegramShareButton url={url} title={title}>
      <TelegramIcon size={40} borderRadius={19} />
    </TelegramShareButton>
    <EmailShareButton url={url} title={title}>
      <EmailIcon size={40} borderRadius={19} i />
    </EmailShareButton>
  </ShareButtonStyles>
);
export default ShareButtons;
