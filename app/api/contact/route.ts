import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Check if Resend API key is set
    if (!process.env.RESEND_API_KEY) {
      console.log('RESEND_API_KEY not set - using test mode')
      console.log('Form submission received:', { firstName, lastName, email, projectType, message })
      
      // Return success for testing (without actually sending email)
      return NextResponse.json({ 
        success: true, 
        message: 'Test mode: Form submitted successfully! (Email not sent - API key needed)' 
      })
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Art_Athlete <noreply@artathlete.com>',
      to: ['info.artathlete@gmail.com'],
      subject: `New Contact Form Submission - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #007bff;">Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 10px 0;"><strong style="color: #007bff;">Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #007bff;">Project Type:</strong> ${projectType}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
          <p style="text-align: center; color: #6c757d; font-size: 14px;">
            Sent from Art_Athlete contact form
          </p>
        </div>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)
    return NextResponse.json({ success: true, message: 'Email sent successfully! We\'ll get back to you soon.' })

  } catch (error) {
    console.error('Email error details:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
} 