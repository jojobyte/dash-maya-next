'use client';

import { useState, } from 'react'
import Script from 'next/script'

export default function ClientComponent() {
  const [wif, setWif] = useState(null)

  return (
    <>
      <Script
        src="https://unpkg.com/@dashincubator/secp256k1@1.x/secp256k1.js"
        onLoad={() => {
          console.log('secp256k1 loaded')
        }}
      />
      <Script
        src="https://unpkg.com/dashkeys@1.x/dashkeys.js"
        onLoad={() => {
          let wifData
          console.log('DashKeys loaded', window.DashKeys)
          window.DashKeys.utils.generateWifNonHd()
            .then(data => {
              setWif(data)
              console.log('DashKeys wif', data)
            })
        }}
      />
      <h1>{wif}</h1>
    </>
  );
}