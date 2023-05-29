import Head from 'next/head'
//Components
import { BackgroundImg, BackgroundImg2, FooterCon, FooterLink, GenerateQuoteBtn, GenerateQuoteBtnText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from '@/components/QuoteGenerator/QuoteGeneratorElement'
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
      {/* Quote generator Modal Pop-up */ }

      {/* Quote generator*/}
      <QuoteGeneratorCon>
      <QuoteGeneratorInnerCon>
        <QuoteGeneratorTitle>
          Daily Inspiration:
        </QuoteGeneratorTitle>
        
        <QuoteGeneratorSubTitle>
          Buscando una pincelada de inspiración? Genera una card con una frase random
          inspiracional provista por <FooterLink href="https://zenquotes.io/" target='_blank' rel='noopener noreferrer'>
            Zenquotes API
          </FooterLink>
        </QuoteGeneratorSubTitle>

        <GenerateQuoteBtn>
          <GenerateQuoteBtnText>
            Dame una frase!
          </GenerateQuoteBtnText>
        </GenerateQuoteBtn>
      </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>
      {/*Background Images */}
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
        
        {/*Footer container */}
        
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
