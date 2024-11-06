/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/rFbs3weDYvB
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MyMainPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Bem-vindos à Galo da Madrugada Store!
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Exclusivo para a Galera do TDC Summit AI Recife 2024
              </p>
            </div>

            
              

            <div className="w-full max-w-sm space-y-2">
              
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                
            </div>

            <div className="w-full max-w-sm space-y-2">
                <Link href="/products" className="w-full" prefetch={false}>
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Veja as ofertas!
                  </Button>
                </Link>
              </div>


          </div>
          <img
            src="/galo-capa.png"
            width="550"
            height="310"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
            />
        </div>
      </div>

        <footer className="text-center py-4 bg-gray-100 text-sm text-gray-600">
        Made for the DevRel Team
      </footer>
      
    </section>

    

  )
}
