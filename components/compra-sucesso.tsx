/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/qzgglip48vi
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
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export function CompraSucesso() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 md:p-8">
      <div className="flex flex-col items-center gap-2">
        <img
          src="/capystore.png"
          alt="Square image"
          width={100}
          height={100}
          className="aspect-square rounded-full"
        />
        <CircleCheckIcon className="size-12 text-green-500" />
        <h1 className="text-2xl font-bold">Compra realizada com sucesso!</h1>
        <p className="text-muted-foreground">Obrigado pela sua compra.</p>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Resumo da Compra</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <div className="font-semibold">Itens Adquiridos</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                  Meditacao da Capivara x <span>1</span>
                  </span>
                  <span>$99.00</span>
                </li>
              </ul>
            </div>
            <Separator />
            <div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>$99.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Frete</span>
                <span>$5.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Impostos</span>
                <span>$1.00</span>
              </div>
              <div className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>$105.00</span>
              </div>
            </div>
            <Separator />
            <div>
              <div className="font-semibold">Forma de Pagamento</div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <div className="h-4 w-4" />
                Visa **** **** **** 4532
              </div>
            </div>
            <Separator />
            <div>
              <div className="font-semibold">Endereço de Entrega</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                <span>UniAcademia - DevOpsDaysJuizdeFora</span>
                <span>Rua Halfeld, 1179 Centro</span>
                <span>Juiz de Fora, MG</span>
              </address>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Voltar à Loja
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
