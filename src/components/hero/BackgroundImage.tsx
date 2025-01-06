interface ImageBackgroundProps {
  children: React.ReactNode
  src: string | undefined
}

export const ImageBackground = ({ children, src }: ImageBackgroundProps) => {
  const style = {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  }
  return (
    <div className="relative" style={style}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="w-full h-full z-10 shadow-myshahero"> {/* Contenido por encima del overlay */}
        {children}
      </div>
    </div>
  )
}