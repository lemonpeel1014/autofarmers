import { NextRequest } from 'next/server';

const cache: Record<string, number> = {};

export async function GET(req: NextRequest) {
  const tokenId = req.nextUrl.searchParams.get('tokenId');
  const address = req.nextUrl.searchParams.get('address');
  if (!tokenId || !address) {
    throw new Error('Token price not found for the given address');
  }

  if (cache[`${tokenId}&${address}`]) {
    return Response.json({ price: cache[`${tokenId}&${address}`] });
  }

  const url = `https://pro-api.coingecko.com/api/v3/simple/token_price/solana?contract_addresses=${address}&vs_currencies=usd`;
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-cg-pro-api-key': process.env.COINGECKO_API_KEY!,
    },
  });

  if (!resp.ok) {
    throw new Error(await resp.text());
  }

  const data = await resp.json();
  const price = data[address]?.usd;
  if (!price) {
    throw new Error('Token price not found');
  }

  return Response.json({ price: price as number });
}
