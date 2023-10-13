export default function TestPage(){
    
    const env_var="env.process.MY_SECRET"
    return(
    <div className="flex justify-center items-center h-screen ">
        test page
        <p>`${env_var}`</p>
    </div>)  
}
