interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative bg-[url('/images/header-background.jpg')] bg-cover bg-center py-20">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-screen-xl px-8 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        {description && <p className="mx-auto max-w-2xl text-xl text-gray-300">{description}</p>}
      </div>
    </div>
  )
}
