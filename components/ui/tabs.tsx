"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const listRef = React.useRef<HTMLDivElement>(null)
  const [indicatorPosition, setIndicatorPosition] = React.useState({ left: 0, opacity: 0 })

  React.useEffect(() => {
    const updateIndicator = () => {
      if (listRef.current) {
        const activeTab = listRef.current.querySelector('[data-state="active"]')
        if (activeTab) {
          const { offsetLeft, offsetWidth } = activeTab as HTMLElement
          setIndicatorPosition({
            left: offsetLeft + offsetWidth / 2,
            opacity: 1
          })
        }
      }
    }

    // Initial position
    updateIndicator()

    // Observe changes to data-state attribute
    const observer = new MutationObserver(updateIndicator)
    if (listRef.current) {
      observer.observe(listRef.current, {
        attributes: true,
        subtree: true,
        attributeFilter: ['data-state']
      })
    }

    // Update on window resize
    window.addEventListener('resize', updateIndicator)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateIndicator)
    }
  }, [])

  return (
    <TabsPrimitive.List
      ref={listRef}
      data-slot="tabs-list"
      className={cn(
        "relative inline-flex h-[45px] md:h-[50px] items-center justify-center rounded-sm p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37",
        className
      )}
      {...props}
    >
      {children}
      <div
        className='w-2 h-2 bg-white absolute rounded-full bottom-1 transition-all duration-500 ease-in-out pointer-events-none'
        style={{
          left: `${indicatorPosition.left}px`,
          transform: 'translateX(-50%)',
          opacity: indicatorPosition.opacity
        }}
      />
    </TabsPrimitive.List>
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative cursor-pointer bg-[#0B0D22] text-[#C1C2D3] inline-flex h-full flex-1 items-center justify-center px-4 py-2 text-[10px] md:text-sm capitalize font-medium whitespace-nowrap transition-all hover:text-white data-[state=active]:text-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("w-full flex justify-center", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
