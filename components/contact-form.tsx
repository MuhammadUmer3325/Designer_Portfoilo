import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">First Name</label>
            <Input placeholder="Your first name" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Last Name</label>
            <Input placeholder="Your last name" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Email</label>
          <Input type="email" placeholder="your.email@example.com" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Project Type</label>
          <Input placeholder="Banner, Logo, Mascot, etc." />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Message</label>
          <Textarea placeholder="Tell me about your project requirements..." className="min-h-[120px]" />
        </div>
        <Button className="w-full">Send Message</Button>
      </CardContent>
    </Card>
  )
}
