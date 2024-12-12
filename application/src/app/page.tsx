import Link from 'next/link';
import { ThemeToggleButton } from '@entities/theme/ThemeToggleButton';
import { NoticeView } from '@features/maplestory';

export default function Home() {
  return (
    <div>
      <ThemeToggleButton />
      <div>MapleStory</div>
      <div className={'mt-10 bg-primary-2'}>
        <Link href={'/mabinogi/auction'}>Mabinogi</Link>
      </div>
      <NoticeView />
    </div>
  );
}
