/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/JZNOdNNrVf7
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

// Definindo a estrutura dos produtos
interface Product {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Substitua a URL pelo caminho do seu arquivo JSON
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  if (products.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 mx-[30px] md:mx-6">Produtos DevOps Tour Floripa</h1>
      <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6">
        {products.map(product => (
          <div key={product.nome} className="relative overflow-hidden rounded-lg group">
            <Link href="/details" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src={product.imagem}
              alt={product.nome}
              width={300}
              height={300}
              className="object-cover w-full aspect-square"
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">{product.nome}</h3>
              <p className="text-sm text-muted-foreground">{product.descricao}</p>
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold">${product.preco.toFixed(2)}</p>
                <Button size="sm">Shop</Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}