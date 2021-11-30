import React from 'react';
import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0';

type ProfileProps = { user: UserProfile };

export default function Profile({ user }: ProfileProps) {
  return (
    (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <code>{JSON.stringify(user, null, 2)}</code>
      </div>
    )
  );
}

export const getServerSideProps = withPageAuthRequired();