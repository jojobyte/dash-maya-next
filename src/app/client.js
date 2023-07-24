'use client';

import { useState, useEffect } from 'react';
import DashKeys from 'dashkeys'

export default function ClientComponent() {
  const [wif, setWif] = useState(null)

  useEffect(() => {
    (async () => {
      console.log('DashKeys', DashKeys)
      let WIF = await DashKeys?.utils?.generateWifNonHd()
      setWif(WIF)
      console.log('DashKeys wif', WIF)
    })()
  }, [])

  return (
    <>
      <h1>{wif}</h1>
    </>
  );
}