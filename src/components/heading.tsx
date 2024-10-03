import React from 'react';
import { lusitana } from '@/components/ui/fonts';

export function TypographyH1() {
    return (
      <h1 className={`${lusitana.className} scroll-m-20 text-4xl font-light tracking-tight lg:text-5xl`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Flexible pricing</span> that matches your needs
      </h1>
    )
  }
  