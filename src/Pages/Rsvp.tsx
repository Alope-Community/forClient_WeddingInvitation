import React from 'react'
import Header from '../Components/Header'
import MenuBar from '../Components/MenuBar'

const Rsvp = () => {
    return (
        <>
            <Header
                mainTitle='REPLY TO THE HEADLINE'
                subtitle="RSVP & LET LOVE KNOW YOU'RE COMING"
            />

            <div className="font-serif text-center pt-5">
                <h2 className="text-xl font-bold border-t border-b py-2 mb-4 tracking-wider">RSVP & GREETING</h2>
            </div>

            <MenuBar />
        </>
    )
}

export default Rsvp