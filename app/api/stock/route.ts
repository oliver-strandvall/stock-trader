export async function GET() {
  //alla aktier som vi vill hämta data för
  const symbols = ["NOKIA.HE", "KNEBV.HE", "UPM.HE", "AALLON.HE", "AKTIA.HE", "ALMA.HE", "APETIT.HE", "BITTI.HE", "BOREO.HE", "ELISA.HE", "HARVIA.HE", "FIA1S.HE" ];
  //hämta data för varje aktie parallellt
  const results = await Promise.all(
    symbols.map(async (symbol) => {
      const res = await fetch(
        `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1m&range=1d`,
      );
      const data = await res.json();
      const result = data.chart?.result?.[0];
      // Returnerar ett förenklat objekt med bara det vi behöver
      return {
        name: result.meta.longName,
        price: result?.meta?.regularMarketPrice ?? null,
        previousClose: result?.meta?.previousClose ?? null,
        currency: result?.meta?.currency ?? "EUR",
        symbol: result?.meta?.symbol ?? symbol,
      };
    }),
  );

  return Response.json(results);
}