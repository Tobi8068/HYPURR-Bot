import { TokenCard } from '../components/TokenCard';
import { TokenTable } from '../components/TokenTable';
import { tokens, tableData } from '../data/tokens';

export function Explore() {
  return (
    <div className="flex flex-col h-full w-[95%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tokens.map(token => (
          <TokenCard key={token.pair} {...token} />
        ))}
      </div>
      <TokenTable data={tableData} />
    </div>
  );
}