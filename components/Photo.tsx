import { Photo as P, src, srcSet } from '@/lib/photos'

export function Img({
  photo, sizes = '(max-width: 700px) 100vw, 33vw', priority = false, className, ratio,
}: {
  photo: P
  sizes?: string
  priority?: boolean
  className?: string
  ratio?: string
}) {
  return (
    <img
      src={src(photo.slug, 800)}
      srcSet={srcSet(photo.slug)}
      sizes={sizes}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
      style={{
        backgroundImage: `url(${photo.lqip})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        aspectRatio: ratio,
        objectFit: ratio ? 'cover' : undefined,
      }}
    />
  )
}
