import { notFound } from 'next/navigation';

// TODO: Check if this page is cached and will bloat the cache. Maybe redirects are better
// For the moment we add force-dynamic and hope it will avoid caching
export const dynamic = 'force-dynamic';

export default function NotFound() {
  console.warn('catch all route triggered not found');
  notFound();
}
