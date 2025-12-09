import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'
import AdminDashboardClient from './AdminDashboardClient';

const AdminPage = async () => {

    //user not logged in
    const user = await currentUser();
    if(!user) redirect('/');

    const adminEmail = process.env.ADMIN_EMAIL;
    const userEmail = user.emailAddresses[0].emailAddress;

    //user not admin
    if(!adminEmail || adminEmail !== userEmail) redirect('/dashboard');

  return (
    <div>
      Welcome Back Boss, The Only Admin
      <AdminDashboardClient/>
    </div>
  )
}

export default AdminPage
