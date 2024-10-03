import { lusitana } from "@/components/ui/fonts";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BsLightningCharge } from "react-icons/bs";
import { CheckIcon } from "lucide-react";
import { TypographyH1 } from "./price-heading";


type CardProps = React.ComponentProps<typeof Card>

export function Cards({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px] h-[520px]", className)} {...props}>
      <CardHeader className="flex flex-col items-center justify-center space-y-0 pb-5">
        <CardTitle className="text-2xl font-bold pb-3">
            <div className="flex items-center justify-center border-4 rounded-full w-10 h-10  bg-blue-50">
                <BsLightningCharge className="text-blue-500" />
            </div>
        </CardTitle>
        <CardDescription className={`${lusitana.className} text-blue-700`}>Basic Plan</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
          <div className=" flex flex-col justify-center items-center">
             <TypographyH1 
             title="$1500/mth"
             />
            <p className="text-sm text-muted-foreground">
               Billed annually.
            </p>
        </div>
        <div className="rounded w-32 h-8 text-red-400 bg-red-50 flex justify-center items-center">
             <span className="text-sm">Limited features</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}
