'use server'

import {currentUser} from '@clerk/nextjs/server'

export const onAuthenticationUser = async ()=>{

    try{
        const user = await currentUser()
        if(!user){
            return {status:403}
        }
    
        // const existingUser = await db.user.findUnique({
        //     where:{
        //         clerkId:user.id,
        //     },
        // })
    } catch(error) {
        console.error(error);
    }
}