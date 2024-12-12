import Link from 'next/link';
import { ThemeToggleButton } from '@entities/theme/ThemeToggleButton';

export default function Home() {
  return (
    <div>
      <ThemeToggleButton />
      <div>MapleStory</div>
      <div className={'mt-10 bg-primary-2'}>
        <Link href={'/mabinogi/auction'}>Mabinogi</Link>
      </div>
    </div>
  );
}
