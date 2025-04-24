import React from 'react'

interface LocationProps {
    width: string,
    height: string
}

const Location: React.FC<LocationProps> = ({width, height}) => {
    return (
        <>
            <iframe
                className='rounded-lg justify-center items-center content-center'
                // onMouseDown={}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4167033351105!2d108.47388177534818!3d-6.960072093040338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f168999f5289b%3A0x82e5f55d2f541814!2sKuningan%20Islamic%20Center!5e0!3m2!1sid!2sru!4v1745417895077!5m2!1sid!2sru"
                width={"80%"}
                height={height}
                loading="lazy"
            ></iframe>
        </>
    )
}

export default Location