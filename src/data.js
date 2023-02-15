import React from 'react';
import {
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/dashboard',
    text: 'dashboard',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/courses',
    text: 'courses',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/resources',
    text: 'resourses',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/account',
    text: 'account',
    icon: <FaWpforms />,
  },
];

// export const social = [
//   {
//     id: 1,
//     url: 'https://www.twitter.com',
//     icon: <FaFacebook />,
//   },
//   {
//     id: 2,
//     url: 'https://www.twitter.com',
//     icon: <FaTwitter />,
//   },
//   {
//     id: 3,
//     url: 'https://www.twitter.com',
//     icon: <FaLinkedin />,
//   },
//   {
//     id: 4,
//     url: 'https://www.twitter.com',
//     icon: <FaBehance />,
//   },
//   {
//     id: 5,
//     url: 'https://www.twitter.com',
//     icon: <FaSketch />,
//   },
// ];
