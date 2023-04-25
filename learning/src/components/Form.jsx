import React , {useState} from 'react'

export default function Form() {
    const [ userData, setUserData] = useState({
        name: "",
        email: "",
        gen:""
    })


    function handleChange(e) {
        setUserData(()=>{
            return {
                ...userData,
                [e.target.name]: e.target.value
            }
        })
    }
  return (
    <div className='flex h-screen items-center justify-center'>
        <form className='flex flex-col' onSubmit={(e)=>{
            e.preventDefault()
           
            console.log(userData);
            setUserData({
                name: "",
                email: "",
                gen:""
            })
        }}>
            <label>name</label>
            <input className='border border-black' type="text" name="name"  value={userData.name} onChange={handleChange}/>
            <br />
            <label>email</label>
            <input className='border border-black' type="email" name="email" value={userData.email} onChange={handleChange}/>
            <br />
            <label>gen</label>
            <input className='border border-black' type="text" name="gen" value={userData.gen} onChange={handleChange}/>
            <br />
            <input className='bg-blue-400 p-1 ' type="submit" value="submit" />
        </form>

        
    </div>
  )
}
