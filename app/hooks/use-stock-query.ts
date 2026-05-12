import { useQuery } from "@tanstack/react-query";

const fetchStocks = async () => {
    const res =  await fetch("/api/stock")
    const data = await res.json()
    return data
}

export const useStockQuery = () => {
   return useQuery({
    queryKey: ["stocks"],
    queryFn: fetchStocks,
    retry: false,
    refetchInterval: 20000
   }) 
}
