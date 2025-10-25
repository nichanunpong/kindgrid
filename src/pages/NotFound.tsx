import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const NotFound = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='text-center space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-8xl font-bold text-gradient'>404</h1>
          <h2 className='text-2xl font-semibold'>Page Not Found</h2>
          <p className='text-muted-foreground max-w-md mx-auto'>
            Oops! The page you're looking for doesn't exist. But don't worry,
            there's always kindness to spread!
          </p>
        </div>
        <Link to='/'>
          <Button variant='hero' size='lg'>
            <Heart className='w-5 h-5' />
            Back to Kindness Grid
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
