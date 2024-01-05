import React from "react";


function About() {

    return(<>
    <div className="w-full h-full bg-[#f7b0a1]">
        <div className="flex justify-center items-center w-[1600px] h-screen m-[auto]">
            <div className="px-10">
                <p className="font-Roboto px-10 font-normal xs:leading-[1.2] xs:text-[1.7rem] text-[#000000]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
                    Ut interdum velit nec faucibus elementum. Aenean feugiat,<br></br>
                    velit nec blandit accumsan, mauris nibh fermentum eros, in<br></br>
                    consectetur ligula felis et justo. Integer molestie dui nec<br></br>
                    lobortis tempor. Nunc posuere sapien iaculis purus feugiat,<br></br>
                    nec condimentum nibh dignissim.
                </p>
                <p className="font-Roboto px-10 pt-10 font-normal xs:leading-[1.2] xs:text-[1.7rem] text-[#000000]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
                    Ut interdum velit nec faucibus elementum. Aenean feugiat,<br></br>
                    velit nec blandit accumsan, mauris nibh fermentum eros, in<br></br>
                    consectetur ligula felis et justo. Integer molestie dui nec<br></br>
                    lobortis tempor. Nunc posuere sapien iaculis purus feugiat,<br></br>
                    nec condimentum nibh dignissim.
                </p>
            </div>
            <div className="px-10">
                <img className="w-[600px]" src="../manuelImage1.jpg"></img>
            </div>
        </div>
    </div>
    </>)
}

export default About;