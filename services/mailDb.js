const gDefaultMails = [
  {
    id: 'GXj93KOkqZoC',
    subject: '"Frontend Developer” in Tel Aviv, Israel',
    message:
      'Hello ,Further to your application to our new job opportunity as Front End Developer,  Could you fill this short form If you want more details about Travelfactory Group Thanks',
    from: 'Linkedin',
    to: 'me',
    sentAt: Date.now(),
    inbox: true,
    sent: false,
    important: false,
    read: true,
    trash: false,
    preMode: '',
    replays: [
      {
        id: 'rtgbnjuyt5',
        from: 'me',
        to: 'Linkedin',
        sentAt: Date.now(),
        message: 'Thanks for the opportunity, well keep in touch',
      },
    ],
  },
  {
    id: 'YTj93KOkq589',
    subject:
      'An Astronauts Guide: How SpaceTech and Research can Benefit Founders (Webinar) on Wednesday, April 29',
    message:
      'The technology and research being done in space is not only impressive but also extremely relevant to life here on Earth. Few people on the planet know this more than Nick Hague, an astronaut who has conducted three spacewalks and spent 203',
    from: 'me',
    to: 'Meetup.com',
    sentAt: Date.now(),
    inbox: false,
    sent: true,
    important: false,
    read: false,
    trash: false,
    preMode: '',
  },
  {
    id: 'YUIO5KOkq589',
    subject: 'Tools to stay productive and connected',
    message:
      'Prices are stated as of the date of this email. Prices and payments are subject to applicable taxes before programming credits. References to savings or sale prices are comparisons to Best Buy Canada regular prices except for Best Buy Marketplace™ products. Environmental handling fees may apply to certain products. Click here for more details.',
    from: 'BestBuy',
    to: 'me',
    sentAt: Date.now(),
    inbox: true,
    sent: false,
    important: true,
    read: false,
    trash: false,
    preMode: '',
  },
  {
    id: 'UOPMf5KOk589',
    subject: 'Your monthly dose of inspiration',
    message:
      'Want your own project designed by one of these sellers? Click on an image to get started. Hungry for more inspiration?',
    from: 'Fivver',
    to: 'me',
    sentAt: Date.now(),
    inbox: true,
    sent: false,
    important: true,
    read: false,
    trash: false,
    preMode: '',
  },
  {
    id: 'ypwb45KOk589',
    subject: 'Re-energize ⚡ your at-home workouts',
    message:
      'Please add underarmour@emails.underarmour.com to your address book.This email was sent to: MATAN3SH@GMAIL.COM*Shop now and get Free Standard Shipping on all orders over $75 for purchases from the CA website only. Minimum order amount must be met before shipping and handling charges or taxes are included. Under Armour reserves the right to cancel or modify this offer at any time.You are receiving this email because we believe you have given us permission to contact you with news, information, and promotional offers. You may opt out of receiving these emails by clicking the “Unsubscribe” link. Please do not respond to this email as this email address is not monitored.Under Armour Canada, U﻿L﻿C 16﻿9 E﻿nterpris﻿e B﻿lv﻿d, S﻿uite 5﻿0﻿0, Un﻿ionvil﻿le, O﻿N ﻿L6G 0﻿E﻿7Copyright© 2020 Under Armour, Inc. All Rights Reserved Under Armour Canada ULC is sending this message on behalf of Under Armour, Inc. as an advertisement for Under Armour products.10﻿20 Hul﻿l St. Baltim﻿ore, M﻿D 2﻿12﻿30',
    from: 'Under Armour',
    to: 'me',
    sentAt: Date.now(),
    inbox: true,
    sent: false,
    important: false,
    read: true,
    trash: false,
    preMode: '',
  },
  {
    id: 'ypwb45Kty843',
    subject: 'You now have unlimited collaborators in private repositories',
    message:
      'We introduced a few changes to make all of the core GitHub features free for everyone. Private repositories with unlimited collaborators are now available for all GitHub accounts, and we’re reducing prices for some of our paid plans.The detailsWe introduced a new GitHub Free plan for teams with unlimited collaborators in private repositories, 2,000 GitHub Actions minutes/month, and GitHub Community Support.You now have unlimited collaborators in private repositories as part of your GitHub Free plan.Monthly pricing for our Pro plan has been reduced from $7/month to $4/month.Monthly pricing for our paid Team plan has been reduced from $9/user to $4/user.Actions minutes and Packages storage will continue to be free for all public repositories',
    from: 'Github',
    to: 'me',
    sentAt: Date.now(),
    inbox: false,
    sent: false,
    important: false,
    read: true,
    trash: true,
    preMode: 'inbox',
  },
  {
    id: 'AAAHBKOkq589',
    subject: 'Your Amazon.com order #113-0576803-3093806',
    message:
      'Thank you for shopping with us. We’ll send a confirmation when your item ships.',
    from: 'Amazon',
    to: 'me',
    sentAt: Date.now(),
    inbox: true,
    sent: false,
    important: true,
    read: false,
    trash: false,
    preMode: '',
  },
];

function getDefaultData() {
  return gDefaultMails;
}

export default {
  getDefaultData,
};
