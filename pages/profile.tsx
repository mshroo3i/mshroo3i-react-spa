import React from 'react';
import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Layout, siteTitle } from "../components/Layout";

type ProfileProps = { user: UserProfile };

export default function Profile({ user }: ProfileProps) {
  return (
    (
      <Layout>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <code><pre>{JSON.stringify(user, null, 2)}</pre></code>
        </div>
      </Layout>
    )
  );
}

export const getServerSideProps = withPageAuthRequired();