import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AlertDialogDemo } from "./alert"

export function CardWithForm() {
  return (
    <div className="w-full flex justify-center items-center mb-20 ">
    <Card className="w-[90%] max-w-screen-sm bg-white shadow-md">
      <CardHeader>
        <CardTitle>Order Now</CardTitle>
        <CardDescription>Fill in the details below to get started with your projects.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" 
              className="rounded-lg "/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper" className="bg-white cursor-pointer">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Bootsrtap</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button  className="rounded-xl" variant="outline">Cancel</Button>
        <AlertDialogDemo/>

        {/* <Button  className="bg-slate-900 text-white hover:bg-slate-900 border-none rounded-xl">Send Request</Button> */}
      </CardFooter>
    </Card>
  
    </div>
  )
}
// onclick 
