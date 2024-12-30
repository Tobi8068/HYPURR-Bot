import { CabalCard } from '../components/CabalCard';
import { CabalTable } from '../components/CabalTable';
import { cabals, cabalTableData } from '../data/cabals';

export function Cabals() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cabals.map(cabal => (
          <CabalCard key={cabal.name} {...cabal} />
        ))}
      </div>
      <CabalTable data={cabalTableData} />
    </div>
  );
}