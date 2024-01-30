import { useState } from "react";

const menus = [
{label : 'home', icon: 'home'},
{label : 'shorts', icon: 'app_shortcut'},
{label : 'subscriptions', icon: 'loyalty'},
{label : 'music', icon: 'headphones'},

{label : 'home', icon: 'home'},
{label : 'shorts', icon: 'app_shortcut'},
{label : 'subscriptions', icon: 'loyalty'},
{label : 'music', icon: 'headphones'},


{label : 'home', icon: 'home'},
{label : 'shorts', icon: 'app_shortcut'},
{label : 'subscriptions', icon: 'loyalty'},
{label : 'music', icon: 'headphones'}


];

 const Layout = ({children}) => {

    const [open, setOpen] = useState(true)

 return (
<>
    <nav className="border-b w-full h-16 fixed left-0 top-0 z-10 px-5 flex justify-between items-center bg-white">
        <div className="flex  items-center gap-x-4">
        <button onClick={()=>setOpen(!open)} className=" hover:bg-gray-100 rounded-full w-10 h-10  flex justify-center items-center"> <span className="material-icons-outlined" style={{fontSize:40}}>menu</span> </button>
    <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2015-2017.png" alt="logo" className="w-16" />
    </div>
    
    <div className="w-1/2 flex flex-col">
    <form className="flex ">
        <input type="text"  className="border-slate-300 border rounded-l h-10 flex-1 p-3" placeholder="search"/>
        <button className="rounded-r border-slate-300 border border-l-0 h-10 flex items-center justify-center w-16 "> <span className="material-icons-outlined text-slate-400" style={{fontSize:40}}>search</span></button>
    </form>
     
    </div>
    
    <div className="flex  items-center gap-x-2">
        <button  className=" hover:bg-gray-100 rounded-full w-10 h-10  flex justify-center items-center"> <span className="material-icons-outlined" style={{fontSize:40}}>videocam</span> </button>
        <button  className=" hover:bg-gray-100 rounded-full w-10 h-10  flex justify-center items-center"> <span className="material-icons-outlined" style={{fontSize:40}}>notifications</span> </button>

    <img src="https://yt3.ggpht.com/IRFKXK8-e-F86GWGlCvYOlPsMLML85kHdJO27segWx7K05HxaY41p-BVjq3pRiqNsF9m-vbIdQ=s68-c-k-c0x00ffffff-no-rj" alt="logo" className="w-12 h-10 rounded-full" />
    </div>
    
    </nav>

    <aside className="overflow-auto border-r h-full fixed top-0 left-0 mt-16 flex flex-col px-3 gap-y-2 py-3" style={{
        width: open ? 250 : 70, 
        transition : '0.2s'}}>
    {
        menus.map((items,index)=>
           
            <button key={index}
             className= {`flex ${open ? 'flex-row' :'flex-col'} ${open ? 'items-start' : 'items-center'} gap-x-5 rounded-lg py-2 px-2 hover:bg-gray-100`}>
             
             <span className="material-icons-outlined text-slate-500">{items.icon}</span>
           
            <span className={`text-slate-700 capitalize ${open ? null : 'text-xs'}`}>
            { open ? items.label : items.label.slice(0,5)}</span>
            </button>
        )
    }

    </aside>

    <section className="mt-16" style={{
        marginLeft: open ? 250 :70,
        transition:'0.2s'
        }}>

        <h1 className="text-2xl">{children}</h1>

    </section>

</>
    )
}
export default Layout;