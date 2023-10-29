import {Metadata} from 'next';
import {ReactNode} from 'react';

export const metadata: Metadata = {
  title: 'Pinchia Chen | GeoRush',
  description: 'GeoRush',
  applicationName: 'A running game that was made by Unity on WebGL',
  authors: {
    name: 'Pinchia Chen',
  },
  keywords: ['GeoRush', 'Unity', 'C#', 'Game', 'WebGL'],
};

export default function RootLayout({children}: {children: ReactNode}) {
  return children;
}
