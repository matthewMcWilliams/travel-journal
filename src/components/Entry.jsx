export default function Entry({entry}) {

    let {img, title, country, googleMapsLink, dates, text} = entry

    return (
        <article className="flex mx-10 mb-9 gap-5 font-inter text-blue-text">
            <img src={img.src} alt={img.alt} className="w-32 h-44 rounded-md object-cover" />
            <div>
                <div className="flex mt-5 mb-1">
                    <img src="src/assets/location.png" className="w-[7px] h-[9.55px] mr-1 items-baseline" />
                    <p className="text-[10.24px] tracking-[0.17rem] leading-[10px] mr-3">{country}</p>
                    <a href={googleMapsLink} target="_blank" className="text-[10.24px] text-[#918E9B] underline underline-offset-[4px] leading-[10px]">View on Google Maps</a>
                </div>
                <h2 className="font-bold text-2xl mb-4">{title}</h2>
                <p className="font-bold text-xs leading-3 mb-2">{dates}</p>
                <p className="text-xs leading-4">{text}</p>
            </div>
        </article>
    )
}