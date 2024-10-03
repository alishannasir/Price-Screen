

interface MyComponentProps {
    title: string;
  }




export function TypographyH1({ title }: MyComponentProps) {
    return (
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
       {title}
      </h1>
    )
  }
  