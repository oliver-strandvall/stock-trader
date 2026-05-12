"use client"

import React from 'react'
import { useStockQuery } from '@/app/hooks/use-stock-query'

export default function ListStocks() {
  const {data:stocks, isPending, isError} = useStockQuery()
  if(isPending) {
    return "Loading..."
  }
  if(isError) {
    return ( 
      <p className='text-red-500'>Error fetching stocks</p>
    )
  }
  return (
    <div>
        {stocks.map((s: any) => (
            <div key={s.symbol} className='flex justify-between pt-2 pb-2 items-center'>
              <div>
                <h1>{s.name}</h1>
                <p className='text-sm text-gray-500'>{s.symbol}</p>
              </div>
              <div>
                <p>{s.price}</p>
              </div>
            </div>
        ))}
    </div>
  )
}
