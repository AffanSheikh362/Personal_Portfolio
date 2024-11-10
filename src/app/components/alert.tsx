import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  
  export function AlertDialogDemo() {
    return (
      <div className="text-white">
        <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default"  className="bg-slate-900 text-white hover:bg-slate-900 border-none rounded-xl">Send Request</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Order Confirmation</AlertDialogTitle>
            <AlertDialogDescription>
            Please review your order details carefully. Click &apos;Yes&apos; to confirm and proceed with your request, or &apos;Cancel&apos; to make any changes.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel  className="rounded-xl">Cancel</AlertDialogCancel>
            <AlertDialogAction  className="bg-slate-900 text-white hover:bg-slate-900 border-none rounded-xl">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      </div>
    )
  }
  