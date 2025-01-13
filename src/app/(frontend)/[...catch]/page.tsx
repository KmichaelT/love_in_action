import { notFound } from 'next/navigation'

export default function NotFound() {
  console.warn('catch all route triggered not found');
  notFound();
}
