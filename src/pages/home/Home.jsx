import React from 'react';
import CurrencyWidget from './widgets/CurrencyWidget';

export default function Home({ title }) {
  return (
    <>
      <h1>{title}</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <CurrencyWidget title="Bitcoin" value="$5252.25"/>
        <CurrencyWidget title="Ethereum" value="$845.25"/>
        <CurrencyWidget title="Pi" value="$2525.25"/>
      </div>
    </>
  );
}
