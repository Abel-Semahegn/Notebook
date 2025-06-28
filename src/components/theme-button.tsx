import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isSpinning, setIsSpinning] = useState(false)

  const toggleTheme = () => {
    setIsSpinning(true)
    
    // Toggle between light and dark (defaults to dark)
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    
    // Reset spinning animation after it completes
    setTimeout(() => setIsSpinning(false), 500)
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className={`transition-transform duration-500 ${isSpinning ? 'animate-spin' : ''} hover:cursor-pointer`}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}