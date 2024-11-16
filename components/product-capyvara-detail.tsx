/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jxKZ77XWCOC
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Arimo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProductCapyvaraDetail() {
  return (
    <div>
      <header className="flex items-center justify-between bg-primary px-4 py-3 md:px-6">
        <div className="flex items-center space-x-4">
          <img src="/ilha-capa.png" width={40} height={40} alt="Logo" className="rounded-full" />
          <h1 className="text-lg font-bold text-primary-foreground">DevOps Tour Floripa</h1>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                Rapel na Costa da Lagoa
                </h1>
                <p className="max-w-[600px] text-secondary-foreground md:text-xl">
                Aventure-se em um rapel emocionante nas encostas da Costa da Lagoa, com vista panorâmica para a Lagoa da Conceição. Inclui equipamentos e instrutor.
                </p>
                <p className="max-w-[600px] text-secondary-foreground md:text-xl">
                $199.99
                </p>
                
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="/sucesso" className="w-full" prefetch={false}>
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Compre agora!
                  </Button>
                </Link>
              </div>
              

            </div>
            <img
              src="/ilha1.png"
              width="550"
              height="310"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
