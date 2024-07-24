import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';
import { ApiResponse } from '@/types/ApiResponse';

export async function POST(request: Request) {
    await dbConnect();
    try {
        const { username, email, password } = await request.json();
    } catch (e) {
        console.error('Error registering the user', e);
        return Response.json(
            {
                success: false,
                message: 'Error registering the user',
            },
            {
                status: 500,
            },
        );
    }
}
