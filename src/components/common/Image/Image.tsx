import { ImageComponent } from '@/types/components'

const Image: React.FC<ImageComponent> = (props: ImageComponent) => {
    const { image, image_alt_text, className} = props  

    return <>
        {image?.url && <picture
            {...image?.$?.title}
        >
            <source media='(max-width: 475px)' srcSet={image.url} />
            <source media='(min-width: 476px) and (max-width: 640px)' srcSet={image.url} /> {/* xs */}
            <source media='(min-width: 641px) and (max-width: 767px)' srcSet={image.url} /> {/* sm */}
            <source media='(min-width: 768px) and (max-width: 1024px)' srcSet={image.url} /> {/* md */}
            <source media='(min-width: 1024px) and (max-width: 1279px)' srcSet={image.url} /> {/* lg */}
            <source media='(min-width: 1280px) and (max-width: 1535px)' srcSet={image.url} />{/* xl */}
            <source media='(min-width: 1536px)' srcSet={image.url} />{/* 2xl */}
            <img
                src={image.url}
                alt={image_alt_text !== '' ? image_alt_text : image?.title}
                className={className}
            />
        </picture>}
    </>
}

export { Image }