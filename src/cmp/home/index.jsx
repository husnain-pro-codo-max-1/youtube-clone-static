import Layout from "../layout";

const Home = () => {
  return (
    <>
<Layout>

<div className="grid md:grid-cols-4 gap-5">
    {
            Array(30).fill(0).map((item,index)=>(
                <div key={index} className="flex flex-col gap-y-4">
                    <img src="/images/img5.jpg" className="rounded-lg"/>

                    <div className="flex gap-x-4">
                    <img src="https://yt3.ggpht.com/34iWjSG2HTPH6ZrbMgNm2rBZ1V2JFV0Mhqh0LRz-4io54KaVapieB0E08YoM6qWgwKS2vDtW=s68-c-k-c0x00ffffff-no-rj" alt=""
                      className="rounded-full w-10 h-10"/>
                      <div>
                      <h1 className="text-sm font-semibold mb-3">Building Youtube Clone With React Js And Tailwind Css In Urdu | Tailwind css tutorial in Urdu</h1>
                      
                        <div className="flex items-center gap-x-2 mb-1">
                        <p className="text-slate-500 text-xs">GEO NEWS</p>
                        <span className="material-icons"  style={{fontSize:16}}>check_circle</span>                        
                        </div>
                      
                        <div className="flex items-center gap-x-2">
                        <p className="text-slate-500 text-xs">120K View</p>
                        <p className="text-slate-500 text-xs">1 Day ago</p>
                        </div>
                      

                      </div>
                    
                    </div>
                
                </div>
            ))
    }
</div>

</Layout>

    </>
    )
}


export default Home;