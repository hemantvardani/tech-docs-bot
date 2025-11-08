
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authConfigs } from '@/auth';

export default async function Dashboard(){
    const session = await getServerSession(authConfigs);

    if(!session){
        redirect("api/auth/signin")
    }
    return <>
     Welcome {session.user?.name}
    </>
}