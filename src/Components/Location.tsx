import React from 'react'

interface LocationProps {
    width: string,
    height: string
}

const Location: React.FC<LocationProps> = ({ width, height }) => {
    return (
        <>
           
            <iframe 
            className='rounded-lg justify-center items-center content-center' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4290.451428549415!2d108.4764567!3d-6.960072099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f168999f5289b%3A0x82e5f55d2f541814!2sKuningan%20Islamic%20Center!5e1!3m2!1sid!2sid!4v1745600570310!5m2!1sid!2sid" 
            width={width} height={height} 
            style={{ border: 0 }} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
           />
        </>
    )
}

export default Location