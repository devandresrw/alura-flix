import ThemeSwitch from '@/components/utils/ThemeSwitch'

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-mybgwhite
    dark:bg-mybgblack px-4 py-2 shadow-myshado h-[10vh]">
      <div className='w-full max-w-7xl flex justify-between items-center'>
        <div className="">
          <h1 className="font-allura text-[clamp(1rem,2vw,4rem)]">Aluraflix</h1>
        </div>
        <div className="">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}