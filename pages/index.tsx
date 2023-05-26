import Head from 'next/head'
//Components
import { BackgroundImg, BackgroundImg2, FooterCon, FooterLink, GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElement'
//Assets
import Cloud from '../assets/k.png'
import Pink from '../assets/p.png'
import { useState } from 'react'


export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0)
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="A project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Background*/ }
      <GradientBackgroundCon>
        <BackgroundImg
        src={Cloud}
        height="300"
        alt="cloudy background"
        />
        <BackgroundImg2
        src={Pink}
        height="500"
        alt="cloudy background"
        />
        <FooterCon>
          <>
          Quotes Generated:{numberOfQuotes}
          <br />
          Developed with ❤️ by <FooterLink
            href="https://github.com/silvideastora"
            target="_blank"
            >
              Silvi Rodriguez
          </FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  )
}
