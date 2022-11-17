import Link from 'next/link';
import { HeaderBox } from './style';

export default function Header() {
  return (
    <HeaderBox>
      <h1>
        <Link
          href={{
            pathname: '/',
          }}
        >
          <strong>💰 Group Account Book</strong>
        </Link>
      </h1>
      <Link
        href={{
          pathname: '/join',
          // query: { name: 'ahyoung' },
        }}
      >
        JOIN
      </Link>
    </HeaderBox>
  );
}
