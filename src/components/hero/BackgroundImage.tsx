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
    <div style={style}>
      {children}
    </div>
  )
}