import { Button } from "@/components/ui/button"

export function ButtonMonthly() {
  return (
    <>
     <div className="flex flex-col sm:flex-row sm:gap-0 gap-5 justify-center items-center py-16">
     <Button
        variant="secondary"
        className="w-56 h-8 text-black hover:bg-transparent hover:text-blue-300 hover:border hover:border-blue-300"
      >
        Monthly
      </Button>
      <Button
        variant="secondary"
        className="w-56 h-8 text-black hover:bg-transparent hover:text-blue-300 hover:border hover:border-blue-300"
      >
        Yearly
      </Button>
     </div>
    </>
  )
}
