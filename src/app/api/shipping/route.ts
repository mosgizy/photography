import nodemailer  from 'nodemailer';
import { NextResponse } from "next/server";
import { shoppingFormI } from "../../../../resources/interfaces";

export async function POST(request: Request) {
    const data: shoppingFormI = await request.json() 
    
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD,
        },
        secure: false,
    })
    const mailData = {
        from: process.env.USER,
        to: data.email,
        subject: `Message From ${data.name}`,
        text: data.name + " | Sent from: " + data.email,
        html: `<div>${data.country}</div><p>Sent from:
        ${data.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    })
    
    console.log(data)

    return NextResponse.json(data)
}