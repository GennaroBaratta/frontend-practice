'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export function NavigationComponent() {
  const pathname = usePathname()
  const isHome = pathname === '/home'
  const isProfile = pathname === '/profile'
  const isContact = pathname === '/contact'

  return (
    <nav className="fixed z-10 my-8">
      <div className="inline-flex gap-1 rounded-[100px] bg-gray-200/60 p-1 backdrop-blur-md">
        <Link
          href="/home"
          className={cn(
            'rounded-[100px] px-6 py-2.5 transition-colors duration-700',
            isHome ? 'bg-white' : 'bg-transparent'
          )}
        >
          Home
        </Link>
        <Link
          href="/profile"
          className={cn(
            'rounded-[100px] bg-transparent px-6 py-2.5 transition-colors duration-700',
            isProfile ? 'bg-white' : 'bg-transparent'
          )}
        >
          Profile
        </Link>
        <Link
          href="/contact"
          className={cn(
            'rounded-[100px] bg-transparent px-6 py-2.5 transition-colors duration-700',
            isContact ? 'bg-white' : 'bg-transparent'
          )}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
