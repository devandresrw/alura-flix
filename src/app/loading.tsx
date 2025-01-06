export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-primary rounded-full animate-spin" />
        <p className="text-lg font-medium text-white">Cargando...</p>
      </div>
    </div>
  )
}