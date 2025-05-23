import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      Home Page

      <SignedOut>
      <SignInButton>

      </SignInButton>
      </SignedOut>



      <SignedIn>
      <SignOutButton>

      </SignOutButton>
      </SignedIn>

    </div>
  )
}

export default HomePage
