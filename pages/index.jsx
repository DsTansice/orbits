import Head from 'next/head'
import Navbar from "../components/navbar.component"
import CustomInput from "../components/custominput.component"
import {useState} from "react";
import addEmail from "../utils/add_email.js";
import { useToasts} from 'react-toast-notifications'
export default function Home() {
  const [email,setEmail]=useState("")
  const { addToast } = useToasts()
  return (
    <div>
      <Head>
        <meta name="description" content="Learn about space, cosmos & rockets with orbits." />
        <meta name="title" content={`Orbits | Space Unlocked`} />
        <meta name="image" content="/favicon.png" />
        <meta property="og:title" content={`Orbits | Space Unlocked`} />
        <meta property="og:description" content="Learn about space, cosmos & rockets with orbits/" />
        <meta property="og:image" content="/favicon.png" />
        <title>Orbits</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div id="level-1" className="relative h-screen p-8 text-white">
          <Navbar/>
            <div id="child" class="w-11/12">
              <div className="md:pl-12 lg:pl-12">
              <div className="font-bold lg:text-6xl md:text-6xl mx-auto lg:mx-0 md:mx-0 text-white pt-20 md:pt-28 lg:pt-28 mr-12 text-4xl">fascinated about <br/>space?</div>
              <div className="font-semibold text-white mx-auto lg:mx-0 md:mx-0 text-white pt-6">learn about space, cosmos & rockets with <span class="accent cursor-pointer">orbits.</span></div>
              <CustomInput
                handler={async (e)=>{
                e.preventDefault();
                let res=await addEmail(email);
                console.log(email+" resgistered!")
                addToast("Wosh! that email went by the speed of light, though we caught it!", {
                    appearance: 'success',
                    autoDismiss: true,
                  })
              }}
                inputhandler={(e)=>{
                  setEmail(e.target.value)
                  console.log(e.target.value)
                }}
                type="email" classextend="pb-none mx-auto lg:mx-0 md:mx-0 text-white pt-14" placeholder="enter your email" title="notify me"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
