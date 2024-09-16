import { RiMailAddFill } from "react-icons/ri";

const Contact = () => {
    return (
        <section className="mt-20 max-w-[800px]">
            <div className="flex flex-col justify-center items-center mx-auto text-center">
                <h1 className="font-medium text-4xl text-white uppercase mb-10 text-center">Get in Touch</h1>
                <p>I’d love to connect! If you have any questions or would like to discuss opportunities, please send me an email, and I’ll respond as soon as I can. Looking forward to hearing from you!</p>
                <br />
                <p className="italic text-[#007ced] flex"><RiMailAddFill className="h-6 w-6 flex mr-2" /> keenandeyce@gmail.com</p>
                <a href="mailto:keenandeyce@gmail.com" className="inline-block px-6 py-3 my-10 text-white uppercase font-medium tracking-wider hover:bg-gray-900">
                    Send Email
                </a>
            </div>
        </section>
    )
}

export default Contact;