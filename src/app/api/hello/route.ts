// import nodemailer from "nodemailer";
import mail from "../../../../utils/email";
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return new NextResponse('Hello, Next.js!')
}
