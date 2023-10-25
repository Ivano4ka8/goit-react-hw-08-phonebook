import { Link } from 'react-router-dom';
import { TbError404 } from 'react-icons/tb';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <TbError404 size="80px" />
      <p>
        <Link to="/">GO TO HOME </Link>
      </p>
    </div>
  );
}
