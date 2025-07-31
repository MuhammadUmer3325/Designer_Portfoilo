import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, projectType, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !projectType || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Check if email password is set
    if (!process.env.EMAIL_PASSWORD) {
      console.error('EMAIL_PASSWORD not set in environment variables')
      return NextResponse.json(
        { success: false, message: 'Email configuration error' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'info.artathlete@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      }
    })

    // Verify transporter
    await transporter.verify()

    // Email content
    const mailOptions = {
      from: 'info.artathlete@gmail.com',
      to: 'info.artathlete@gmail.com',
      subject: `New Contact Form Submission - ${projectType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Sent from Art_Athlete contact form</small></p>
      `
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)

    return NextResponse.json({ success: true, message: 'Email sent successfully!' })
  } catch (error) {
    console.error('Email error details:', error)
    
    // More specific error messages
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { success: false, message: 'Email authentication failed. Please check your app password.' },
        { status: 500 }
      )
    } else if (error.code === 'ECONNECTION') {
      return NextResponse.json(
        { success: false, message: 'Connection failed. Please try again.' },
        { status: 500 }
      )
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }
  }
} 