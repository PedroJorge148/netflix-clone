interface NavbarItemProps {
  label: string
}

export function NavbarItem({ label }: NavbarItemProps) {
  return (
    <div className="text-white text-sm font-medium cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  )
}