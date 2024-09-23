const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <section className="mt-10 max-w-[800px]">
            <div className="flex flex-col justify-center items-center mx-auto text-center p-8">
            <p className="text-white text-[14px] text-center">
                Copyright © {year} -
                <a
                    className="hover:text-[#007ced] duration-300 underline-offset-2 underline"
                    href="https://github.com/1deyce"
                    target="_blank"
                    rel="noreferrer"
                >
                    {" "}   
                    1deyce
                </a>
                . All Rights Reserved.
            </p>
            </div>
        </section>
    )
}

export default Footer;