import { Anchor, Box } from '@codecademy/gamut';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@codecademy/gamut-icons';
import * as React from 'react';
import { FooterLinkItems } from '../FooterLinks';
import { jsx as _jsx } from "react/jsx-runtime";
var media = [{
  label: 'Follow us on Twitter',
  url: 'https://twitter.com/Codecademy',
  icon: TwitterIcon
}, {
  label: 'Like us on Facebook',
  url: 'https://codecademy.com/users/redirect?redirect_url=https://www.facebook.com/groups/codecademy.community',
  icon: FacebookIcon
}, {
  label: 'Follow us on Instagram',
  url: 'https://instagram.com/codecademy',
  icon: InstagramIcon
}, {
  label: 'Subscribe to Codecademy on YouTube',
  url: 'https://www.youtube.com/channel/UC5CMtpogD_P3mOoeiDHD5eQ',
  icon: YoutubeIcon
}];
export var SocialMediaLinks = function SocialMediaLinks() {
  return /*#__PURE__*/_jsx(FooterLinkItems, {
    "aria-label": "Social Media",
    children: media.map(function (_ref) {
      var label = _ref.label,
        url = _ref.url,
        IconComponent = _ref.icon;
      return /*#__PURE__*/_jsx(Box, {
        as: "li",
        display: "inline-block",
        children: /*#__PURE__*/_jsx(Anchor, {
          "aria-label": label,
          fontSize: 20,
          href: url,
          mr: 8,
          rel: "noopener noreferrer",
          target: "_blank",
          variant: "interface",
          children: /*#__PURE__*/_jsx(IconComponent, {})
        })
      }, label);
    })
  });
};