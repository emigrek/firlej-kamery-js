import { ArrowDownIcon } from '@heroicons/react/solid'

function HelperDown() {
  return (
    <div className="absolute bottom-0 left-0 right-0 text-center z-50 h-48 bg-gradient-to-t from-[#00000077] to-transparent">
        <div className='flex my-10 w-full items-center justify-center'>
            <div className='relative h-16 w-16 animate-bounce text-white'>
                <ArrowDownIcon/>
            </div>
        </div>
    </div>
  )
}

export default HelperDown