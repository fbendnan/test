import { MdOutlineEmail } from "react-icons/md";
import TopRating from "./TopRating";


function SignUp(){
    return(
        <div className="grid grid-cols-2 mt-20 mb-30 mx-16 gap-8">
            <div>
                <h1 className="font-bold text-2xl text-gray-800">SING UP FOR THE NEWSLETTER</h1>
                <p className="font-light">Subscribe for the latest stories and promotions</p>
            </div>
            <div className="border flex justify-between align-center">
                <input type="email" placeholder="Enter your e-mail adress" className="pl-4"></input>
                <button className="bg-black/90 px-6">
                    <MdOutlineEmail className="text-2xl text-white" />
                </button>
            </div>
        </div>
    )
}

export default SignUp;