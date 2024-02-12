const GenderCheckbox = ()=>{
    return (
        // imported from DaisyUI 
            <div className="flex justify-center">
                <div className="form-control">
                    <label className={`label gap-2 cursor-pointer`}>
                        <span className="label-text text-black">Male</span>
                        <input type="checkbox" className="checkbox checkbox-xs checkbox-success  border-slate-900"/>
                    </label>
                </div>    
                
                <div>
                    <label className={`label gap-2 cursor-pointer`}>
                        <span className="label-text text-black">Female</span>
                        <input type="checkbox" className="checkbox checkbox-xs checkbox-success border-slate-900"/>
                    </label>
                </div>
            </div>
    );
}
export default GenderCheckbox;