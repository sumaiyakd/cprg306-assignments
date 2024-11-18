"use client";
import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        {!user ? (
          <div>
            <h1 className="text-3xl font-bold mb-5">Welcome to Our App</h1>
            <button 
              onClick={gitHubSignIn}
              className="bg-blue-500 px-4 py-2 rounded text-white">
              Login with GitHub
            </button>
          </div>
        ) : (
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button 
              onClick={firebaseSignOut}
              className="bg-red-500 px-4 py-2 rounded mt-4">
              Logout
            </button>
            <div className="mt-4">
              <Link href="/week-9/shopping-list">
                <a className="text-blue-300 underline">Go to Shopping List</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
