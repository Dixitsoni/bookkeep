import React from 'react';

export default function OurConsultant() {
    return (
        <div className='my-10 relative'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#061835] z-1 opacity-[.9]'></div>
            <div className='bg-fixed bg-[url(/images/cheer_person_meeting.jpg)] bg-cover h-[500px] pt-20 flex flex-col justify-center items-center space-y-6'>
                <div>
                    <h2 className='text-4xl z-2 relative font-bold text-white text-center mb-4'>Still Confused About Our Features? Get A Consultation</h2>
                </div>
                <div>
                    <p className='text-white z-2 relative text-center max-w-2xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='mt-4'>
                    <button className='bg-teal-500 z-2 relative hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-sm shadow'>Contact Us</button>
                </div>
            </div>

        </div>
    )
}