import React from 'react';
import { TypographyH1 } from '../components/heading';
import { ButtonMonthly } from '@/components/buttons';
import { Cards } from '@/components/cards';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="flex flex-col items-center justify-center">
        <TypographyH1 />
        <div>
           <ButtonMonthly />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Cards/>
      </div>
    </div>
  );
}
